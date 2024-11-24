import { Link } from "react-router-dom";
import { enrollCourse, unenrollCourse }
    from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

export default function Enroll({ courses }: { courses: any[] }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollReducer);

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
        );
    };

    const handleUnenroll = (courseId: string) => {
        const enrollment = enrollments.find(
            (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
        );
        if (enrollment) {
            dispatch(unenrollCourse(enrollment));
        }
    };

    const handleEnroll = (courseId: string) => {
        dispatch(enrollCourse({ user: currentUser._id, cid: courseId }));
    };


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <div
                                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>

                                        {isEnrolled(course._id) ? (
                                            <button className="btn btn-danger"
                                                    onClick={() => handleUnenroll(course._id)}> Unenroll </button>

                                        ) : (
                                            <button className="btn btn-success"
                                                    onClick={() => handleEnroll(course._id)}> Enroll </button>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );}