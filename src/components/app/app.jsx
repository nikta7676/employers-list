
import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../emploeers-list/emploeers-list';
import EmployeersAdd from '../emploeers-add-form/emploeers-add-form'


class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: "John C", salary: 2000, increase: true, id: 1, like: false},
                {name: "Frank B", salary: 5000, increase: false,  id: 2, like: false},
                {name: "Sam A", salary: 5500, increase: false,  id: 3, like: false} 
            ],
            term: '',
            filter: 'increase'
        }
        this.maxId = this.state.data.length + 1; 
    }

    onCheckNumEmploy = () => {
        return this.state.data.length
    }

    onPrizeEmploy = ()=>{
        const arr = this.state.data.filter(item=> item.like)
        return arr.length
    }
    onDelete = (id)=>{
        this.setState({
            data: this.state.data.filter(item=> item.id !== id)
        })
    }

    onLike = (id)=>{
        this.setState(({data})=>({
            data: data.map((item)=>{
                if(item.id === id){         
                    return {...item, like: !item.like}
                }else{
                    return item
                }
            })
        }))
    }

    onIncrease = (id)=>{
        this.setState(({data})=>({
            data: data.map((item)=>{
                if(item.id === id){         
                    return {...item, increase: !item.increase}
                }else{
                    return item
                }
            })
        }))
    }
    onAddEmployer = (obj)=>{
        const newItem = {
            ...obj,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    };

    onSearchEmploy = (items,term)=>{
        if(term.length === 0){
            return items
        }else{
            return items.filter((item)=>item.name.toLowerCase().indexOf(term.toLowerCase())> -1)
            }
        };
    
    onUpdateSearch = (term)=>{
        this.setState({term})
    };


    onCorrect = (data, filter)=>{

        let arr;
        if(filter === 'increase'){
             arr = data.filter((item) =>{ return item.increase})
        }else if(filter === 'salary'){
             arr = data.filter(item => item.salary > 1000)
        } else if(filter === 'all'){
             arr = data
        }

        return arr
    }
    onCorrectFilter = (filter)=>{
        this.setState({filter})
    }
    


    render(){
        
        const {data,term,filter} = this.state;

        const search = this.onCorrect(this.onSearchEmploy(data,term), filter);
        return(
            <div className='app'>
                <AppInfo num={this.onCheckNumEmploy()} prize={this.onPrizeEmploy()}></AppInfo>
                
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onCorrectFilter={this.onCorrectFilter} filter={filter}/>
                </div>
    
                <EmployeersList data={search} onIncrease={this.onIncrease} onLike={this.onLike} onDelete={this.onDelete}/>
                <EmployeersAdd  onAdd={this.onAddEmployer} data={data}/>
            </div>
        )
    }     
}

export default App;

