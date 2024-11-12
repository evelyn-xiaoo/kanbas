import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, action: PayloadAction<{ user: string; cid: string }>) => {
            const { user, cid } = action.payload;
            const newEnrollment = {
                _id: `${Date.now()}`, // unique ID
                user: user,
                course: cid,
            };
            state.enrollments.push(newEnrollment);
        },
        unenrollCourse: (state, action: PayloadAction<{ user: string; course: string }>) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) => !(enrollment.user === action.payload.user && enrollment.course === action.payload.course)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
