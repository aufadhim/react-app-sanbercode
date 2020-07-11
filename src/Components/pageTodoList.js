import React,{Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class TodoList extends Component{
    state = {
        todo:[]
    }

    todoRef = React.createRef();

    handleNewTodo = (e) => {
        let todoClone = [...this.state.todo];
        let newTodo = this.todoRef.current.value;
        todoClone.push(newTodo);
        this.setState({todo : todoClone});
        
        e.preventDefault();
        this.todoRef.current.value = '';
    }

    render(){
        const {todo} = this.state;

        return(
            <div className="App App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>Todo List</div>
                <form onSubmit = {this.handleNewTodo}>
                    <label>New Todo <input ref={this.todoRef} /></label>
                </form>
                <ul>{todo.map((item,index) => <li key={index}>{item}</li>)}</ul>
            </div>

        )
    }
}