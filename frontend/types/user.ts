export type BankApplication = {
    type: string,
    label: string,

    // environment
    apiUrl: string,
    clientId: string,
    clientSecret: string,
}

// example
// {
// "baseUrl": "https://api.airbank.cz/sandbox",
// "clientId": "sandbox_client_id",
// "clientSecret": "sandbox_client_secret",
// }

export type UserAccount = {

    login?: string
    bankType: string, // bank type

    accessToken?: string,
    refreshToken?: string

    loginCode?: string
}

// {
// 	"accessToken": "f756344f15574b5ca3919ede5b531981",
// 	"refreshToken": "12a9e0a2ba4e4100ba3c608e0d8a02a0",
// 	"code": "9911daf457ec4b3b81ada66f8a2afc1b" // login code
// }