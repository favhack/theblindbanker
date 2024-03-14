import { Button, Heading, Spinner, Text, VStack } from 'native-base';
import { Tile } from '../components/Tile';
import { useContext, useState } from 'react';
import {
  addAccountToStorage,
  loadAllAccountsFromStorage,
  removeAccountFromStorage,
} from '../services/utils/storage';
import { useQuery } from 'react-query';
import { getBankByType } from '../services/utils/bank';
import { UserAccount } from '../types/user';
import { getUserAccountsMockData } from '../services/api/auth';

export const AccountListScreen = ({ navigation }) => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);

  const useGetUsers = useQuery(
    ['loadAccountsFromStorage'],
    () => loadAllAccountsFromStorage(),
    {
      onSuccess: (data: any) => {
        if (data && data.length > 0) {
          setAccounts(data);
        } else {
          console.log('USING MOCK storage accounts!');
          setAccounts(getUserAccountsMockData());
        }
      },
      retry: false,
      onError: (err: any) => {
        // Handle error here
        console.log('Error loading bank accounts from storage');
      },
    }
  );

  return (
    <VStack space={1}>
      {useGetUsers.isLoading ? (
        <Spinner />
      ) : (
        accounts?.map((account: UserAccount) => {
          return (
            <Tile
              name={account.login}
              onClick={() => navigation.navigate('Home')}
              subtitle={getBankByType(account.bankType).label}
              justifyContent={'left'}
            />
          );
        })
      )}

      <Tile
        name='Přidat účet'
        onClick={() => navigation.navigate('AddAccount')}
        backgroundColor={'#407254'}
      ></Tile>
    </VStack>
  );
};
