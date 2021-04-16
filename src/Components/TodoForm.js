import React from 'react'
import TodoList from './TodoList'

const TodoForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">

                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12">
                    <div className="row my-5">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12 mb-4">
                            <h1 className="text-center">TODO APP</h1>
                            <input type="text" className="form-control mb-2" />
                            <button className="btn btn-primary">ADD TODO</button>
                        </div>
                        <hr />
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                            <TodoList />
                            <TodoList />
                            <TodoList />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">

                </div>
            </div>
        </>
    )
}

export default TodoForm
