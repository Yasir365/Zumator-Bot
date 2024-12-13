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

export const updatePoints = async (data) => {
    const response = await axiosInstance.post('/updatePoints', data);
    return response.data.data || null;
};

export const getOpsCards = async (category) => {
    const response = await axiosInstance.get(`/cards_api?category=${category}`);
    return response.data.records || [];
};

export const getTasks = async () => {
    const response = await axiosInstance.get('/tasks_api');
    return response.data.records || [];
};

export const getTopPlayer = async () => {
    const response = await axiosInstance.get('/top_players');
    return response.data.records || [];
};
