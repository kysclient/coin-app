import {atom, selector} from "recoil";



export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const isDarkAtom = atom({
    key: "isDark",
    default: true
})

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: []
})

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoAtom);
        const category = get(categoryState);
        return toDos.filter(todo => todo.category === category);
    },
});