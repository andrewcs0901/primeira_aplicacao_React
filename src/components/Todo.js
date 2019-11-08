import React, { Component } from 'react'
import TodoItem from './TodoItem'
;
export class Todo extends Component {
        render() {
        const tasks = this.props.tarefas.map(arrayItem => 
                <TodoItem key={arrayItem.id} tarefa={arrayItem} removeTodo={this.props.removeTodo} markComplete={this.props.markComplete}/>
            )
        return (
            <div className="tarefas">
                {tasks}
            </div>
        )
    }
}

export default Todo
