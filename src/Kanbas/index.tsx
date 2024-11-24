import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import {useEffect, useState} from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Enroll from "./Enrollment/Enroll";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import {useSelector} from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);


    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
    };
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Session>
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route
                        path="/Dashboard"
                        element={ <ProtectedRoute>
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />
                            </ProtectedRoute> } />
                    <Route
                        path="/Dashboard/Enroll"
                        element={ <ProtectedRoute>
                            <Enroll
                                courses={courses}
                                setCourses={setCourses}/>
                        </ProtectedRoute> } />

                    <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
        </Session>
    );
}