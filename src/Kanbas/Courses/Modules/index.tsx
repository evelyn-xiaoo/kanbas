import ModulesControls from "./ModulesControls";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div>
        <ModulesControls /><br/><br/><br/><br/>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
              <ModuleControlButtons/>
              </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <LessonControlButtons/>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3"/>
                <span className="wd-title">READING</span>
                <LessonControlButtons/>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chaper 2 - Creating User</li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3"/>
                <span className="wd-title">SLIDES</span>
                <LessonControlButtons/>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Create an HTTP server with Node.js</li>
                  <li className="wd-content-item">Create a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <IoEllipsisVertical className="me-2 fs-3" />
              <BsGripVertical className="me-2 fs-3" />
              Week 2
              <ModuleControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <LessonControlButtons/>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <IoEllipsisVertical className="me-2 fs-3" />
              Week 3
              <ModuleControlButtons/>  
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES 
                <LessonControlButtons/>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
                <LessonControlButtons/>
               </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development 
                <LessonControlButtons/>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1 
              <LessonControlButtons/>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2 
              <LessonControlButtons/>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <IoEllipsisVertical className="me-2 fs-3" />
              Week 4
              <ModuleControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES 
                <LessonControlButtons/>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1 
              <LessonControlButtons/>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2 
              <LessonControlButtons/>
              </li>
            </ul>
          </li>

        </ul>
      </div>
  );}
  