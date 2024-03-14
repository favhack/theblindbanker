import { HStack, Stack, Text, VStack } from 'native-base';
import { DataTile } from './DataTile';
import { AccountInformation } from '../types/accountInformation';

export const AccountInformationTile = ({
  accountInformation,
}: {
  accountInformation: AccountInformation;
}) => {
  return (
    <VStack>
      <Text fontSize={'3xl'} marginTop={2} marginLeft={"5%"} fontWeight={"bold"}>
        Informace o účtu
      </Text>
      <DataTile alignItems={'left'}>
        <HStack>
          <VStack>

            <Text fontSize={'sm'} color={"white"}>Typ účtu</Text>
            <Text fontSize={'xl'} bold color={"white"}>
              {accountInformation.nameI18N}
            </Text>
            <Text fontSize='sm' color={"white"}>Majitel účtu</Text>
            <Text fontSize={'xl'} bold color={"white"}>
              {accountInformation.ownersNames}
            </Text>
            <Text fontSize='sm' color={"white"} >Číslo účtu</Text>
            <Text fontSize={'xl'} bold color={"white"}>
              {accountInformation.identification.other}
            </Text>
            <Text fontSize='sm' color={"white"}>IBAN</Text>
            <Text fontSize={'xl'} bold color={"white"}>
              {accountInformation.identification.iban}
            </Text>
            <Text fontSize='sm' color={"white"}>BIC/SWIFT</Text>
            <Text fontSize={'xl'} bold color={"white"}>
              {accountInformation.servicer.bic}
            </Text>
          </VStack>
        </HStack>
      </DataTile>
    </VStack>

  );
};
