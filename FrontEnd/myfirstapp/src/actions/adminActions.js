import axios from "axios";

export const getUserRequests = () => async dispatch =>{
    return axios.get(`http://localhost:8080/api/users/userRequests`);
};

export const searchUserData = (search) => async dispatch =>{
    return axios.get(`http://localhost:8080/api/users/searchUser/${search}`);
};

export const approveUserRequest = (id) => async dispatch =>{
    const res = await axios.get(`http://localhost:8080/api/users/approve/${id}`);
};

export const rejectUserRequest = (id) => async dispatch =>{
    const res = await axios.get(`http://localhost:8080/api/users/reject/${id}`);
};

export const blockUserAccount = (id) => async dispatch =>{
    const res = await axios.post(`http://localhost:8080/api/users/blockUser/${id}`);
};

export const unblockUserAccount = (id) => async dispatch =>{
    const res = await axios.post(`http://localhost:8080/api/users/unblockUser/${id}`);
};

export const editUserDetails = (id, editUser) => async dispatch => {
    axios.post(`http://localhost:8080/api/users/editUser/${id}`, editUser);
  };


