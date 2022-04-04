import './App.css';
import Header from "./components/header/Header"
import CreateTodo from "./components/create-todo/Create-todo"
import Todo from './components/todo/Todo';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        {id: 1, text: "Выполнить дз", status: false},
        {id: 1, text: "Купить сахар", status: true},
        {id: 1, text: "Купить соль", status: false},
      ]
    }
    this.CreateTodo = this.CreateTodo.bind(this)
  }

CreateTodo(str) {
  alert(str)
}


  render() {
    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header />
          <div className='p-3'>
            <CreateTodo CreateTodo={this.CreateTodo} />
  
            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo text={todo.text} status={todo.status} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <div className='todo-wrapper'>
//         <Header />
//         <div className='p-3'>
//           <CreateTodo />

//           <div className='mt-2 todo-list'>
//             {
//               [1,2,3].map((todo) => <Todo text={todo} />)
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
