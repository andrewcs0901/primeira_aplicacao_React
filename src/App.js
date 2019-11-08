import React, { Component } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import About from './components/pages/About'
import axios from 'axios'

class App extends Component {


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((response) => {
        this.setState({
          tarefas: response.data
        });
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      tarefas: []
    }
  }

  markComplete = (id) => {
    this.setState({
      tarefas: this.state.tarefas.map(itemTarefa => {
        if (itemTarefa.id === id) {
          itemTarefa.completed = !itemTarefa.completed;
        }
        return itemTarefa;
      })
    })
  }

  removeTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (response.status === 200) {

          this.setState({
            tarefas: [...this.state.tarefas.filter(
              tarefa => tarefa.id !== id
            )]
          })
        }else
          console.error("Erro na requisicao")

      })
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(response => {
        this.setState({
          tarefas: [...this.state.tarefas, response.data]
        })
      }
      )

  }

  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <Route exact path='/' render={props =>
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todo removeTodo={this.removeTodo} tarefas={this.state.tarefas} markComplete={this.markComplete} />
            </React.Fragment>
          }>
          </Route>
          <Route exact path='/about' render={props =>
            <React.Fragment>
              <About />
            </React.Fragment>
          }>
          </Route>
        </div>
      </Router>
    );
  }

}

export default App;
