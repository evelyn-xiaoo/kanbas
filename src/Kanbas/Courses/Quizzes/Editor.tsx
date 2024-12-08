import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoCalendarOutline} from "react-icons/io5";
import {useLocation, useNavigate, useParams} from "react-router";
//import {assignments, quizzes} from "../../Database";
import {useDispatch, useSelector} from "react-redux";
import {addQuiz, setQuiz, updateQuiz} from "./reducer";
import {addAssignment} from "../Assignments/reducer";
import * as quizClient from "./client";
//import { courses, quizzes } from '../../Database';
import * as coursesClient from "../client";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const quiz = useSelector((state: any) => state.quizReducer.quiz);
    const defaultQuiz = {
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
    };

    useEffect(() => {
        if (pathname.includes("Editor")) {
            dispatch(setQuiz(defaultQuiz))
        } else {
            /*
            const existingQuiz = quizzes.find((q) => q._id === qid);
            if (existingQuiz) {
                dispatch(setQuiz(existingQuiz));
            }
            */
        }
    }, [qid, dispatch]);
    
    const handleSave = async () => {
        if (pathname.includes("Editor")){
            if(!cid) return;
            await coursesClient.createQuizForCourse(cid, quiz);
            dispatch(addQuiz({...quiz, course: cid}));
        } else {
            await quizClient.updateQuiz(quiz);
            dispatch(updateQuiz(quiz))
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };




    return (
        <div className="container mt-4" id="wd-quizzes-editor">
            <h2>Edit Quiz</h2>

            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Quiz Name</label>
                <input type="text" className="form-control" value={quiz?.title} placeholder="Quiz Name"
                       onChange={(e) => dispatch(setQuiz({ ...quiz, title: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={6} value={quiz?.description} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, description: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-points" className="form-label">Points</label>
                <input type="number" id="wd-points" className="form-control" value={quiz?.points} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, points: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-type" className="form-label">Quiz Type</label>
                <select id="wd-type" className="form-select" value={quiz?.type} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, type: e.target.value }))}>
                <option>Graded Quiz</option>
                    <option>Practice Quiz</option>
                    <option>Graded Survey</option>
                    <option>Ungraded Survey</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-assigned-group" className="form-label">Assignment Group</label>
                <select id="wd-assigned-group" className="form-select" value={quiz?.assigned_group} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, assigned_group: e.target.value }))}>
                    <option>Quizzes</option>
                    <option>Exams</option>
                    <option>Assignments</option>
                    <option>Project</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-shuffle" className="form-label">Shuffle Answers</label>
                <select id="wd-shuffle" className="form-select" value={quiz?.shuffle} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, shuffle: e.target.value }))}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-time" className="form-label">Time Limit (Minutes)</label>
                <input type="number" id="wd-time" className="form-control" value={quiz?.time} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, time: Number(e.target.value) }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-multiple-attempts" className="form-label">Allow Multiple Attempts</label>
                <select id="wd-multiple-attempts" className="form-select" value={quiz?.multipleAttempts} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, multipleAttempts: e.target.value }))}>
                    <option>No</option>
                    <option>Yes</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-show-answers" className="form-label">Show Correct Answers</label>
                <select id="wd-show-answers" className="form-select" value={quiz?.showAns} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, showAns: e.target.value }))}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-access-code" className="form-label">Access Code</label>
                <input type="text" id="wd-access-code" className="form-control" value={quiz?.accessCode} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, accessCode: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-one-at-a-time" className="form-label">One Question at a Time</label>
                <select id="wd-one-at-a-time" className="form-select" value={quiz?.oneAtATime} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, oneAtATime: e.target.value }))}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-webcam" className="form-label">Webcam Required</label>
                <select id="wd-webcam" className="form-select" value={quiz?.webcam} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, webcam: e.target.value }))}>
                    <option>No</option>
                    <option>Yes</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-lock" className="form-label">Lock Questions After Answering</label>
                <select id="wd-lock" className="form-select" value={quiz?.lock} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, lock: e.target.value }))}>
                <option>No</option>
                    <option>Yes</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                <input type="date" id="wd-due-date" className="form-control" value={quiz?.due_date} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, due_date: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-available-date" className="form-label">Available From</label>
                <input type="date" id="wd-available-date" className="form-control" value={quiz?.available_date} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, available_date: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-until-date" className="form-label">Until</label>
                <input type="date" id="wd-until-date" className="form-control" value={quiz?.until_date} onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, until_date: e.target.value }))}/>
            </div>

            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}