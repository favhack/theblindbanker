export type AccountTransactions = {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;

  transactions?: Transaction[];
};

export type Transaction = {
    entryReference?: string,
    amount?: {
        value?: number,
        currency?: string,
    },
    creditDebitIndicator?: string,
    reversalIndicator?: boolean,
    status?: string,
    bookingDate?: {
        date?: Date
    },
    valueDate?: {
        date?: Date
    },
    bankTransactionCode?: {
        proprietary?: {
            code?: string,
            issuer?: string
        }
    },
    entryDetails?: {
        transactionDetails?: {
            references?: {
                paymentInformationIdentification?: string,
                mandateIdentification?: string,
                endToEndIdentification?: string,
                clearingSystemReference?: string
            },
            amountDetails?: {
                instructedAmount?: {
                    amount?: {
                        value?: number,
                        currency?: string
                    }
                }
            },
            relatedParties?: {
                debtor?: {
                },
                debtorAccount?: {
                    identification?: {
                        iban?: string
                    }
                },
                creditorAccount?: {
                    identification?: {
                        iban?: string
                    },
                    currency?: string,
                    name?: string
                }
            },
            relatedAgents?: {
                debtorAgent?: {
                    financialInstitutionIdentification?: {
                        clearingSystemMemberIdentification?: {
                            memberIdentification?: string
                        },
                        name?: string,
                        postalAddress?: {
                            addressLine?: string
                        }
                    }
                },
                creditorAgent?: {
                    financialInstitutionIdentification?: {
                        bic?: string,
                        clearingSystemMemberIdentification?: {
                            memberIdentification?: string
                        },
                        name?: string,
                        postalAddress?: {
                            addressLine?: string
                        }
                    }
                }
            },
            remittanceInformation?: {
                unstructured?: string,
                structured?: {
                    creditorReferenceInformation?: {
                        reference?: string[]
                    }
                }
            },
            additionalTransactionInformation?: string
        }
    }
}

export type GroupedTransactions = {
  [key: string]: Transaction[];
};
