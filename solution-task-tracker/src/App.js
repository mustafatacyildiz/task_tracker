import {useState} from "react" 
import './App.css';
import AddTask from "./components/AddTask";
import Header from './components/Header';
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Study React Pre-Class Notes",
        day: "Dec 12th at 2:30pm",
        isDone: false,
      },
      {
        id: 2,
        text: "Feed the Dog",
        day: "Dec 13th at 1:30pm",
        isDone: true,
      },
      {
        id: 3,
        text: "Attend In-Class",
        day: "Dec 14th at 3:00pm",
        isDone: false,
      },
    ]);

    const [showAddTask, setShowAddTask ] = useState(false);

    //DELETE TASK
    const deleteTask = (deletedTaskId)=>{
      // console.log("delete task", deletedTaskId);
      setTasks(tasks.filter((task)=>task.id !== deletedTaskId))
    }

    //ADD TASKS
    const addTask = (newTask)=>{
      const id = Math.floor(Math.random()*1000+1);
      const addNewTask = {id, ...newTask}
      setTasks([...tasks, addNewTask])
    } 

    //TOGGLE DONE
    const toggleDone = (toggleDoneId) => {
      // console.log("double clicked", toggleDoneId);
      setTasks(tasks.map((task)=> task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task))
    }

    //TOGGLE SHOW
    const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
    <Header title="TASK TRACKER" showAddTask={showAddTask} toggleShow={toggleShow}/>
   { showAddTask && <AddTask addTask={addTask} />}
    {
      tasks.length > 0? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/> : <h4 style={{textAlign : "center"}}>No Task To Show</h4>
    }
    </div>
  );
}

export default App;
