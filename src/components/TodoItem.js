import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.tarefa.completed ? 'line-through' :
            'none',
            padding: '0.5%',
            borderBottom: '1px solid white',
            margin: '2%'
        }
    }
    btnStyle = () => {
        return {
            background: 'red',
            float: 'right',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            padding: '2%'
        }
    }
    
    render() {
        const {id, title} = this.props.tarefa
        return (
            <div style={this.getStyle()}>                
                <h5>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                    ></input>
                    {title}
                    <button onClick={this.props.removeTodo.bind(this, id)} style={this.btnStyle()}>x</button>
                </h5>
            </div>
        )
    }
}

TodoItem.propTypes = {
    tarefa: PropTypes.object.isRequired
}
export default TodoItem
