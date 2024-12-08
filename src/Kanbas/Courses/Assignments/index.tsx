import { useNavigate, useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentPrefixButtons from "./AssignmentPrefixButtons";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { deleteAssignment, setAssignment, setAssignments, updateAssignment}
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentIndivButtons from "./AssignmentIndivButtons";
import {FaPlus} from "react-icons/fa";
import * as assignmentsClient from "./client";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as coursesClient from "../client";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();
    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        navigate(0);
        //dispatch(deleteAssignment(assignmentId));
    };

    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };  useEffect(() => {
        fetchAssignments();
    }, [])

    return (

        <li className="wd-assignment list-group-item p-0 mb-2 fs-5 border-gray">

            <div className="d-flex justify-content-end mb-2">
                {currentUser.role === "FACULTY" && (
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/add`}
                        className="btn btn-danger btn-lg text-decoration-none text-white"
                    >
                        <FaPlus className="me-2" />
                        Assignment
                    </Link>
                )}
            </div>

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Upcoming Assignments <AssignmentControlButtons />
            </div>

            <ul id="wd-assignments" className="list-group rounded-0">
                {assignments
                    .map((assignment: any) => (
                        <li className="wd-module list-group-item p-0 fs-5 border-gray" key={assignment._id}>
                            <div className="wd-assignment-list-item p-3 ps-2 wd-lesson">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <AssignmentPrefixButtons />
                                        {currentUser.role === "FACULTY" ? (
                                            <Link
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                className="text-decoration-none text-black"
                                            >
                                                <span className="ms-2 text-start">{assignment.title}</span>
                                            </Link>
                                        ) : (
                                            <span className="ms-2 text-start">{assignment.title}</span>
                                        )}


                                    </div>

                                    {currentUser.role === "FACULTY" ? (
                                        <AssignmentIndivButtons assignmentId={assignment._id}
                                                                deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} />
                                    ) : (
                                    <LessonControlButtons/>

                                    )}
                                </div>

                                <ul className="ms-4 text-wrap txt-caption list-unstyled">
                                    <li>
                                        <span className="text-danger">{"Module " + assignment.modules}</span> |{" "}
                                        <span className="fw-bold">Available:</span> {new Date(assignment.available + 'T00:00:00').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 12:00pm |{" "}
                                        <span className="fw-bold">Due:</span> {new Date(assignment.due + 'T23:59:59').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 11:59pm |{" "}
                                        <span className="fw-bold">{assignment.points} pts</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
            </ul>
        </li>
    );
}