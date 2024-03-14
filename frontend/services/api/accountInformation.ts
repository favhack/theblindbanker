// AISP
import { AccountInformation } from "../../types/accountInformation";
import { BankApplication, UserAccount } from "../../types/user";
import { axiosInstance, getAuthHeader } from "./api"

// BANK ACCOUNT
export const getAccountInformationListRequest = async (account: UserAccount, bank: BankApplication) => {
    const url = bank.apiUrl + "/accountInfo/v3/my/accounts"
    
    console.log("GET " + url);

    return await axiosInstance.get(url, {
        headers: getAuthHeader(account)
    } );
}

export const getAccountBalanceListRequest = async (account: UserAccount, bank: BankApplication,accountInformation: AccountInformation) => {
    const url = bank.apiUrl + "/accountInfo/v3/my/accounts/" + accountInformation.id + "/balance"
    
    console.log("GET " + url);

    return await axiosInstance.get(url, {
        headers: getAuthHeader(account)
    } );
}
