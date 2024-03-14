import {
  Box,
  Button,
  Center,
  FormControl,
  IconButton,
  Input,
  Modal,
  Pressable,
  VStack,
  View,
  Text,
} from 'native-base';
import { Tile } from '../components/Tile';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import { getDateString } from '../services/utils/dateTime';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { LogoutButton } from '../components/LogoutButton';

export const AddTemplateScreen = ({ navigation }) => {
  const [dateTimePickerOpen, setDateTimePickerOpen] = useState(false);

  const handleSubmit = (values) => {
    toggleModal();
    console.log(values);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);


  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ConfirmModal
        isModalVisible={showModal}
        toggleModal={toggleModal}
        headerText={'Potvrdit platbu'}
        mainText={'Opravdu chete odeslat platbu?'}
        confirmText={'Odeslat'}
        confimButtonColor={undefined}
        onConfirm={undefined}
      />
      <ScrollView>
        <View padding={'5%'}>
          <Box alignItems='center'>
            <Box w='98%'>
              <Formik
                initialValues={{
                  templateName: '',
                  accountNumber: '',
                  amount: '',
                  messageToRecipient: '',
                  messageToSelf: '',
                  variableSymbol: '',
                  specificSymbol: '',
                  constantSymbol: '',
                  date: new Date(),
                }}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleSubmit, values, setFieldValue }) => (
                  <View>
                    <Text fontSize={'3xl'} marginTop={0} fontWeight={'bold'}>
                      Vytvoření šablony
                    </Text>
                    <FormControl.Label>Název šablony</FormControl.Label>
                    <Input
                      value={values.templateName}
                      onChangeText={handleChange('templateName')}
                      placeholder='Název šablony'
                    />
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
                    <FormControl.Label>Den splatnosti</FormControl.Label>
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

                    {dateTimePickerOpen && (
                      <DateTimePicker
                        value={values.date}
                        onChange={(e, date) => {
                          setDateTimePickerOpen(false);
                          setFieldValue('date', date);
                        }}
                      />
                    )}

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
