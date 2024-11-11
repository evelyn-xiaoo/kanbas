import * as db from "../../Database"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const {aid} = useParams()
  const assignments = db.assignments;
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        {assignments
          .filter((assignment: any) => assignment._id === aid)
          .map((assignment: any) => (
            <div className="d-flex align-items-start flex-column w-100">
          <div className="mb-3 w-100">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <div>
              <input
                id="wd-name"
                className="form-control"
                value={assignment.title}
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="wd-description" className="form-label"></label>
            <div>
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              value={assignment.description}
            />
            </div>
          </div>

          <div className="d-flex align-items-center flex-row w-100">
            <label htmlFor="wd-points" className="form-label me-3 col-3 text-end mb-0">Points</label>
            <div className="">
              <input id="wd-points" className="form-control" value={assignment.points} />
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center flex-row w-100">
            <label htmlFor="wd-points" className="form-label me-3 col-3 text-end mb-0">Assignment Group</label>
            <div>
              <select id="wd-assignment-group" className="form-control">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center flex-row w-100">
            <label htmlFor="wd-points" className="form-label me-3 col-3 text-end mb-0">Display Grade as</label>
            <div>
              <select id="wd-assignment-group" className="form-control">
                <option value="ASSIGNMENTS">Percentage</option>
              </select>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center flex-row w-100">
            <label htmlFor="wd-points" className="form-label me-3 col-3 text-end mb-0">Submission Type</label>
            <div className="border w-50 p-4">
              <select id="wd-assignment-group" className="form-control">
                <option value="ASSIGNMENTS">Online</option>
              </select>
              <br/>
              <div className="mb-3">
                <label className="fw-bold">Online Entry Options:</label>
                <div className="form-check">
                  <input type="checkbox" id="wd-chkbox-text" className="form-check-input" />
                  <label htmlFor="wd-chkbox-text" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-chkbox-website" className="form-check-input" />
                  <label htmlFor="wd-chkbox-website" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-chkbox-media" className="form-check-input" />
                  <label htmlFor="wd-chkbox-media" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-chkbox-annotation" className="form-check-input" />
                  <label htmlFor="wd-chkbox-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-chkbox-file" className="form-check-input" />
                  <label htmlFor="wd-chkbox-file" className="form-check-label">File Upload</label>
                </div>
              </div>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center flex-row w-100">
            <label htmlFor="wd-points" className="form-label me-3 col-3 text-end mb-0">Assign</label>
            <div className="border w-50 p-4">
              <div className="d-flex flex-column w-100">
                <label className="fw-bold">Assign to</label>
                <div className="">
                  <select id="wd-text-fields-assign-to" className="form-control">
                    <option value="Everyone">Everyone</option>
                  </select>
                </div>
              </div>
              <br/>

              <div className="d-flex flex-column w-100">
                <label className="fw-bold">Due</label>
                  <div className="">
                    <input
                      type="datetime-local"
                      id="wd-text-fields-due"
                      className="form-control"
                      value={assignment.due}
                    />
                  </div>
              </div>
              <br/>

              <div className="d-flex flex-row w-100">
                <div className="d-flex flex-column w-50">
                  <label className="fw-bold">Available From</label>
                  <div className="">
                    <input
                      type="datetime-local"
                      id="wd-text-fields-available"
                      className="form-control"
                      value={assignment.available}
                      />
                  </div>
                </div>
                  <div className="d-flex flex-column w-50">
                    <label className="fw-bold">Until</label>
                    <div className="">
                      <input
                        type="date"
                        id="wd-text-fields-until"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="d-flex justify-content-end w-100">
              <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-danger">Save</Link>
              <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`}className="btn">Cancel</Link>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
