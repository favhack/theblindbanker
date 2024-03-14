import axios from "axios"
import { UserAccount } from "../../types/user"
import { refreshAuthToken } from "./auth";
import { useContext } from "react";
import { UserContext } from "../../components/providers/UserProvider";

export const axiosInstance = axios.create({
    withCredentials: true
})


axios.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;

        // If the error is due to authentication failure (HTTP 401)
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Attempt to refresh the authentication token
                const userContext = useContext(UserContext);
                const newUserAccount = {...userContext.getCurrentUser()};
                const bankApplication = userContext.getCurrentBank();

                console.log("Refreshing auth token")
                const response = await refreshAuthToken(newUserAccount, bankApplication);

                newUserAccount.accessToken = response.data.acces_token;
                newUserAccount.refreshToken = response.data.refresh_token;

                // Retry the original request with the new authentication token
                return axios(originalRequest);
            } catch (refreshError) {
                // Handle refresh token failure
                // For example, redirect to login page or display an error message
                console.error('Failed to refresh authentication token:', refreshError);
                throw refreshError;
            }
        }

        // For other errors, pass the error along
        return Promise.reject(error);
    }
);

export const getAuthHeader = (userAccount: UserAccount) => {
    return {
        'Authorization': `Bearer ${userAccount.accessToken}`,
        'Content-Type': 'application/json', // Adjust content type if needed
    }
}

export const getRefreshAuthHeader = (userAccount: UserAccount) => {
    return {
        'Authorization': `Bearer ${userAccount.refreshToken}`,
        'Content-Type': 'application/json', // Adjust content type if needed
    }
}

