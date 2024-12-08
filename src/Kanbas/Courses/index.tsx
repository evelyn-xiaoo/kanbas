import { Routes, Route, useParams, useLocation} from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";
import { addAssignment } from "./Assignments/reducer";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";
import QuizDetails from "./Quizzes/QuizDetails";

export default function Courses(
    { courses }: { courses: any[]; }
) {
    const {cid, aid} = useParams();
    const course = courses.find((course) => course._id === cid);
    const {pathname} = useLocation();


    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split('/')[4]}
            </h2> 
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation/>
                </div>
                
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:aid"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Quizzes" element={< Quizzes/>} />
                        <Route
                            path="Quizzes/Editor"
                            element={<QuizEditor />}
                        />
                        <Route
                            path="Quizzes/Detail/:qid"
                            element={<QuizDetails />}
                        />
                        <Route path="People" element={<PeopleTable/>}/>
                    </Routes>
                </div>
            </div>
        </div> 
  );
}
  