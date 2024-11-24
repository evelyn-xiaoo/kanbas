import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
    const { cid } = useParams();  // Extract course ID from URL
    const { pathname } = useLocation();  // Get the current path

    const links = [
        { label: "Home", id: "wd-course-home-link", path: `/Kanbas/Courses/${cid}/Home` },
        { label: "Modules", id: "wd-course-modules-link", path: `/Kanbas/Courses/${cid}/Modules` },
        { label: "Piazza", id: "wd-course-piazza-link", path: `/Kanbas/Courses/${cid}/Piazza` },
        { label: "Zoom", id: "wd-course-zoom-link", path: `/Kanbas/Courses/${cid}/Zoom` },
        { label: "Assignments", id: "wd-course-assignments-link", path: `/Kanbas/Courses/${cid}/Assignments` },
        { label: "Quizzes", id: "wd-course-quizzes-link", path: `/Kanbas/Courses/${cid}/Quizzes` },
        { label: "Grades", id: "wd-course-people-link", path: `/Kanbas/Courses/${cid}/Grades` },
        { label: "People", id: "wd-course-people-link", path: `/Kanbas/Courses/${cid}/People` },
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 pe-2">
            {links.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    id={link.id}
                    className={`list-group-item text-danger border border-0
            ${pathname.includes(link.label) ? "list-group-item active" : ""}`}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
