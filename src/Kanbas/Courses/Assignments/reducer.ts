import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: [] as any[],
    assignment: {
        title: "Assignment",
        description: "Description",
        points: 100,
        due: "2024-11-13",
        modules: 1,
        available: "2024-11-13",
    },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];

        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    },
});
export const { addAssignment, deleteAssignment, setAssignments, updateAssignment, editAssignment, setAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;