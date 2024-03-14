import { StatusBar } from 'expo-status-bar';
import { Tile } from '../components/Tile';
import { Badge, HStack, Heading, Stack, Text, VStack } from 'native-base';
import { ScrollView } from 'react-native';
import { DataTile } from '../components/DataTile';
import { useContext, useEffect } from 'react';
import { UserContext } from '../components/providers/UserProvider';
import { getBalanceString } from '../services/utils/string';
import { LogoutButton } from '../components/LogoutButton';

export const HomeScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const selectedBankAccount = userContext.getSelectedAccountInformation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  return (
    <>
      <ScrollView>
        <DataTile>
          <HStack justifyContent='left'>
            <Stack direction='column' mb='2.5' mt='1.5' space={3}>
              <Stack direction='row' mb='2.5' mt='1.5' space={3}>
                <Text top={'2%'} fontSize={'md'} color={'coolGray.300'}>
                  Zůstatek
                </Text>
                {selectedBankAccount?.balances?.map(
                  (currentBalance, index: number) => {
                    console.log(currentBalance);
                    if (index < 1) {
                      return (
                        <Heading top={'1%'} color={'white'}>
                          {getBalanceString(currentBalance?.amount?.value ?? 0)}{' '}
                          {currentBalance?.amount?.currency}
                        </Heading>
                      );
                    }
                  }
                )}
              </Stack>
              <Stack direction='row' mb='2.5' mt='1.5' space={3}>
                <Text top={'2%'} fontSize={'md'} color={'coolGray.300'}>
                  Číslo účtu
                </Text>
                <Text top={'2%'} fontSize={'md'} color={'white'}>
                  {selectedBankAccount.identification.other ??
                    selectedBankAccount.identification.iban}
                </Text>
              </Stack>
            </Stack>
          </HStack>
        </DataTile>
        <Tile
          name='Zadat platbu'
          onClick={() => {
            console.log('test');
            navigation.navigate('NewTransaction');
          }}
        />
        <Tile
          name='Historie'
          onClick={() => navigation.navigate('TransactionHistory')}
        />
        <Tile
          name='Trvalé platby'
          onClick={() => navigation.navigate('PermanentTransactionList')}
        />
        <Tile
          name='Šablony'
          onClick={() => navigation.navigate('TemplateList')}
        />

        <Tile
          name='Informace o účtu'
          onClick={() => navigation.navigate('AccountInformation')}
        />
      </ScrollView>
    </>
  );
};
