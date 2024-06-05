// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  
  function createDataExample() {
    const data = [{ name: 'Task 1', time: '6/4/2024, 10:30:23 PM', isCompleted: false }, { name: 'Task 2', time: '6/4/2024, 10:30:23 PM', isCompleted: false }, { name: 'Task 3', time: '6/4/2024, 10:30:23 PM', isCompleted: false }]
    return data;
  }

  const [todos, setTodos] = useState(createDataExample());
  /*
    task = {
      name: 'Task Name',
      time: '6/4/2024',
      isCompleted: false;
    }
  */
  const addTask = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries()); //Object
    console.log(formDataObj);
    formDataObj.isCompleted = false;
    formDataObj.time = new Date().toLocaleString();
    setTodos([...todos, formDataObj]);
  }

  const removeTask = (event) => {
    let input = event.target.value;
    console.log(input);
    let newTodos = todos.filter(todo => todo.name === input ? false : true);
    setTodos(newTodos);
  }

  const completeTask = (event) => {
    let doneTask = event.target.value;
    let newTodos = todos.map(todo => {
      if (todo.name === doneTask) {
        if(todo.isCompleted === true){
          todo.isCompleted = false;
        }
        else{
          todo.isCompleted = true;
        }
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  return (
    <>
    <Header />
    <div className="container m-auto col-6">
      <h1 className='text-center mt-3'>Todo App</h1>
      <form onSubmit={addTask}>
        <div className="group">
          <input type="text" name="name" id='name' placeholder="Add a new todo" />
          <button className='btn btn-success text-right' type="submit">Add</button>
        </div>
      </form>
      <hr />
      <div className="list-group list-todos mt-3">
        <h2 className="text-center">List Todos</h2>
        <table className='table-group'>
          <thead>
            <tr>
              <th width="30%">Date</th>
              <th width="40%">Name</th>
              {/* <th>Completed</th> */}
              <th width="">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={index} className={todo.isCompleted === true ? 'bg-success text-white' : 'bg-white text-dark'}>
                  <td>{todo.time}</td>
                  <td>{todo.name}</td>
                  <td>
                    {todo.isCompleted === false ? <button className="btn btn-sm btn-primary" value={todo.name} onClick={completeTask}> Done</button>
                    : <button className="btn btn-sm btn-warning" value={todo.name} onClick={completeTask}> Incomplete</button>}
                    
                    &nbsp;
                    <button className="btn btn-sm btn-danger" value={todo.name} onClick={removeTask}> Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="list-group list-done mt-3">

      </div>
    </div>
    </>
  );
}

export default App;
