import { createSlice } from "@reduxjs/toolkit";
//import { quizzes } from "../../Database";
import {useState} from "react";

const initialState = {
    quizzes: [] as any [],
    quiz: {
        title: "Quiz",
        description: "Description",
        points: 100,
        assigned_group: "QUIZZES",
        type: "GRADED",
        shuffle: "YES",
        time: 20,
        multipleAttempts: "NO",
        showAns: "NO",
        accessCode: "",
        oneAtATime: "YES",
        webcam: "NO",
        lock: "NO",
        due_date: "2024-11-13",
        until_date: "2024-11-13",
        available_date: "2024-11-13"
    },
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.quizzes,
            ];
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (a: any) => a._id !== quizId);
        },
        updateQuiz: (state, action) => {
            state.quizzes = state.quizzes.map((quiz) => {
                if (quiz._id === action.payload._id) {
                    return action.payload;
                } else {
                    return quiz;
                }
            });
        },
        setQuiz: (state, action) => {
            state.quiz = action.payload;
        },
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        }

    },
});
export const { addQuiz, deleteQuiz, updateQuiz, setQuiz, setQuizzes } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;