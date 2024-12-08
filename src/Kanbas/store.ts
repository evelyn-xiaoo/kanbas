import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer"
import assignmentReducer from "./Courses/Assignments/reducer"
import enrollReducer from "./Enrollment/reducer";
import quizReducer from "./Courses/Quizzes/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollReducer,
    quizReducer
  },
});
export default store;