import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Text } from 'native-base';
import { SendTransactionScreen } from './screens/SendTransactionScreen';
import { AccountInformationScreen } from './screens/AccountInformationScreen';
import { AccountListScreen } from './screens/AccountListScreen';
import { AddAccountScreen } from './screens/AddAccountScreen';
import { TransactionHistoryList } from './screens/TransactionHistoryList';
import { AddTemplateScreen } from './screens/AddTemplateScreen';
import { TeplateListScreen } from './screens/TemplateListScreen';
import UserProvider from './components/providers/UserProvider';
import { AddPermanentTransactionScreen } from './screens/AddPermanentTransactionScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PermanentTransactionList } from './screens/PermanentTransactionList';
import { LogoutButton } from './components/LogoutButton';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='AccountList'>
              <Stack.Screen
                name='AccountList'
                component={AccountListScreen}
                options={{
                  title: 'The Blind Banker',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                }}
              />
              <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='NewTransaction'
                component={SendTransactionScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',

                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='AccountInformation'
                component={AccountInformationScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',

                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='AddAccount'
                component={AddAccountScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                }}
              />
              <Stack.Screen
                name='TransactionHistory'
                component={TransactionHistoryList}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',

                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='PermanentTransactionList'
                component={PermanentTransactionList}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='AddPermanentTransaction'
                component={AddPermanentTransactionScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='AddTemplate'
                component={AddTemplateScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
              <Stack.Screen
                name='TemplateList'
                component={TeplateListScreen}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#602D30',
                  },
                  headerTintColor: 'white',
                  headerRight: () => <LogoutButton onPress={() => {}} />,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
