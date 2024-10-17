const baseUrl = "http://localhost:3000/the-sponsor-apis/v1/auth"


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
                    firstName: user.first_name,
                    lastName: user.last_name,
                    userId: user.id,
                    photoUrl: user.photo_url || '/images/profile.png'
                };
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                resolve(userInfo);
                saveInfo(user);
            } else {
                reject('User info not available');
            }
        } else {
            reject('Telegram WebApp SDK is not available');
        }
    });
};


async function saveInfo(data){
    try {
        const response = await fetch(`${baseUrl}/test`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to save user info');
        }
        console.log('User info saved successfully');
    } catch (error) {
        console.error('Error saving user info:', error);
    }
}