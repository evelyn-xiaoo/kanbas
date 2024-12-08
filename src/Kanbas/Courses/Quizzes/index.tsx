import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import QuizControlButtons from "./QuizControlButtons";
import AssignmentPrefixButtons from "../Assignments/AssignmentPrefixButtons";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { deleteQuiz, setQuizzes, updateQuiz}
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentIndivButtons from "../Assignments/AssignmentIndivButtons";
import {FaPlus} from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
// import * as quizzesClient from "./client";
import QuizIndivButtons from "./QuizIndivButtons";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";

export default function Quizzes() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    //const [quizzes, setQuizzes ] = useState<any[]>([]);
    const dispatch = useDispatch();
    //const { currentUser } = useSelector((state: any) => state.accountReducer);
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async() => {
        if(cid) {
            const courseQuizzes = await coursesClient.getQuizzesForCourse(cid);
            setQuizzes(courseQuizzes);
        }
        
    }

    return (

        <li className="wd-quiz list-group-item p-0 mb-2 fs-5 border-gray">

            <div className="d-flex justify-content-end mb-2">
                {currentUser.role === "FACULTY" && ( 
                    <Link
                        to={`/Kanbas/Courses/${cid}/Quizzes/Editor`}
                        className="btn btn-danger btn-lg text-decoration-none text-white"
                    >
                        <FaPlus className="me-2" />
                        Quiz
                    </Link>
                )}
            </div>

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Quizzes <QuizControlButtons />
            </div>

            <ul id="wd-quizzes" className="list-group rounded-0">
                {quizzes
                    //.filter((quiz: any) => quiz.course === cid)
                    .map((quiz: any) => (
                        <li className="wd-module list-group-item p-0 fs-5 border-gray" key={quiz.id}>
                            <div className="wd-quiz-list-item p-3 ps-2 wd-lesson">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <AssignmentPrefixButtons />
                                        {currentUser.role === "FACULTY" ? ( 
                                            <Link
                                                to={`/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}
                                                className="text-decoration-none text-black"
                                            >
                                                <span className="ms-2 text-start">{quiz.title}</span>
                                            </Link>
                                         ) : (
                                            <Link
                                                to={`/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}
                                                className="text-decoration-none text-black"
                                            >
                                                <span className="ms-2 text-start">{quiz.title}</span>
                                            </Link> 
                                         )} 


                                    </div>

                                    {currentUser.role === "FACULTY" ? (
                                        <QuizIndivButtons quizId={quiz._id}
                                                          deleteQuiz={(quizId) => {
                                                                    dispatch(deleteQuiz(quizId))
                                                                }} 
                                                          courseId = {quiz.course}/>
                                    ) : (
                                        <LessonControlButtons/>

                                    )}
                                </div>

                                <ul className="ms-4 text-wrap txt-caption list-unstyled">
                                    <li>
                                        <span className="fw-bold">Available:</span> {new Date(quiz.available_date + 'T00:00:00').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 12:00pm |{" "}
                                        <span className="fw-bold">Due:</span> {new Date(quiz.due_date + 'T23:59:59').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 11:59pm |{" "}
                                        <span >{quiz.points} pts |{" "}</span>
                                        <span >{quiz.number_of_questions} Questions</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
            </ul>
        </li>
    );
}