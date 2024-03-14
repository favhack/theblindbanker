import { APP_BASE_URL } from "../../constants";
import { BankApplication, UserAccount } from "../../types/user";

export const getBankLoginUrl = (bank: BankApplication): string => {
    return bank.apiUrl + "/login?redirectUri=" + APP_BASE_URL;
}

export const getBankList = (): BankApplication[] => {
    return [
        { type: 'fio', label: 'Fio banka', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'csob', label: 'ČSOB', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'kb', label: 'Komerční banka', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'mb', label: 'Moneta', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'rb', label: 'Raiffeisenbank', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'cs', label: 'Česká spořitelna', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'airbank', label: 'Airbank', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'equa', label: 'Equa bank', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'mBank', label: 'mBank', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'expobank', label: 'Expobank', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
        { type: 'creditas', label: 'Creditas', apiUrl: "https://api.airbank.cz/sandbox", clientId: "sandbox_client_id", clientSecret: "sandbox_client_secret"  },
    ];
}


export const getUserKey = (userAccount: UserAccount) : string =>  {
    return userAccount.bankType + "_" + userAccount.login;
}

export const getBankByType = (type: string): BankApplication | undefined => {
    const bankList = getBankList();

    for(let i = 0; i < bankList.length; i++){
        if(bankList[i].type === type){
            return bankList[i]
        }
    }
    return undefined
}




