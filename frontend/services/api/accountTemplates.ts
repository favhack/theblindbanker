// AISP
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../../components/providers/UserProvider";
import { AccountInformation } from "../../types/accountInformation";
import { AccountTemplate } from "../../types/accountTemplates";
import { BankApplication, UserAccount } from "../../types/user";
import { groupItemsByMonthAndYear } from "../utils/dateTime";
import { getAccountTransactionListRequest } from "./accountTransactions";
import { axiosInstance, getAuthHeader } from "./api"



export const getAccountTemplateListRequest = async (account: UserAccount, bank: BankApplication) => {
    const url = bank.apiUrl + "/accountInfo/v3/my/accounts/templates"

    console.log("GET " + url + " - MOCK");

    // return await axiosInstance.get(url, {
    //     headers: getAuthHeader(account)
    // } );
    
    // TODO REAL API CALl

    return {
        "data": [{
            "name" : "Alimenty Franta",
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
            "name" : "Alimenty Julča",
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
        ]
    }

}
