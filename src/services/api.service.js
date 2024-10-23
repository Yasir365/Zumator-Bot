import axios from 'axios';

// const baseUrl = "http://localhost:3000/api/zumator-bot/v1"
const baseUrl = "https://zumbator-bot-backend.vercel.app/api/zumator-bot/v1"


export const fetchUserInfo = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        return Promise.resolve(JSON.parse(userInfo));
    }

    return new Promise((resolve, reject) => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();

            const user = window.Telegram.WebApp.initDataUnsafe?.user;
            const test = window.Telegram.WebApp.themeParams;
            // const test2 = window.Telegram.WebApp.initDataUnsafe;

            console.log("Test InitData :: ", test);
            // console.log("Test InitDataUnsafe :: ", test2);


            if (user) {
                const userInfo = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    telegram_id: user.id,
                };

                saveUser(userInfo);
                resolve(userInfo);
            } else {
                reject(new Error('User info not available'));
            }
        } else {
            reject(new Error('Telegram WebApp SDK is not available'));
        }
    });
};

async function saveUser(data) {
    try {
        const response = await axios.post(`${baseUrl}/register`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Failed to save user info');
        }

        if (response.data.data) {
            localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        }

    } catch (error) {
        console.error('Error saving user info:', error);
    }
}

export const generateInviteLink = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (!user || !user.telegram_id) {
        throw new Error('User info is not available to generate invite link');
    }

    const inviteLink = `${window.location.origin}?ref=${user.telegram_id}`;
    return inviteLink;
};

export const handleInviteClick = () => {
    try {
        const link = generateInviteLink();
        const message = `Hey! Join Zumator using my invite link: ${link}`;

        window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`);
    } catch (error) {
        console.error('Error generating invite link:', error);
    }
};

export const saveRefUser = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/saveRefUser`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Failed to save referral user info');
        }

        if (response.data.data) {
            localStorage.setItem('ref', JSON.stringify(response.data.data.first_name + ' ' + response.data.data.last_name));
        }

    } catch (error) {
        console.error('Error saving referral user info:', error);
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
        return response.data.data;
    } catch (error) {
        console.error('Error getting invited friends:', error);
        return [];
    }
}