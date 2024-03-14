import { HStack, Heading, ScrollView, Stack, Text, VStack } from 'native-base';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserContext } from '../components/providers/UserProvider';
import { getAccountTransactionListRequest } from '../services/api/accountTransactions';
import { AccountTransactions } from '../types/accountTransactions';
import {
  getDateString,
  groupItemsByMonthAndYear,
} from '../services/utils/dateTime';
import { DataTile } from '../components/DataTile';
import { MonthlyExpenses } from '../components/MonthlyExpenses';
import { LogoutButton } from '../components/LogoutButton';

export const TransactionHistoryList = ({ navigation }) => {
  const userContext = useContext(UserContext);

  const accountInformation = userContext.getSelectedAccountInformation();
  const userAccount = userContext.getCurrentUser();
  const bankApplication = userContext.getCurrentBank();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  const [accountTransactions, setAccountTransactions] = useState<
    AccountTransactions | undefined
  >(undefined);

  let groupedTransactions;
  if (accountTransactions?.transactions)
    groupedTransactions = groupItemsByMonthAndYear(
      accountTransactions.transactions
    );

  console.log(groupedTransactions);

  const useGetAccountInformationList = useQuery(
    ['getAccountInfo'],
    () => {
      if (accountInformation) {
        return getAccountTransactionListRequest(
          userAccount,
          bankApplication,
          accountInformation
        );
      }
    },
    {
      onSuccess: (response: any) => {
        setAccountTransactions(response.data);
      },
      retry: false,
      onError: (err: any) => {
        console.log('tesdsad', JSON.stringify(err));
      },
    }
  );

  return (
    <ScrollView>
      <VStack space={1} pt={'3'}>
        <Text fontSize={'3xl'} marginLeft="5%" marginTop={1} fontWeight={"bold"}>
          Historie
        </Text>
        {groupedTransactions &&
          Object.keys(groupedTransactions).map((month) => {
            return (
              <MonthlyExpenses
                transactions={groupedTransactions[month]}
                month={month}
              />
            );
          })}
      </VStack>
    </ScrollView>
  );
};
