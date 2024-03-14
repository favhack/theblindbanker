import { Formik } from 'formik';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  View,
  Text,
} from 'native-base';
import { useContext, useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useMutation } from 'react-query';
import { UserContext } from '../components/providers/UserProvider';
import { sendNewPaymentRequest } from '../services/api/payments';
import { getDateString } from '../services/utils/dateTime';
import { ConfirmModal } from '../components/ConfirmModal';
import { LogoutButton } from '../components/LogoutButton';

export const SendTransactionScreen = ({ navigation }) => {
  const [isDateEarliestPossible, setIsDateEarliestPossible] = useState(true);

  const [dateTimePickerOpen, setDateTimePickerOpen] = useState(false);

  const userContext = useContext(UserContext);
  const userAccount = userContext.getCurrentUser();
  const bankApplication = userContext.getCurrentBank();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const useSendNewPaymentRequest = useMutation(
    (params: { values: any }) =>
      sendNewPaymentRequest(userAccount, bankApplication, params.values),
    {
      onSuccess: (response, params) => {
        // Handle successful post
        console.log(response);
      },
      onError: (error: any) => {
        // Handle error
        console.log(error);
      },
    }
  );

  return (
    <>
      <ScrollView>
        {/* <ConfirmModal /> */}
        <View>
          <Box alignItems='center'>
            <Box width={'90%'}>
              <Formik
                initialValues={{
                  accountNumber: '',
                  amount: '0',
                  messageToRecipient: '',
                  messageToSelf: '',
                  variableSymbol: '',
                  specificSymbol: '',
                  constantSymbol: '',
                  date: new Date(),
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
                    <Text fontSize={'3xl'} marginTop={4} fontWeight={'bold'}>
                      Zadat platbu
                    </Text>
                    <FormControl.Label>Číslo účtu</FormControl.Label>
                    <Input
                      keyboardType='numeric'
                      value={values.accountNumber}
                      onChangeText={handleChange('accountNumber')}
                      placeholder='Číslo účtu'
                    />
                    <FormControl.Label>Částka</FormControl.Label>
                    <Input
                      keyboardType='numeric'
                      value={values.amount}
                      onChangeText={handleChange('amount')}
                      placeholder='Částka'
                    />
                    <FormControl.Label>Zpráva pro příjemce</FormControl.Label>
                    <Input
                      value={values.messageToRecipient}
                      onChangeText={handleChange('messageToRecipient')}
                      placeholder='Zpráva pro příjemce'
                    />
                    <FormControl.Label>Zpráva pro sebe</FormControl.Label>
                    <Input
                      value={values.messageToSelf}
                      onChangeText={handleChange('messageToSelf')}
                      placeholder='Zpráva pro sebe'
                    />
                    <FormControl.Label>Variabilní symbol</FormControl.Label>
                    <Input
                      value={values.variableSymbol}
                      onChangeText={handleChange('variableSymbol')}
                      placeholder='VS'
                    />
                    <FormControl.Label>Specifický symbol</FormControl.Label>
                    <Input
                      value={values.specificSymbol}
                      onChangeText={handleChange('specificSymbol')}
                      placeholder='SS'
                    />
                    <FormControl.Label>Konstantní symbol</FormControl.Label>
                    <Input
                      value={values.constantSymbol}
                      onChangeText={handleChange('constantSymbol')}
                      placeholder='KS'
                    />
                    <FormControl.Label mt={'5'}>
                      Datum splatnosti
                    </FormControl.Label>

                    {dateTimePickerOpen && (
                      <DateTimePicker
                        value={values.date}
                        onChange={(e, date) => {
                          setDateTimePickerOpen(false);
                          if (isDateEarliestPossible) {
                            if (date > new Date()) {
                              setFieldValue('date', date);
                            } else {
                              console.log(
                                'Error setting date: cant set before today'
                              );
                            }
                          }
                        }}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => setDateTimePickerOpen(true)}
                      accessibilityLabel='Tlačítko vybrat datum'
                    >
                      <Input
                        value={getDateString(values.date)}
                        onChangeText={handleChange('date')}
                        placeholder='Vybrat datum'
                        readOnly
                        InputRightElement={
                          <IconButton icon={<AntDesign name='calendar' />} />
                        }
                      />
                    </TouchableOpacity>
                    <Button mt={'5'} onPress={handleSubmit} bg={'#3C4165'}>
                      Odeslat
                    </Button>
                  </View>
                )}
              </Formik>
            </Box>
          </Box>
        </View>
      </ScrollView>
    </>
  );
};
