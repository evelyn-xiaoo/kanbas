import { enrollCourse, unenrollCourse, setEnrollments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import * as enrollmentsClient from "./client";
import * as userClient from "../Account/client";
import * as coursesClient from "../Courses/client";
import { useNavigate } from "react-router";

export default function Enroll({
                                   courses,
                                   setCourses,
                               }: {
    courses: any[];
    setCourses: (courses: any) => void;
}) {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollReducer);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    const fetchAllCourses = async () => {
        const allCourses = await coursesClient.fetchAllCourses();
        setAllCourses(allCourses);
    };
    const fetchCourses = async () => {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
    };

    const fetchEnrollments = async () => {
        const enrollments = await userClient.findEnrollmentsForUser(currentUser._id);
        setEnrollments(enrollments);
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchAllCourses();
            await fetchCourses();
            await fetchEnrollments();
        };
        fetchData();
    }, []);

    const isEnrolled = (courseId: string) => {
        const enrolled = enrollments.some(
            (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
        );
        return enrolled;
    };

    const handleUnenroll = async (courseId: string) => {
        const enrollment = enrollments.find(
            (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );
            await enrollmentsClient.deleteEnrollment(enrollment._id);
            dispatch(unenrollCourse(enrollment._id));
            await fetchCourses();
    };


    const handleEnroll = async (user_id: string, course_id: string) => {
        const newEnrollment = {
            _id: new Date().getTime().toString(),
            user: user_id,
            course: course_id,
        }
        const enrollment = await userClient.createEnrollment(newEnrollment);
        dispatch(enrollCourse(enrollment));
        await fetchCourses();
    };

    const enrollUser = async (user_id: string, course_id: string) => {
        const newEnrollment = {
            _id: new Date().getTime().toString(),
            user: user_id,
            course: course_id,
        }
        const enrollment = await userClient.createEnrollment(newEnrollment);
        navigator(-1);
        dispatch(enrollCourse(enrollment));
        await fetchCourses();
    };


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {allCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <div className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course Thumbnail" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                            
                                        </p>
                                        {isEnrolled(course._id) ? (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleUnenroll(course._id)}
                                            >
                                                Unenroll
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success"
                                                onClick={() => enrollUser(currentUser._id, course._id)}
                                            >
                                                Enroll 
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}