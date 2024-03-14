import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserKey } from './bank';
import { parse } from 'react-native-svg';
import { UserAccount } from '../../types/user';

export const addAccountToStorage = async (userAccount: UserAccount) => {
    try {
        await AsyncStorage.setItem(getUserKey(userAccount), JSON.stringify(userAccount));
        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
    }
};

export const removeAccountFromStorage = async (userAccount: UserAccount) => {
    try {
        await AsyncStorage.removeItem(getUserKey(userAccount));
        console.log('Data removed successfully');
    } catch (error) {
        console.error('Error removing data:', error);
    }
};

export const loadAllAccountsFromStorage = async () => {
    try {
        const allKeys = await AsyncStorage.getAllKeys();
        const allData = await AsyncStorage.multiGet(allKeys);
        const parsedData = allData.map(([_, value]) => JSON.parse(value));

        return parsedData

    } catch (error) {
        console.error('Error loading data:', error);
    }
};