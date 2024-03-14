
import { UserAccount, BankApplication } from "../../types/user";
import { axiosInstance, getRefreshAuthHeader } from "./api"

// AUTH
export const refreshAuthToken = async (account: UserAccount, bank: BankApplication) => {

    // TODO change to refresh auth token
    const url = bank.apiUrl + "/login"

    console.log("POST " + url);

    return await axiosInstance.post(
        url,
        {
            "grant_type" : "refresh_token",
            "refresh_token" : account.refreshToken,
            "client_id" : bank.clientId,
            "client_secret" : bank.clientSecret
        },
        {
            headers: getRefreshAuthHeader(account)
        });
}


export const getUserAccountsMockData = () : UserAccount[] => {
    return [
        {

            login: "frantisek.kaiser",
            bankType: "fio", // bank type
        
            accessToken: "ladskfjasůldkfja",
            refreshToken: "asdfasdfadfsdfs",
            loginCode: "dfaadsadfsadfsfdsa",
        },
        {

            login: "josef.bozdech",
            bankType: "kb", // bank type
        
            accessToken: "ladskfjasůldkfja",
            refreshToken: "asdfasdfadfsdfs",
            loginCode: "dfaadsadfsadfsfdsa",
        }
    ]
}

