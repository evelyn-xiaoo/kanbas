import { AiOutlineSearch } from "react-icons/ai";
import {BsGripVertical} from "react-icons/bs"
import { FaPlus } from "react-icons/fa";
import AssignmentModuleControlButtons from "./AssignmentModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as db from "../../Database"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Assignments() {
  const {cid} = useParams();
  const assignments = db.assignments;

    return (
      <div id="wd-assignments" className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="position-relative">
            <AiOutlineSearch className="position-absolute top-50 start-0 translate-middle-y ms-2" />
            <input id="wd-search-assignment" className="form-control ps-5"
                placeholder="Search for Assignments" />
          </div>
          <div>
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-start">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </button>
            <button id="wd-add-group-btn" className="btn btn-lg btn-white me-1 float-start">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </button>
          </div>
        </div>
        
        <div className="list-group rounded-0 wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center w-100">
            <div className="d-flex justify-content-start align-items-center w-60">
              <BsGripVertical/>
              <text id="wd-assignments-title" className="mb-0">ASSIGNMENTS</text>
            </div>
            <div className="d-flex justify-content-space-between align-items-center w-40">
              <button className="mb-0 me-4 btn btn-sm btn-secondary border border-white">40% of Total</button>
              <AssignmentModuleControlButtons />
            </div>
          </div>
          <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">
            {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
            <li className="wd-module list-group-item p-0 border-gray">
              <li className="d-flex wd-lesson list-group-item ps-1 justify-content-between align-items-center w-100">
              <div className="d-flex align-items-center w-60">
                <BsGripVertical/>
                <div className="ms-2">
                  <Link 
                  className="wd-assignment-link"
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                  {assignment.title}
                  </Link>
                  <p className="text-muted small m-0">
                  Available: {assignment.available} | Due: {assignment.due} | Points: {assignment.points}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end w-40 ms-2">
                <AssignmentControlButtons/>
              </div>
              </li>
            </li>
            ))}
            
          </ul>

        </div>
      </div>
  );}
  