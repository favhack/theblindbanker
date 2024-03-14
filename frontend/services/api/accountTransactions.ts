// AISP
import { AccountInformation } from "../../types/accountInformation";
import { BankApplication, UserAccount } from "../../types/user";
import { axiosInstance, getAuthHeader } from "./api"


export const getAccountTransactionListRequest = async (account: UserAccount, bank: BankApplication, accountInformation: AccountInformation) => {
    const url = bank.apiUrl + "/accountInfo/v3/my/accounts/" + accountInformation.id + "/transactions"

    console.log("GET " + url + " - MOCK");

    // return await axiosInstance.get(url, {
    //     headers: getAuthHeader(account)
    // } );
    
    // TODO REAL API CALl

    return {
        "data": {
            "pageNumber": 0,
            "pageCount": 1,
            "pageSize": 25,
            "totalCount": 8,
            "transactions": [
                {
                    "entryReference": "100401762",
                    "amount": {
                        "value": 1234.00,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "CRDT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2019-02-13T12:17:18Z"
                    },
                    "valueDate": {
                        "date": "2019-02-13T12:17:18Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000107000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "paymentInformationIdentification": "111",
                                "mandateIdentification": "0308",
                                "endToEndIdentification": "3200901513",
                                "clearingSystemReference": "DTRNOUTI"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 1234.00,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtor": {
                                },
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ1308000000009391423203"
                                    }
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0800"
                                        },
                                        "name": "Česká spořitelna, a.s.",
                                        "postalAddress": {
                                            "addressLine": "OLBRACHTOVA 6214000 PRAGUE"
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "remittanceInformation": {
                                "unstructured": " ",
                                "structured": {
                                    "creditorReferenceInformation": {
                                        "reference": [
                                            "VS:3200901513/SS:111/KS:0308"
                                        ]
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Příchozí úhrada"
                        }
                    }
                },
                {
                    "entryReference": "100401712",
                    "amount": {
                        "value": 5000.00,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "DBIT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2019-02-13T11:24:16Z"
                    },
                    "valueDate": {
                        "date": "2019-02-13T11:24:16Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000101000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "clearingSystemReference": "DTRNCLO"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 5000.00,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                },
                                "creditor": {
                                    "name": "BU1 EUR"
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ3230300000001000053027"
                                    },
                                    "name": "BU1 EUR"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Odchozí úhrada"
                        }
                    }
                },
                {
                    "entryReference": "100000423",
                    "amount": {
                        "value": 277.20,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "DBIT",
                    "reversalIndicator": false,
                    "status": "PDNG",
                    "bookingDate": {
                    },
                    "valueDate": {
                        "date": "2019-02-13T11:05:08Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "30000301000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "chequeNumber": "516844******0265",
                                "clearingSystemReference": "KBLOCK"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 277.20,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Karetní transakce (nezaúčtováno)"
                        }
                    }
                },
                {
                    "entryReference": "100401682",
                    "amount": {
                        "value": 1269.00,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "DBIT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2019-02-13T11:02:04Z"
                    },
                    "valueDate": {
                        "date": "2019-02-13T11:02:04Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000101000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "paymentInformationIdentification": "11",
                                "mandateIdentification": "456",
                                "endToEndIdentification": "98563",
                                "clearingSystemReference": "DTRNOUTO"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 1269.00,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                },
                                "creditor": {
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ4408000000001000642024"
                                    }
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0800"
                                        },
                                        "name": "Česká spořitelna, a.s.",
                                        "postalAddress": {
                                            "addressLine": "OLBRACHTOVA 6214000 PRAGUE"
                                        }
                                    }
                                }
                            },
                            "remittanceInformation": {
                                "unstructured": "objednavka cislo 98563",
                                "structured": {
                                    "creditorReferenceInformation": {
                                        "reference": [
                                            "VS:98563/SS:11/KS:456"
                                        ]
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Odchozí úhrada"
                        }
                    }
                },
                {
                    "entryReference": "100331092",
                    "amount": {
                        "value": 0.50,
                        "currency": "EUR"
                    },
                    "creditDebitIndicator": "CRDT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2018-12-17T07:22:36Z"
                    },
                    "valueDate": {
                        "date": "2018-12-17T07:22:36Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000101000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "paymentInformationIdentification": "111",
                                "mandateIdentification": "0308",
                                "endToEndIdentification": "3200901513",
                                "clearingSystemReference": "DTRNOUTO"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 0.50,
                                        "currency": "EUR"
                                    }
                                },
                                "counterValueAmount": {
                                    "amount": {
                                        "value": 14.00,
                                        "currency": "CZK"
                                    },
                                    "currencyExchange": {
                                        "sourceCurrency": "CZK",
                                        "targetCurrency": "EUR",
                                        "exchangeRate": 28
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtor": {
                                },
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ1001000001152957040227"
                                    }
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0100"
                                        },
                                        "name": "Komerční banka, a.s.",
                                        "postalAddress": {
                                            "addressLine": "Komerční banka, a.s."
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "remittanceInformation": {
                                "unstructured": " neco jako SEPA",
                                "structured": {
                                    "creditorReferenceInformation": {
                                        "reference": [
                                            "VS:3200901513/SS:111/KS:0308"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "entryReference": "100331252",
                    "amount": {
                        "value": 260.00,
                        "currency": "EUR"
                    },
                    "creditDebitIndicator": "CRDT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2018-12-12T22:59:59Z"
                    },
                    "valueDate": {
                        "date": "2018-12-12T14:03:55Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000403000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "clearingSystemReference": "ITRNSEPI"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 260.00,
                                        "currency": "EUR"
                                    }
                                },
                                "counterValueAmount": {
                                    "amount": {
                                        "value": 6760.00,
                                        "currency": "CZK"
                                    },
                                    "currencyExchange": {
                                        "sourceCurrency": "CZK",
                                        "targetCurrency": "EUR",
                                        "exchangeRate": 26
                                    }
                                }
                            },
                            "charges": {
                                "bearer": "SHARE"
                            },
                            "relatedParties": {
                                "debtor": {
                                    "name": "Dasa Malicka",
                                    "postalAddress": {
                                        "country": "SVK",
                                        "addressLine": "Ludvika Svobodu 2/4788,97901 Rimavska Sobota"
                                    }
                                },
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "SK6807200002891987426353"
                                    },
                                    "name": "Dasa Malicka"
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019",
                                        "other": {
                                            "identification": "1000053019/3030"
                                        }
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "SUBASKBXXXX"
                                        },
                                        "name": "SUBASKBXXXX",
                                        "postalAddress": {
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "remittanceInformation": {
                                "unstructured": "SEPA platba test                   "
                            },
                            "additionalTransactionInformation": "Příchozí SEPA úhrada"
                        }
                    }
                },
                {
                    "entryReference": "100331012",
                    "amount": {
                        "value": 500.00,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "DBIT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2018-12-12T07:07:33Z"
                    },
                    "valueDate": {
                        "date": "2018-12-12T07:07:33Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000101000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "clearingSystemReference": "DTRNCLO"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 500.00,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                },
                                "creditor": {
                                    "name": "BU1 EUR"
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ3230300000001000053027"
                                    },
                                    "name": "BU1 EUR"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Odchozí úhrada"
                        }
                    }
                },
                {
                    "entryReference": "100080472",
                    "amount": {
                        "value": 32500.00,
                        "currency": "CZK"
                    },
                    "creditDebitIndicator": "CRDT",
                    "reversalIndicator": false,
                    "status": "BOOK",
                    "bookingDate": {
                        "date": "2018-05-31T12:35:57Z"
                    },
                    "valueDate": {
                        "date": "2018-05-31T12:35:57Z"
                    },
                    "bankTransactionCode": {
                        "proprietary": {
                            "code": "10000107000",
                            "issuer": "CNB"
                        }
                    },
                    "entryDetails": {
                        "transactionDetails": {
                            "references": {
                                "paymentInformationIdentification": "111",
                                "mandateIdentification": "0308",
                                "endToEndIdentification": "3200901513",
                                "clearingSystemReference": "DTRNOUTI"
                            },
                            "amountDetails": {
                                "instructedAmount": {
                                    "amount": {
                                        "value": 32500.00,
                                        "currency": "CZK"
                                    }
                                }
                            },
                            "relatedParties": {
                                "debtor": {
                                },
                                "debtorAccount": {
                                    "identification": {
                                        "iban": "CZ6901000000001000053019"
                                    }
                                },
                                "creditorAccount": {
                                    "identification": {
                                        "iban": "CZ5430300000001000053019"
                                    },
                                    "currency": "CZK",
                                    "name": "BU1 CZK"
                                }
                            },
                            "relatedAgents": {
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0100"
                                        },
                                        "name": "Komerční banka, a.s.",
                                        "postalAddress": {
                                            "addressLine": "Komerční banka, a.s."
                                        }
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "bic": "AIRACZPP",
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "3030"
                                        },
                                        "name": "Air Bank a.s.",
                                        "postalAddress": {
                                            "addressLine": "Evropská 2690/17, 160 00 Praha 6"
                                        }
                                    }
                                }
                            },
                            "remittanceInformation": {
                                "unstructured": "AirTest - vypraný prádlo",
                                "structured": {
                                    "creditorReferenceInformation": {
                                        "reference": [
                                            "VS:3200901513/SS:111/KS:0308"
                                        ]
                                    }
                                }
                            },
                            "additionalTransactionInformation": "Příchozí úhrada"
                        }
                    }
                }
            ]
        }
    }
}
