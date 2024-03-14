

export const getBalanceString= (inputNumber: number) : string => {
    return inputNumber.toString().split('').reverse().join('').replace(/(\d{3})/g, '$1 ').trim().split('').reverse().join('');
} 