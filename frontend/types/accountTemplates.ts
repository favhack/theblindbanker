
export type AccountTemplate = {
    name?: string,
    paymentIdentification?: {
      instructionIdentification?: string
    },
    paymentTypeInformation?: {
      instructionPriority?: string
    },
    amount?: {
      instructedAmount?: {
        value?: number,
        currency?: string
      }
    },
    requestedExecutionDate?: Date,
    debtorAccount?: {
      identification?: {
        iban?: string
      }
    },
    creditorAccount?: {
      identification?: {
        iban?: string
      },
      currency?: string
    },
    remittanceInformation?: {
      unstructured?: string,
      structured?: {
        creditorReferenceInformation?: {
          reference?: string[]
        }
      }
    },
    redirectUrl?: string
}