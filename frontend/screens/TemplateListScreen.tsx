import { HStack, ScrollView, Text, VStack } from 'native-base';
import { Tile } from '../components/Tile';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserContext } from '../components/providers/UserProvider';
import { getAccountTemplateListRequest } from '../services/api/accountTemplates';
import { AccountTemplate } from '../types/accountTemplates';
import { DataTile } from '../components/DataTile';
import { getBalanceString } from '../services/utils/string';
import { LogoutButton } from '../components/LogoutButton';

export const TeplateListScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const userAccount = userContext.getCurrentUser();
  const bankApplication = userContext.getCurrentBank();

  const [accountTemplates, setAccountTemplates] = useState<
    AccountTemplate[] | undefined
  >(undefined);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  console.log(accountTemplates);

  const useGetAccountInformationList = useQuery(
    ['getAccountTemplates', userAccount],
    () => {
      if (userAccount) {
        return getAccountTemplateListRequest(userAccount, bankApplication);
      }
    },
    {
      onSuccess: (response: any) => {
        setAccountTemplates(response.data);
      },
      retry: false,
      onError: (err: any) => {
        console.log('tesdsad', JSON.stringify(err));
      },
    }
  );

  return (
    <ScrollView>
      <Text fontSize={'3xl'} marginLeft="5%" marginTop={2} fontWeight={"bold"}>
        Šablony
      </Text>
      <Tile
        name='Vytvořit šablonu'
        onClick={() => navigation.navigate('AddTemplate')}
      />
      <Text
        minW={'90%'}
        top={'2%'}
        bottom={'2%'}
        marginBottom={4}
        paddingX={'8%'}
        fontSize={'2xl'}
        fontWeight={"semibold"}
      >
        Seznam šablon
      </Text>
      {accountTemplates?.map((accountTemplate) => {
        return (
          <DataTile onClick={() => navigation.navigate('AddTemplate')}>
            <HStack>
              <Text
                style={{
                  marginRight: "auto",
                  flex: 1,
                }}
                fontSize={'xl'} color="white">{accountTemplate.name}</Text>
              <Text style={{
                textAlign: 'right',
                marginLeft: "auto",
                flex: 1
              }} fontSize={'xl'} color="white">- {getBalanceString(accountTemplate.amount.instructedAmount.value) + " " + accountTemplate.amount.instructedAmount.currency}</Text>

            </HStack>
          </DataTile>
        );
      })}
    </ScrollView>
  );
};
