
import { Component } from 'react';
import './employers-add-form.css';

class EmployeersAdd extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            salary: ''
        }
    }

    onChange =(e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })   
        
        }

    onCheckForm = (state)=>{
        if(state.name.length >= 3 && state.salary.length >= 3){
            this.props.onAdd(state)
        }
    }    
    render(){
        
        const {name,salary}= this.state
        return(
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={(e)=>{
                    e.preventDefault()
                    this.onCheckForm(this.state)
                }}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onChange}/>
    
                <button type="submit"
                        className="btn btn-outline-light"
                        >Добавить</button>
            </form>
        </div>   
        )
        }
   
}
export default EmployeersAdd;