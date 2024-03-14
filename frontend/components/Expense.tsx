import { HStack, Heading, Stack, Text, VStack, View } from 'native-base';
import { Transaction } from '../types/accountTransactions';

export const Expense = ({ transaction }: { transaction: Transaction }) => {
  console.log(transaction.entryDetails);
  return (
    <Stack direction='row' mb='2.5' mt='1.5' space={3}>
      <VStack>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <VStack>
            <Text
              ellipsizeMode='clip'
              top={'2%'}
              fontSize={'lg'}
              color={'coolGray.300'}
            >
              {transaction.entryDetails.transactionDetails.additionalTransactionInformation
                ?.substring(0, 20)
                .concat(
                  transaction.entryDetails.transactionDetails
                    .additionalTransactionInformation?.length > 20
                    ? '...'
                    : ''
                ) || 'Neznámá transakce'}
            </Text>
            <Text top={'2%'} fontSize={'md'} color={'coolGray.300'}>
              {transaction.entryDetails.transactionDetails.relatedParties.creditorAccount?.name?.substring(
                0,
                transaction.entryDetails.transactionDetails.relatedParties
                  .creditorAccount?.name.length > 15
                  ? 15
                  : transaction.entryDetails.transactionDetails.relatedParties
                      .creditorAccount?.name.length
              )}
            </Text>
          </VStack>
          <Text top={'2%'} fontSize={'lg'} color={'coolGray.300'}>
            {transaction.amount.value}
            {transaction.amount.currency}
          </Text>
        </View>
      </VStack>
    </Stack>
  );
};
