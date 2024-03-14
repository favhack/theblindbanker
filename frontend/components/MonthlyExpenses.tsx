import { HStack, Heading, Stack, Text, VStack } from 'native-base';
import { Transaction } from '../types/accountTransactions';
import { DataTile } from './DataTile';
import { Expense } from './Expense';
import { months } from '../services/utils/dateTime';

type MonthlyExpensesProps = {
  transactions: Transaction[];
  month: string;
};

export const MonthlyExpenses: React.FC<MonthlyExpensesProps> = ({
  transactions,
  month,
}) => {
  const splitMonthAndYear = month.split('-');

  return (
    <>
      <Text fontSize={'xl'} marginLeft='5%'>
        {months[Number(splitMonthAndYear[1]) - 1]} {splitMonthAndYear[0]}
      </Text>
      <DataTile>
        <VStack mb='2.5' mt='1.5' space={3}>
          {transactions?.map((transaction) => (
            <Expense transaction={transaction} />
          ))}
        </VStack>
      </DataTile>
    </>
  );
};
