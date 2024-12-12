
import './app-info.css'


const AppInfo = (props)=>{

    return(
        <div className="app-info">
            <h1>Учёт сотрудники в компании N</h1>
            <h2>Общее число сотрудники: {props.num}</h2>
            <h2>Премию получат: {props.prize}</h2>
        </div>
    )

}

export default AppInfo