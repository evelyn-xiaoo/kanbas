import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaPlus} from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <button className="btn btn-percentage me-3">
                50% of Total</button>
            <GreenCheckmark />
            <BsPlus className="fs-4 mx-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}