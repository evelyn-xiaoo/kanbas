import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaTrash} from "react-icons/fa";
export default function AssignmentIndivButtons({
    assignmentId,
    deleteAssignment,
    }: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
        </div>
    );}
