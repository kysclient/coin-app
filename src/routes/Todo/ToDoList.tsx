import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {toDoAtom} from "../../atoms";

interface IForm {
    toDo: string;
}

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

function ToDoList() {
    const [toDos, setTodos] = useRecoilState(toDoAtom)
    const {
        register, handleSubmit, setValue
    } = useForm<IForm>()

    const onSubmit = ({toDo} : IForm ) => {
        setTodos(prev => {
            return [{text: toDo, category: "TO_DO", id: Date.now()}, ...prev]
        })
        setValue("toDo", "")
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("toDo", {
                    required: "Please write a To Do"

                })} placeholder={"Write your code"}/>
                <button>Add</button>
            </form>
            <ul>
                {
                    toDos.map((toDo, idx) => (
                        <li key={toDo.id}>{toDo.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList;