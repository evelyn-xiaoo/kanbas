import { IoEllipsisVertical } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoAddSharp/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
