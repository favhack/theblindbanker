import { useContext, useEffect } from 'react';
import { AccountInformationTile } from '../components/AccountInformationTile';
import { LogoutButton } from '../components/LogoutButton';
import { UserContext } from '../components/providers/UserProvider';

export const AccountInformationScreen = ({navigation}) => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  const currentAccounts = userContext.getAccountInformationList();
  console.log(currentAccounts);
  return <AccountInformationTile accountInformation={currentAccounts[0]} />;
};
