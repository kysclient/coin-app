import React from "react";
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoAtom} from "../../../atoms/todo-atoms";

interface IForm {
    toDo: string;
}

function CreateToDo () {
    const setTodos = useSetRecoilState(toDoAtom)
    const category = useRecoilValue(categoryState)
    const {register, handleSubmit, setValue} = useForm<IForm>()
    const onSubmit = ({toDo} : IForm ) => {
        setTodos(prev => {
            return [{text: toDo, category: category, id: Date.now()}, ...prev]
        })
        setValue("toDo", "")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo", {
                required: "Please write a To Do"

            })} placeholder={"Write your code"}/>
            <button>Add</button>
        </form>
    )
}

export default CreateToDo