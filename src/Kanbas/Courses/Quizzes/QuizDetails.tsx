import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "./reducer"; 
//import { quizzes } from "../../Database";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quiz = useSelector((state: any) => state.quizReducer.quiz);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // const quizzes = useSelector((state: any) => state.quizReducer.quizzes); 
    const defaultQuiz = {
    title: "Quiz",
    description: "Description",
    points: 100,
    assigned_group: "QUIZZES",
    type: "GRADED",
    shuffle: "YES",
    time: 20,
    multipleAttempts: "NO",
    showAns: "Immediately",
    accessCode: "",
    oneAtATime: "YES",
    webcam: "NO",
    lock: "NO",
    due_date: "2024-11-13",
    until_date: "2024-11-13",
    available_date: "2024-11-13"
    };

    const { pathname } = useLocation();
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
    }, [qid, quiz, dispatch, navigate, cid]);
//  STILL NEED TO FIX ERROS ON THE QUIZ PATHS AND QUIZ DETAILS

    return (
    
        <div className="container mt-4" id="wd-quiz-details">
            {/* Check if the current user is a student */}
            {currentUser.role === "STUDENT" ? (
                // Render content for students
                <>
                    <h1>{quiz?.title || "Quiz Details"}</h1>
                    <button className='btn btn-danger btn-lg text-decoration-none text-white'>Take Quiz</button>
                </>
            ) : (
                // Render default quiz content for others (e.g., instructors)
                <>
            <h1>{quiz?.title || "Quiz Details"}</h1>
            <div className="quiz-details">
                <div className="quiz-detail">
                    <strong>Quiz Type:</strong> {quiz?.type}
                </div>
                <div className="quiz-detail">
                    <strong>Points:</strong> {quiz?.points}
                </div>
                <div className="quiz-detail">
                    <strong>Assignment Group:</strong> {quiz?.assigned_group}
                </div>
                <div className="quiz-detail">
                    <strong>Shuffle Answers:</strong> {quiz?.shuffle}
                </div>
                <div className="quiz-detail">
                    <strong>Time Limit:</strong> {quiz?.time} minutes
                </div>
                <div className="quiz-detail">
                    <strong>Multiple Attempts:</strong> {quiz?.multipleAttempts}
                </div>
                <div className="quiz-detail">
                    <strong>Show Correct Answers:</strong> {quiz?.showAns}
                </div>
                <div className="quiz-detail">
                    <strong>One Question at a Time:</strong> {quiz?.oneAtATime}
                </div>
                <div className="quiz-detail">
                    <strong>Webcam Required:</strong> {quiz?.webcam}
                </div>
                <div className="quiz-detail">
                    <strong>Lock Questions After Answering:</strong> {quiz?.lock}
                </div>
            </div>
            <div className="quiz-dates">
                <div className="quiz-date">
                    <strong>Due:</strong> {quiz?.due_date}
                </div>
                <div className="quiz-date">
                    <strong>Available from:</strong> {quiz?.available_date}
                </div>
                <div className="quiz-date">
                    <strong>Until:</strong> {quiz?.until_date}
                </div>
            </div>
            </>
            )}
        </div>
    );
}