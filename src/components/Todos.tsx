import { useTodos } from "../store/todos"
import {useSearchParams} from 'react-router-dom'


const Todos = () => {
    const {todos,toggleTodoAsCompleted,handleDeleteTodo}=useTodos();
    const [searchParams]=useSearchParams();

    let todosData=searchParams.get('todos')

    let filteredData=todos;
    if(todosData==='active'){
        filteredData=filteredData.filter(task=>!task.completed)
    }
    if(todosData==='completed'){
        filteredData=filteredData.filter(task=>task.completed)
    }
  return (
    <>
    <ul className="main-task">
        {
            filteredData.map((todo)=>(
                <li key={todo.id}>
                    <input 
                        type="checkbox" 
                        id={`todo-${todo.id}`} 
                        checked={todo.completed}
                        onChange={()=>toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    {
                        todo.completed && <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                    }
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Todos
