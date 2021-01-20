import React, {useState} from 'react';

export default function App(){
    const [todoList, setTodoList] = useState([]);
    const [curretnId, setCurretnId] = useState(1);
    const [desc, setDesc] = useState('')
    function onAdd(){
        const todo = {id: curretnId, desc};
        setCurretnId(curretnId + 1);
        setTodoList([...todoList, todo]);
    }
    function onDelete(){
        const id = Number(e.target.dataset.id)
        const newTodoList = todoList.filter(todo => todo.id === id);
        setTodoList(newTodoList)
    }
    function onSaveToServer(){}
    return(
        <div>
            <h3>todo list</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" value={desc} onChange={e=> setDesc(e.target.value)} />
            <button onClick={onAdd}>add</button>
            <button onClick={onSaveToServer}>save to server</button>
        </div>
    );
}