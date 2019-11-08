import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    changeInput = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmit = (evento) => {
        evento.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input className="todo"
                    type="text"
                    name="newTask"
                    value={this.state.title}
                    placeholder="Nova Tarefa"
                    onChange={this.changeInput}
                ></input>
            </form>
        )
    }
}

export default AddTodo
