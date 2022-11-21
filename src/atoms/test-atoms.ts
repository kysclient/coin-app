import {atom, selector, useRecoilState} from "recoil";


export const testState = atom({
    key: "test",
    default: "",
})

export const testSelector = selector({
    key: "testSelect",
    get: ({ get }) => {
        return ""
    },
    set: ({ set }, newValue) => {
    }
})