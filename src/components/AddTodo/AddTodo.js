import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../../actions';

const AddTodo = (props) => {
    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            let input = e.target.userInput.value;
            props.dispatch(addTodo(input));
            e.target.userInput.value = "";
            // console.log(input);
        }}>
            <input type="text" name="userInput" className="form-control mb-2" />
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>

    );
};
export default connect()(AddTodo);
