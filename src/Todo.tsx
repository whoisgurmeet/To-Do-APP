import React from "react";

import { TodoItem as TodoItemsType } from "./types";

type Props = {
    todo : TodoItemsType;
    toggleTodo : (id : number) => void ;
};

export const Todo : React.FC<Props> = (props) => {
    return <li
    onClick={()=>props.toggleTodo(props.todo.id)}
    style = {{textDecoration: props.todo.isCompleted ? 'line-through' : 'none'}}
    >
        {props.todo.text}
    </li>
}