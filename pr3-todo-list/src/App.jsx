import React from 'react'
import TodoList from './components/TodoList'
import Table from './components/Table'

const App = () => {
    return (
        <React.Fragment>
            <TodoList />
            <Table />
        </React.Fragment>
    )
}

export default App