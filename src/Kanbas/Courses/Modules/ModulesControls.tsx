import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-between align-items-center" >
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1" aria-label="Add Module" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      <div className="dropdown me-1">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Publish All"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              aria-label="Publish all modules and items"
              onClick={() => {/* Your publish logic here */}}
            >
              <GreenCheckmark />
              Publish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              aria-label="Publish modules only"
              onClick={() => {/* Your publish logic here */}}
            >
              <GreenCheckmark />
              Publish modules only
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
              aria-label="Unpublish all modules and items"
              onClick={() => {/* Your unpublish logic here */}}
            >
              Unpublish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-modules-only"
              className="dropdown-item"
              aria-label="Unpublish modules only"
              onClick={() => {/* Your unpublish logic here */}}
            >
              Unpublish modules only
            </button>
          </li>
        </ul>
      </div>

      <button
        id="wd-view-progress"
        className="btn btn-lg me-1"
        aria-label="View Progress"
        onClick={() => {/* Your view progress logic here */}}
      >
        View Progress
      </button>
      
      <button
        id="wd-collapse-all"
        className="btn btn-lg me-1"
        aria-label="Collapse All"
        onClick={() => {/* Your collapse logic here */}}
      >
        Collapse All
      </button>
      
      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                    setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
}
