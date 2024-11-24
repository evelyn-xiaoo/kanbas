import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as assignmentsClient from "./client";
import {useLocation, useNavigate, useParams} from "react-router";
import { assignments } from "../../Database";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, updateAssignment, setAssignment} from "./reducer";
import * as coursesClient from "../client";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignment = useSelector((state: any) => state.assignmentReducer.assignment);
    const defaultAssignment = {
        title: "",
        description: "",
        points: 0,
        modules: 0,
        due: "",
        available: "",
    };

    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname.includes("add")) {
            dispatch(setAssignment(defaultAssignment))
        } else {
            const existingAssignment = assignments.find((a) => a._id === aid);
            if (existingAssignment) {
                dispatch(setAssignment(existingAssignment));
            }
        }
    }, [aid, dispatch]);
    const handleSave = async () => {
        if (pathname.includes("add")){
            if (!cid) return;
            const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment);
            dispatch(addAssignment({...assignment}));
        } else {
            await assignmentsClient.updateAssignment(assignment);
            dispatch((updateAssignment(assignment)));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h2>Edit Assignment</h2>

            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input type="text" className="form-control" value={assignment?.title || ""} placeholder="Assignment Name"
                       onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={6} value={assignment?.description || ""} onChange={(e) =>
                    dispatch(setAssignment({...assignment, description: e.target.value}))}/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-points" className="form-label">Points</label>
                <input type="number" id="wd-points" className="form-control" value={assignment?.points || 0} onChange={(e) =>
                    dispatch(setAssignment({...assignment, points: e.target.value}))} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-module-number" className="form-label">Module Number</label>
                <input type="number" id="wd-module-number" className="form-control" value={assignment?.modules || 0} onChange={(e) =>
                    dispatch(setAssignment({...assignment, modules: e.target.value}))} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                <input type="date" id="wd-due-date" className="form-control" value={assignment?.due || ""} onChange={(e) =>
                    dispatch(setAssignment({...assignment, due: e.target.value}))} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                <input type="date" id="wd-available-from" className="form-control" value={assignment?.available || ""} onChange={(e) =>
                    dispatch(setAssignment({...assignment, available: e.target.value}))} />
            </div>

            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}