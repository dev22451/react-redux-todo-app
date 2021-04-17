import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions'




const List = (props) => {

    return (

        <ul type="none" >
            {props.todos.map((todo, index) => (

                <li key={index} >
                    {todo.message}
                    <span className="d-flex justify-content-end"> <button onClick={() => props.dispatch(deleteTodo(todo.id))} className="btn btn-danger">Delete</button></span>
                    <hr className="w-100" />
                </li>


            ))}
        </ul>

    )
};
const mapStateToProps = (state) => ({
    todos: state.todos.data,
});
export default connect(mapStateToProps)(List);