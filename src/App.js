import React , {useState } from "react";
import './App.css';


function App() {

  
const [todos,settodo] = useState([

  {text:"creat homework"},
  {text:"go to school"},
  {text:"make the food"}

]);


const [Task , setTask] = useState('');


const deletTask = (i)=>{        
        const setto = [...todos];
        setto.splice(i,1);
        settodo(setto);      
}


const displayTasks = todos.map((todo,i)=>{

                    const list = (
                    
                    <li key ={i}> 
                    <span> {todo.text} </span> 
                    <button onClick={()=>deletTask(i)}>Done</button>
                    </li>
                    
                    );

                    return list ;
})



const updateTask = (e)=>{

            setTask(e.target.value);
          
}


const addTask = ()=>{

  if(!Task.length){
            alert("You must write something!")
  }else{
    const setTask1 =[...todos];
    setTask1.push({text:Task});
    setTask('')
    settodo(setTask1);
  }

}




  return (
    <div className="App">
        <h1>Todo App</h1>
        <div className="add_task">
            <input type="text" value={Task} onChange={updateTask}/>
            <button onClick={addTask}>
              <div className="hro"></div>
              <div className="virtcal"></div>
            </button>
        </div>
        <ul className="unorderd_list">{ displayTasks }</ul>
    </div>
  );


}

export default App;
