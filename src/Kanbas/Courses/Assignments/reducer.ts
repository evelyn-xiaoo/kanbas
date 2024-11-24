import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: `${Date.now()}`,  // Example of generating a unique ID
                title: assignment.title,
                course: assignment.course,
                points: assignment.points,
                due: assignment.due,
                available: assignment.available,
                description: assignment.description,
                modules: assignment.modules,
            };
            state.assignments.push(newAssignment);
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((assignment: any) => {
                if (assignment._id === updatedAssignment._id) {
                    const availableDate = new Date(updatedAssignment.available);
                    const dueDate = new Date(updatedAssignment.due);

                    // Format directly to string to avoid timezone shifts
                    const formattedAvailableDate = availableDate.toISOString().split('T')[0];
                    const formattedDueDate = dueDate.toISOString().split('T')[0];

                    return {
                        ...assignment,
                        ...updatedAssignment,
                        available: formattedAvailableDate,
                        due: formattedDueDate
                    };
                }
                return assignment;
            });
        },



        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

