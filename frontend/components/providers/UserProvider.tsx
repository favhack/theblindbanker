
import React, { ReactNode, useState } from 'react';
import { getBankByType } from '../../services/utils/bank';
import { useQuery } from 'react-query';
import { AccountInformation, AccountBalance } from '../../types/accountInformation';
import { UserAccount, BankApplication } from '../../types/user';
import { getAccountBalanceListRequest, getAccountInformationListRequest } from '../../services/api/accountInformation';

export interface UserContextValue {
    setCurrentUser: (userAccount: UserAccount) => void;
    getCurrentUser: () => UserAccount | undefined;
    setCurrentBank: (userAccount: BankApplication) => void;
    getCurrentBank: () => BankApplication | undefined;

    getAccountInformationList: () => AccountInformation[] | undefined;

    getSelectedAccountInformation: () => AccountInformation | undefined;
    setSelectedAccountInformation: (index: number) => void;
}

export const UserContext = React.createContext<UserContextValue>({
    setCurrentUser: () => { },
    getCurrentUser: () => { return undefined },
    setCurrentBank: () => { },
    getCurrentBank: () => { return undefined; },

    getAccountInformationList: () => { return undefined; },

    getSelectedAccountInformation: () => { return undefined; },
    setSelectedAccountInformation: (index: number) => { },
});

const UserProvider = ({ children }: { children: ReactNode }) => {

    const [userAccount, setUserAccount] = useState<UserAccount | undefined>({
        bankType: "fio",
        accessToken: "f756344f15574b5ca3919ede5b531981",
        refreshToken: "12a9e0a2ba4e4100ba3c608e0d8a02a0"
    });
    const [bankApplication, setBankApplication] = useState<BankApplication | undefined>(getBankByType("fio"));

    const setCurrentUser = (newUser: UserAccount | undefined) => {
        setUserAccount(newUser);
    };
    const getCurrentUser = () => {
        return userAccount;
    }
    const getCurrentBank = () => {
        return bankApplication;
    }
    const setCurrentBank = (newBank: BankApplication | undefined) => {
        setBankApplication(newBank);
    };

    const [accountInformationList, setAccountInformationList] = useState<AccountInformation[]>([])

    const [selectedAccountInformationIndex, setSelectedAccountInformationIndex] = useState<number>(0)

    const getAccountInformationList = (): AccountInformation[] => {
        return [{ "id": 10000411, "identification": { "iban": "CZ54 3030 0000 0010 0005 3019", "other": "1000053019/3030" }, "currency": "CZK", "servicer": { "bankCode": "3030", "countryCode": "CZ", "bic": "AIRACZPP" }, "nameI18N": "BU1 CZK", "productI18N": "CURRENT", "ownersNames": ["Karel Spořivka"], "balances": [{ "type": { "codeOrProprietary": { "code": "PRCD" } }, "creditLine": { "included": false }, "amount": { "value": 38749, "currency": "CZK" }, "creditDebitIndicator": "CRDT", "date": { "dateTime": new Date("2019-02-13T09:12:29Z") } }, { "type": { "codeOrProprietary": { "code": "CLAV" } }, "creditLine": { "included": false }, "amount": { "value": 38749, "currency": "CZK" }, "creditDebitIndicator": "CRDT", "date": { "dateTime": new Date("2019-02-13T09:12:29Z") } }] }, { "id": 10000413, "identification": { "iban": "CZ32 3030 0000 0010 0005 3027", "other": "1000053027/3030" }, "currency": "EUR", "servicer": { "bankCode": "3030", "countryCode": "CZ", "bic": "AIRACZPP" }, "nameI18N": "BU1 EUR", "productI18N": "CURRENT", "balances": [{ "type": { "codeOrProprietary": { "code": "PRCD" } }, "creditLine": { "included": false }, "amount": { "value": 17.86, "currency": "EUR" }, "creditDebitIndicator": "CRDT", "date": { "dateTime": new Date("2019-02-13T09:13:31Z") } }, { "type": { "codeOrProprietary": { "code": "CLAV" } }, "creditLine": { "included": false }, "amount": { "value": 17.86, "currency": "EUR" }, "creditDebitIndicator": "CRDT", "date": { "dateTime": new Date("2019-02-13T09:13:31Z") } }] }, { "id": 10000414, "identification": { "iban": "CZ10 3030 0000 0010 0005 3035", "other": "1000053035/3030" }, "currency": "USD", "servicer": { "bankCode": "3030", "countryCode": "CZ", "bic": "AIRACZPP" }, "nameI18N": "BU1 USD", "productI18N": "CURRENT", "balances": [{ "type": { "codeOrProprietary": { "code": "PRCD" } }, "creditLine": { "included": false }, "amount": { "value": 0, "currency": "USD" }, "creditDebitIndicator": "DBIT", "date": { "dateTime": new Date("2019-02-13T09:14:23Z") } }, { "type": { "codeOrProprietary": { "code": "CLAV" } }, "creditLine": { "included": false }, "amount": { "value": 0, "currency": "USD" }, "creditDebitIndicator": "DBIT", "date": { "dateTime": new Date("2019-02-13T09:14:23Z") } }] }, { "id": 10000415, "identification": { "iban": "CZ85 3030 0000 0010 0005 3043", "other": "1000053043/3030" }, "currency": "CZK", "servicer": { "bankCode": "3030", "countryCode": "CZ", "bic": "AIRACZPP" }, "nameI18N": "SU1 CZK", "productI18N": "SAVINGS", "balances": [{ "type": { "codeOrProprietary": { "code": "PRCD" } }, "creditLine": { "included": false }, "amount": { "value": 0, "currency": "CZK" }, "creditDebitIndicator": "DBIT", "date": { "dateTime": new Date("2019-02-13T09:14:47Z") } }, { "type": { "codeOrProprietary": { "code": "CLAV" } }, "creditLine": { "included": false }, "amount": { "value": 0, "currency": "CZK" }, "creditDebitIndicator": "DBIT", "date": { "dateTime": new Date("2019-02-13T09:14:47Z") } }] }];
    }

    const setSelectedAccountInformation = (index: number): void => {
        setSelectedAccountInformationIndex(index);
    }

    const getSelectedAccountInformation = (): AccountInformation => {

        if (!accountInformationList?.[selectedAccountInformationIndex]) {
            return getAccountInformationList()[selectedAccountInformationIndex]
        }

        // TODO -> return from state
        return getAccountInformationList()[selectedAccountInformationIndex]
    }

    const useGetAccountInformationList = useQuery(['getAccountInfo',], () => {
        return getAccountInformationListRequest(userAccount, bankApplication);
    },
        {
            onSuccess: (response: any) => {
                if (response?.data?.accounts) {
                    setAccountInformationList(response.data.accounts)
                }
            },
            retry: false,
            onError: (err: any) => {
                console.log(JSON.stringify(err))
            },
        });

    const useGetAccountBalanceList = useQuery(['getAccountInfo', accountInformationList], () => {
        if (accountInformationList) {
            const UserIdList: number[] = [];
            const promises = accountInformationList?.map(accountInformation => getAccountBalanceListRequest(userAccount, bankApplication, accountInformation));
            return Promise.all(promises);
        }
    },
        {
            onSuccess: (responses: any) => {
                const newAccountBalances: AccountBalance[] = []
                const newAccounts = [...accountInformationList]
                for (let i = 0; i < responses.length; i++) {
                    if (responses?.[i]?.data?.balances) {
                        newAccounts[i].balances = [...responses[i].data.balances]
                    }
                }
                setAccountInformationList(newAccounts)
            },
            onError: (err: any) => {
                console.log(JSON.stringify(err))
            },
        });

    return (
        <UserContext.Provider value={{
            // userAccount + bankApplication settings
            setCurrentUser, getCurrentUser, setCurrentBank, getCurrentBank,

            // concrete bank account data
            getAccountInformationList, getSelectedAccountInformation, setSelectedAccountInformation
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
