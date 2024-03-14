import { Formik } from 'formik';
import { Box, Button, FormControl, Select, View, Text } from 'native-base';

import { getBankByType, getBankList } from '../services/utils/bank';

import { useState } from 'react';
import { BankApplication } from '../types/user';

import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();
const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'com.spolecenstvo.theblindbanker',
});

export const AddAccountScreen = ({ navigation }) => {
  const handleSubmit = () => { };

  const [bankList, setBankList] = useState<BankApplication[]>(getBankList());

  const [selectedBank, setSelectedBank] = useState<BankApplication>(
    getBankList()[0]
  );

  //com.spolecenstvo.theblindbanker
  const discovery = AuthSession.useAutoDiscovery(
    'https://developers.airbank.cz/sandbox/login'
  );

  const clientId = 'sandbox_client_id';
  const clientSecret = 'sandbox_client_secret';
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: 'sandbox_client_id',
      clientSecret: 'sandbox_client_secret',
      redirectUri,
      scopes: ['PISP', 'AISP', 'CISP'],
    },
    discovery
  );

  const airbankRedirectUri = AuthSession.makeRedirectUri();

  const config = {
    authorizationEndpoint: 'http://developers.airbank.cz/sandbox/login',
    tokenEndpoint: 'https://api.airbank.cz/sandbox/oauth2/token',
    clientId: clientId,
    redirectUri: airbankRedirectUri,
    scopes: ['openid', 'profile', 'email'], // Add any additional scopes you need
  };

  const loginToAirbank = async () => {
    try {
      const authUrl = `${config.authorizationEndpoint}?client_id=${config.clientId}&redirectUri=${config.redirectUri}&state=203`;
      const result = await WebBrowser.openBrowserAsync(authUrl);

      if (result.type === 'success') {
        // Authentication successful, extract the authorization code from the URL
        const { url } = result;
        const code = new URL(url).searchParams.get('code');

        // Send the authorization code to your backend server for token exchange
        const tokenExchangeResponse = await fetch(backendTokenExchangeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            clientId: airbankClientId,
            redirectUri: airbankRedirectUri,
          }),
        });

        if (tokenExchangeResponse.ok) {
          const { accessToken } = await tokenExchangeResponse.json();
          console.log('Access token:', accessToken);
        } else {
          console.error('Token exchange failed:', tokenExchangeResponse.status);
        }
      } else {
        // Authentication failed or cancelled by the user
        console.error('Authentication error:', result.type);
      }
    } catch (error) {
      // General error handling
      console.error('Error:', error.message);
    }
  };

  return (
    <Box alignItems='center'>
      <Box w='93%'>
        <Formik
          initialValues={{
            bankId: bankList[0].type,
          }}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <View>
              <Text fontSize={'3xl'} marginTop={0} marginBottom={2} fontWeight={"bold"}>
              Přidání účtu
              </Text>
              <FormControl.Label>Vybrat banku</FormControl.Label>
              <Select
                selectedValue={values.bankId}
                onValueChange={(itemValue) => {
                  setFieldValue('bankId', itemValue);
                  setSelectedBank(getBankByType(itemValue));
                }}
              >
                {bankList.map((item, index) => (
                  <Select.Item
                    label={item.label}
                    value={item.type}
                    key={index}
                  />
                ))}
              </Select>

              <Button mt={'5'} onPress={() => loginToAirbank()}>
                Přihlásit se
              </Button>
            </View>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
