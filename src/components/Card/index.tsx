import { Todo } from "../../App";
import "./styles.css"

type CardProps = {
    todo: Todo;
    completeTodo: (id: number)=> void;
    deleteTodo:(id:number)=> void;
};
export  default function Card( {todo, completeTodo, deleteTodo} : CardProps){
  function handleCompletetodo(){
    completeTodo(todo.id)
  }
function handleDeletetodo() {
  deleteTodo(todo.id)
  
}
    return(
        <>
          <div className={`card ${todo.compled? 'done': ''}`}>
            <h2>{todo.title}</h2>
            <div className="card-buttons">
                <button onClick={handleCompletetodo}>{todo.compled? 'retomar': 'completar' }</button>
                <button onClick={handleDeletetodo}>Deletar</button>
            </div>
          </div>
        </>
    )
}


