import { ErrorMessage, Field, Form, Formik } from 'formik';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Heading,
  IconButton,
  Input,
  Select,
  Text,
  View,
} from 'native-base';
import { useEffect, useState } from 'react';

import { getDateString } from '../services/utils/dateTime';
import { ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ConfirmModal } from '../components/ConfirmModal';
import { LogoutButton } from '../components/LogoutButton';

export const AddPermanentTransactionScreen = ({ navigation, route }) => {
  const [isDateEarliestPossible, setIsDateEarliestPossible] = useState(true);

  const [dateTimePickerOpen, setDateTimePickerOpen] = useState(false);

  const handleSubmit = (values) => {
    toggleModal();
    console.log(values);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  console.log('test', route?.params?.initialValues);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  const newInitialValues = {
    accountNumber: '',
    amount: '',
    repeating:
      route?.params?.initialValues?.standingOrder?.execution?.interval.toLowerCase(),
    messageToRecipient: '',
    messageToSelf: '',
    variableSymbol: '',
    specificSymbol: '',
    constantSymbol: '',
    date: new Date(),
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ConfirmModal
        isModalVisible={showModal}
        toggleModal={toggleModal}
        headerText={'Potvzení'}
        mainText={'Opravdu chete zrušit?'}
        confirmText={'Ano'}
        confimButtonColor={undefined}
        onConfirm={undefined}
      />
      <ScrollView>
        <View padding={'2%'}>
          <Box alignItems='center'>
            <Box w='95%'>
              <Formik
                initialValues={
                  route?.params?.initialValues
                    ? newInitialValues
                    : { date: new Date() }
                }
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
                    <Text fontSize={'3xl'} marginTop={2} fontWeight={'bold'}>
                      {route?.params?.initialValues
                        ? 'Upravit trvalou platbu'
                        : 'Vytvoření trvalé platby'}
                    </Text>
                    <FormControl.Label>Číslo účtu příjemce</FormControl.Label>
                    <Input
                      keyboardType='numeric'
                      value={values.accountNumber}
                      onChangeText={handleChange('accountNumber')}
                      placeholder='Číslo účtu příjemce'
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

                    <FormControl.Label>Opakování</FormControl.Label>

                    <Select
                      selectedValue={values.repeating}
                      minWidth='200'
                      accessibilityLabel='Výběr opakování platby'
                      placeholder='Výběr opakování platby'
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size='5' />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) =>
                        setFieldValue('repeating', itemValue)
                      }
                    >
                      <Select.Item label='Denně' value='daily' />
                      <Select.Item label='Týdně' value='weekly' />
                      <Select.Item label='Měsíčně' value='monthy' />
                      <Select.Item label='Čtvtletně' value='quarterly' />
                      <Select.Item label='Pololetně' value='half' />
                      <Select.Item label='Ročně' value='yearly' />
                    </Select>

                    <FormControl.Label>Další platba</FormControl.Label>

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
                    <Button mt={'5'} onPress={() => {}} bg={'#3C4165'}>
                      Vytvořit
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
