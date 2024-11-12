import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";
import ArrayStateVariable from "./util/ArrayStateVariable";
import BooleanStateVariables from "./util/BooleanStateVariable";
import ClickEvent from "./util/ClickEvent";
import Counter from "./util/Counter";
import DateStateVariable from "./util/DateStateVariable";
import EventObject from "./util/EventObject";
import ObjectStateVariable from "./util/ObjectStateVariable";
import ParentStateComponent from "./util/ParentStateComponent";
import PassingDataOnEvent from "./util/PassingDataOnEvents";
import PassingFunctions from "./util/PassingFunctions";
import StringStateVariables from "./util/StringStateVariables";

export default function Lab4() {
    function sayHello() {
        alert("Hello")
    }

    return (
        <div id="wd-passing-functions">
            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>
            <TodoList/>
        </div>
    );
}