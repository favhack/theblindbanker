// PISP

import { BankApplication, UserAccount } from "../../types/user";
import { axiosInstance, getAuthHeader } from "./api";

export const sendNewPaymentRequest = async (account: UserAccount, bank: BankApplication, payment: any) => {
    console.log(payment);

    // TODO change to refresh auth token
    const url = bank.apiUrl + "/login"

    console.log("POST " + url);

    return await axiosInstance.post(
        url,
        {
            "paymentIdentification": {
              "instructionIdentification": "NejakeID41785962314574"
            },
            "paymentTypeInformation": {
              "instructionPriority": "NORM"
            },
            "amount": {
              "instructedAmount": {
                "value": 1048.64,
                "currency": "CZK"
              }
            },
            "requestedExecutionDate": "2018-06-01",
            "debtorAccount": {
              "identification": {
                "iban": "CZ5430300000001000053019"
              }
            },
            "creditorAccount": {
              "identification": {
                "iban": "CZ6330300000000000000123"
              },
              "currency": "CZK"
            },
            "remittanceInformation": {
              "unstructured": "VS/7418529630/SS/1234567890",
              "structured": {
                "creditorReferenceInformation": {
                  "reference": [
                    "VS:5010000000",
                    "KS:9",
                    "SS:1005"
                  ]
                }
              }
            },
            "redirectUrl": "https://jump.to.anywhere/authorized"
          },
        {
            headers: getAuthHeader(account)
        });
}
