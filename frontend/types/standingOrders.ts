
export type StandingOrder = {
    standingOrderIdentification?: {
        transactionIdentification?: string
      },
      amount?: {
        instructedAmount?: {
          value?: number,
          currency?: string
        }
      },
      standingOrder?: {
        alias?: string,
        execution?: {
          mode?: string,
          modeDue?: string,
          interval?: string,
          intervalDue?: string
        },
        validity?: string,
        exceptions?: string
      },
      debtorAccount?: {
        identification?: {
          iban?: string
        },
        currency?: string,
        id?: string
      }
}
