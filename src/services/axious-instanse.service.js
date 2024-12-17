import axios from 'axios';

const adminBaseUrl = "https://zumator-admin.updatemedaily.com/api";

const axiosInstance = axios.create({
    baseURL: adminBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data && response.data.success) {
            return response;
        }
    },
    (error) => {
        if (error.response) {
            console.log('API Error:', error.response.data.message || error.response.statusText);
        } else if (error.request) {
            console.log('Network Error: No response received from server');
        } else {
            console.log('Request Error:', error.message);
        }

        console.log('Something went wrong. Please try again later.');
        return Promise.reject(error);
    }
);

export default axiosInstance;
