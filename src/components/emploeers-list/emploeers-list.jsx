import './emploeers-list.css';
import EmploeersItem from '../emploeers-list-item/emploeers-list-item';



function EmployeersList(props){


        const {data,onDelete,onLike,onIncrease}= props;
        const elem = data.map(item => {
            const {id, ...itemProbs}= item
            return (<EmploeersItem onIncrease={()=>onIncrease(id)} onLike={()=>onLike(id)} onDelete={()=>onDelete(id)} key={id} {...itemProbs}/>)
    
        })
        return (
            <ul className='app-list list-group'>
                {elem}
            </ul> 
        )
    }

    

   


export default EmployeersList;