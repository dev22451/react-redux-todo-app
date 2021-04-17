import React from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List'

function App() {
  return (
    < >
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Todo App</h1>
            </div>
            <div className="col-md-12 mb-2 ">
              <AddTodo />
            </div>
            <div className="col-md-12 border">
              <h2 className="text-center">Todo Items</h2>
              <hr className="w-50" />
              <List />
            </div>
          </div>




        </div>
        <div className="col-md-3"></div>
      </div>

    </>
  )
}

export default App
