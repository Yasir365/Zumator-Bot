import axiosInstance from "./axious-instanse.service";

export const registerUser = async (data) => {
    const response = await axiosInstance.post('/zumator_user_register', data);
    return response.data.data;
};

export const saveReferal = async (data) => {
    const response = await axiosInstance.post('/saveReferal', data);
    return response.data.data || null;
};

export const getReferal = async (data) => {
    const response = await axiosInstance.post('/getReferal', data);
    return response.data.data ? `${response.data.data.first_name} ${response.data.data.last_name}` : '';
};

export const getInvitedFriends = async (data) => {
    const response = await axiosInstance.post('/getInvitedFriends', data);
    return response.data.data || [];
};

export const deleteUserAccount = async (data) => {
    const response = await axiosInstance.post('/deleteAccount', data);
    return response.data || null;
};

export const getOpsCards = async (category, user_id) => {
    const response = await axiosInstance.get(`/cards_api?category=${category}&user_id=${user_id}`);
    return response.data.data || [];
};

export const getTasks = async (type) => {
    const response = await axiosInstance.get(`/tasks_api?task_type=${type}`);
    return response.data.data || [];
};

export const getTopPlayer = async () => {
    const response = await axiosInstance.get('/top_players');
    return response.data.data || [];
};

export const claimDailyReward = async (data) => {
    const response = await axiosInstance.post('/claim_daily_reward', data);
    return response.data.data || [];
};

export const upgradeOpsCard = async (data) => {
    const response = await axiosInstance.post('/user_upgrade_card_level', data);
    return response.data.data || [];
};

export const cliamTicket = async (data) => {
    const response = await axiosInstance.post('/claim_daily_tickets', data);
    return response.data.data || [];
};

export const getInviteFriendsTask = async (data) => {
    const response = await axiosInstance.post('/UserFriendInvitationReward', data);
    return response.data.data || [];
};

export const cliamFriendsReward = async (data) => {
    const response = await axiosInstance.post('/ClaimFriendInvitationReward', data);
    return response.data.data || [];
};

export const cliamMysteryBoxes = async (data) => {
    const response = await axiosInstance.post('/user_claim_mystery_boxes', data);
    return response.data.data || [];
};

export const getInvoiceLink = async (data) => {
    const response = await axiosInstance.post('/create-invoice', data);
    return response.data.link || '';
};

export const updatePaymentStatus = async (data) => {
    const response = await axiosInstance.post('/updatePaymentStatus', data);
    return response.data.data || [];
};
