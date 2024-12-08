import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteEnrollment = async (userId: string) => {
    const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}`);
    return data;
};