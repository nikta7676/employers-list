
import './emploeers-list-item.css';

function EmploeersItem  (props){
   
         const {name, salary, increase, like, onDelete, onLike, onIncrease} = props;

    let className = "list-group-item d-flex justify-content-between"
    if(increase){
    className += ' increase'
}
if(like){
    className += ' like'
}

return(
   
    <li className={className}>
        <span className='list-group-item-label' onClick={onLike}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm"
               onClick={onIncrease}
            >
                <i className="fas fa-cookie"></i>
            </button>
            <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
)
        }
        

    

export default EmploeersItem;