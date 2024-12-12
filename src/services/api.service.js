import axios from 'axios';

// const baseUrl = "http://localhost:3000/api/zumator-bot/v1"
const nodeBaseUrl = "https://zumbator-bot-backend.vercel.app/api/zumator-bot/v1"
const adminBaseUrl = "https://zumator-admin.updatemedaily.com/api"

export const registerUser = async (data) => {
    if (data) {
        try {
            const response = await axios.post(`${adminBaseUrl}/zumator_user_register`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {
                localStorage.setItem('token', 'this is a test token');
                return response.data.data;
            }
        } catch (error) {
            console.error('Error saving user info:', error);
        }
    }
}

export const saveReferal = async (data) => {
    try {
        const response = await axios.post(`${adminBaseUrl}/saveReferal`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data.data) {
            return response.data.data;
        }

    } catch (error) {
        console.error('Error saving referral user info:', error);
    }
};

export const getReferal = async (data) => {
    try {
        const response = await axios.post(`${adminBaseUrl}/getReferal`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data.data) {
            return response.data.data.user.first_name + " " + response.data.data.user.last_name;
        } else {
            return '';
        }

    } catch (error) {
        console.error('Error Fetching referral user info:', error);
        return '';
    }
};

export const getInvitedFriends = async (data) => {
    try {
        const response = await axios.post(`${adminBaseUrl}/getInvitedFriends`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status == 200) {
            return response.data.data;
        }
    } catch (error) {
        console.error('Error getting invited friends:', error);
        return [];
    }
}

export const deleteUserAccount = async (data) => {
    if (data) {
        try {
            const response = await axios.post(`${adminBaseUrl}/deleteAccount`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {
                return response.data;
            }
        } catch (error) {
            console.error('Error saving user info:', error);
        }
    }
}

export const updatePoints = async (data) => {
    if (data) {
        try {
            const response = await axios.post(`${adminBaseUrl}/updatePoints`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {
                return response.data.data;
            }
        } catch (error) {
            console.error('Error saving user info:', error);
        }
    }
}

export const getOpsCards = async (category) => {
    try {
        const response = await axios.get(`${adminBaseUrl}/cards_api?category=${category}`,);
        if (response.status == 200) {
            return response.data.records;
        }
    } catch (error) {
        console.error('Error getting invited friends:', error);
        return [];
    }
}

export const getTasks = async () => {
    try {
        const response = await axios.get(`${adminBaseUrl}/tasks_api`,);
        if (response.status == 200) {
            return response.data.records;
        }
    } catch (error) {
        console.error('Error getting invited friends:', error);
        return [];
    }
}