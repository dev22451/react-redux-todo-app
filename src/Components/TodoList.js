import React from 'react'

const TodoList = () => {
    return (
        <>
            <div className="row border py-2 mb-1">
                <div className="col"> <h3>Todo List</h3></div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary ">EDIT</button>
                    <button className="btn btn-primary mx-2">DELETE</button>
                </div>
            </div>


        </>
    )
}

export default TodoList
