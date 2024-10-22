import axios from 'axios';

// const baseUrl = "https://zumbator-bot-backend-ulzr.vercel.app/"
const baseUrl = "http://localhost:3000/api/zumator-bot/v1"


export const fetchUserInfo = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        return Promise.resolve(JSON.parse(userInfo));
    }

    return new Promise((resolve, reject) => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();

            const user = window.Telegram.WebApp.initDataUnsafe?.user;

            if (user) {
                const userInfo = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    telegram_id: user.id,
                };

                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                saveUser(userInfo);  // Save user info asynchronously
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

    } catch (error) {
        console.error('Error saving user info:', error);
    }
}

const generateInviteLink = () => {
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

        localStorage.setItem('ref', JSON.stringify(response.data.first_name + ' ' + response.data.last_name));

    } catch (error) {
        console.error('Error saving referral user info:', error);
    }
};
