import {
  GroupedTransactions,
  Transaction,
} from '../../types/accountTransactions';

export const getDateString = (dateInput: Date) => {
  console.log(dateInput);
  const date = new Date(dateInput);
  return `${date.getDate()}.${date.getMonth() + 1}. ${date.getFullYear()}`;
};

export const groupItemsByMonthAndYear = (
  items: Transaction[]
): GroupedTransactions => {
  const groupedItems = {};

  items.forEach((item) => {
    const date = new Date(item.valueDate.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1

    const key = `${year}-${month}`;

    if (!groupedItems[key]) {
      groupedItems[key] = [];
    }

    groupedItems[key].push(item);
  });

  return groupedItems;
};

export const months = [
  'Leden',
  'Únor',
  'Březen',
  'Duben',
  'Květen',
  'Červen',
  'Červenec',
  'Srpen',
  'Září',
  'Říjen',
  'Listopad',
  'Prosinec'
];
