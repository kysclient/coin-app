import exp from "constants";
import {atom} from "recoil";
import {IToDo} from "./routes/Todo/ToDoList";

export const isDarkAtom = atom({
    key: "isDark",
    default: true
})

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: []
})