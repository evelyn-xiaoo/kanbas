
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: [] as any[],
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        enrollCourse: (state, { payload: enrollment }) => {
            const newEnrollment: any = {
                _id: enrollment._id,
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, enrollment] as any;
        },
        unenrollCourse : (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (a : any) => a._id !== enrollmentId
            ) as any;
        },
    },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;