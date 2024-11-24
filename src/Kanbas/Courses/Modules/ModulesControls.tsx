import { FaPlus } from "react-icons/fa6";
import React from "react";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModuleControls({
                                            moduleName,
                                            setModuleName,
                                            addModule,
                                        }: {
    moduleName: string;
    setModuleName: (title: string) => void;
    addModule: () => void;
}) {
    return (
        <div id="wd-modules-controls " className="text-nowrap">
            <button className="btn btn-lg btn-secondary" id=" wd-view-progress">
                Collapse All
            </button>
            <button className="btn btn-lg btn-secondary mx-2" id=" wd-collapse-all">
                View Progress
            </button>

            <button
                className="btn btn-lg btn-danger me-1 float-end"
                id="wd-add-module-btn"
                data-bs-toggle="modal"
                data-bs-target="#wd-add-module-dialog">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
            <div className="dropdown d-inline me-1 float-end  ">
                <button
                    id="wd-publish-all-btn"
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown">
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish modules only
                        </a>
                    </li>
                    <li>
                        <a id=" wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                            Unpublish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                            Unpublish modules only
                        </a>
                    </li>
                </ul>
            </div>
            <ModuleEditor
                dialogTitle="Add Module"
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={addModule}
            />
        </div>
    );
}