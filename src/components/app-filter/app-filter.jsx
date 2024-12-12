
import './app-filter.css';


function AppFilter (props){

    const btn = [
        {name:"Все сотрудники", filter:'all'},
        {name:"На повышение", filter:'increase'},
        {name:"З/П больше 1000$", filter:'salary'}
    ]

    const elem = btn.map(item=>{
        const clazz = item.filter === props.filter ? "btn-light" : "btn-outline-light" 
        return(
                <button className={`btn ${clazz}`} 
                type="button"
                onClick ={()=>{props.onCorrectFilter(item.filter)}}
                key={item.filter}
                >
                    {item.name}
                </button>
        )
    })
        return(
            
            <div className="btn-group">
                {elem}

           </div>
       
        )
    
}

export default AppFilter;