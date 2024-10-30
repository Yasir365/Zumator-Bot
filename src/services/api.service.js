import axios from 'axios';

const baseUrl = "http://localhost:3000/api/zumator-bot/v1"
// const baseUrl = "https://zumbator-bot-backend.vercel.app/api/zumator-bot/v1"

export async function registerUser(data) {
    try {
        const response = await axios.post(`${baseUrl}/register`, data, {
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

export const generateInviteLink = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (!user) {
        throw new Error('User info is not available to generate invite link');
    }
    const botUsername = "ZumatorTestBot";
    const appId = "7518320908";
    const link = `https://t.me/${botUsername}?startapp=ref${user.user.id}`;
    const message = `Hey! Join Zumator using my invite link.`;
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`
};

export const handleInviteClick = () => {
    try {
        const link = generateInviteLink();
        window.open(link);
    } catch (error) {
        console.error('Error generating invite link:', error);
    }
};

export const saveReferal = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/saveReferal`, data, {
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

export const getReferal = async () => {
    try {
        const data = JSON.parse(localStorage.getItem('userInfo'));
        const response = await axios.post(`${baseUrl}/getReferal`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data.data) {
            return response.data.data.user.first_name + " " + response.data.data.user.last_name;
        }else{
            return '';
        }

    } catch (error) {
        console.error('Error Fetching referral user info:', error);
        return '';
    }
};

export const getInvitedFriends = async () => {
    const data = JSON.parse(localStorage.getItem('userInfo'));
    try {
        const response = await axios.post(`${baseUrl}/getInvitedFriends`, data, {
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

export const updateCloseButton = async (route) => {
    if (typeof window !== 'undefined') {
        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();
        // console.log("WebApp ::::::: ", WebApp);
        
        if (route == 'main') {
            WebApp.BackButton.hide()
        } else {
            WebApp.BackButton.show().onClick(() => {
                window.history.back();
            });
        }

    }
}