import { useState } from 'react';


function App2() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);//기본값: 빈 배열
    const onChange = (event) => {
        setTodo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault(); //아무기능이 안적용된 함수를 눌렀을때 새로고침을 막아줌
        if(todo === "") {
            return; 
        }
        setTodo("");//hello를 치면 todo에는 ""이 들어감
        setTodos(currentArray => [todo, ...currentArray]);
        //... : currentArray의 배열요소를 가져온다 그리고 todo랑 합친다
    }
    console.log(todos);
    return <div>
        <h1>Junyoung Todo : {todos.length}</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} 
            value = {todo} 
            type= "text" 
            placeholder='Write todo'/>
            <button>Add To do</button>
        </form>
        <hr />
        <ul>
            {todos.map((item , index) => <li key= {index}>{item}</li>)}
        </ul>
    </div>
}//li값을 넣을때는 key를 부여해야됌

export default App2;