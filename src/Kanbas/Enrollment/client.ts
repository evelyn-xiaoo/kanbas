import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const deleteEnrollment = async (userId: string) => {
    const { data } = await axios.delete(`${ENROLLMENTS_API}/${userId}`);
    return data;
};