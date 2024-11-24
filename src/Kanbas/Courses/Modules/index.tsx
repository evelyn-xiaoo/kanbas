import { useParams } from "react-router";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import React, {useEffect, useState} from "react";
import ModulesControls from "./ModulesControls";
import {addModule, editModule, updateModule, deleteModule, setModules}
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";


export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [moduleName, setModuleName] = useState("");
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    return (
        <ul id="wd-modules" className="list-group rounded-0">
            {currentUser.role === "FACULTY" && (
                <ModulesControls
                    moduleName={moduleName}
                    setModuleName={setModuleName}
                    addModule={createModuleForCourse}
                />
            )}
            {modules
                .map((module: any) => (
                     <li key={module._id} className="wd-module list-group-item p-0 mb-2 fs-5 mt-4 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary ">
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            {module.editing && currentUser.role === "FACULTY" && (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) =>
                                        dispatch(updateModule({ ...module, name: e.target.value }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...module, editing: false });
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}
                            {currentUser.role === "FACULTY" && (
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => removeModule(moduleId)}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                                        {currentUser.role === "FACULTY" && <LessonControlButtons />}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
        </ul>
    );
}