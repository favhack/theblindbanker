// AISP
import { BankApplication, UserAccount } from "../../types/user";

export const getStandingOrderListRequest = async (account: UserAccount, bank: BankApplication) => {
    const url = bank.apiUrl + "/accountInfo/v3/my/standingorders"

    console.log("GET " + url + " - MOCK");
    // return await axiosInstance.get(url, {
    //     headers: getAuthHeader(account)
    // } );
    
    // TODO REAL API CALl

    return {
        "data": {
          "standingOrders": [
            {
              "standingOrderIdentification": {
                "transactionIdentification": "11111"
              },
              "amount": {
                "instructedAmount": {
                  "value": 1.00,
                  "currency": "CZK"
                }
              },
              "standingOrder": {
                "alias": "Alimenty František",
                "execution": {
                  "mode": null,
                  "modeDue": null,
                  "interval": "MONTHLY",
                  "intervalDue": null
                },
                "validity": null,
                "exceptions": null
              },
              "debtorAccount": {
                "identification": {
                  "iban": "CZ2230300000133344447019"
                },
                "currency": "CZK",
                "id": "700633333098"
              }
            },
            {
              "standingOrderIdentification": {
                "transactionIdentification": "2222"
              },
              "amount": {
                "instructedAmount": {
                  "value": 25000.00,
                  "currency": "CZK"
                }
              },
              "standingOrder": {
                "alias": "Maňka",
                "execution": {
                  "mode": null,
                  "modeDue": null,
                  "interval": "MONTHLY",
                  "intervalDue": null
                },
                "validity": null,
                "exceptions": null
              },
              "debtorAccount": {
                "identification": {
                  "iban": "CZ2211110000002022227019"
                },
                "currency": "CZK",
                "id": "444444"
              }
            }
          ]
        }
    }

}
