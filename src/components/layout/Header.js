import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Minhas tarefas</h1>
            <Link to='/'>Home</Link> | <Link to='/about'>Sobre</Link>
        </header>
    ) 
}

const headerStyle = {
    background: '999999',
    color: 'white',
    padding: '10px'
}

export default Header
