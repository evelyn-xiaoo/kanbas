import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function QuizIndivButtons({
  quizId,
  deleteQuiz,
  courseId, // Add courseId as a prop
}: {
  quizId: string;
  deleteQuiz: (quizId: string) => void;
  courseId: string; // Define courseId prop type
}) {
  const navigate = useNavigate();

  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteQuiz(quizId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical
        className="fs-4"
        onClick={() => navigate(`/Kanbas/Courses/${courseId}/Quizzes/Editor`)} // Use courseId prop
      />
    </div>
  );
}