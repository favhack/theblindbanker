export type AccountInformation = {
    currency?: string,
    id?: number,
    identification: {
        iban?: string,
        other?: string
    },
    nameI18N?: string,
    ownersNames?: string[],
    productI18N?: string,

    servicer?: {
        bankCode?: string,
        bic?: string,
        countryCode?: string
    }

    balances?: AccountBalance[],
    
}

export type AccountBalance = {
    type?: {
        codeOrProprietary?: {
            code?: string
        }
    },
    creditLine?: {
        included?: boolean
    },
    amount?: {
        value?: number,
        currency?: string
    },
    creditDebitIndicator?: string,
    date?: {
        dateTime?: Date
    }
}