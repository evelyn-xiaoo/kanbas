import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"  // Added rel="noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" alt="Northeastern University Logo" width="75px" />  {/* Added alt attribute */}
      </a>
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Account") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <FaRegCircleUser className={`fs-1 text ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Dashboard") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Courses") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        to="/Kanbas/Calendar"
        id="wd-calender-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Calendar") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Inbox") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Labs") ? "bg-white text-danger" : "text-white bg-black"}`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
