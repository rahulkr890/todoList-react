import {useState} from 'react'
import AddItem from './AddItem';
import ItemList from './ItemList';

function TodoMain(){
    const [flag, setFlag]= useState(false);
    const [val, setVal]= useState([]);
    function addItem(data){
        console.log(data)
        let v = [{
            'id':val.length + 1,
            'title':data.title,
            'description':data.description
        }]
        setVal(
            [...val,...v]
        )
    }
    function add(){
        setFlag(!flag);
    }

    function deleteItem(e){
        console.log(val)
        let index = 0;
        for(let value of val){
            if(value.id === Number(e.target.value)){
                val.splice(index,1);                
                setVal([...val]);
                break;
            }
            index++;
        }
        console.log(val)
    }

    function updateList(e){
        console.log(e)
        for(let value of val){
            if(value.id === Number(e.id)){
                value.title = e.title
                value.description = e.description                
                setVal([...val]);
                break;
            }
        }
    }

    return(
        <div className='col-sm-6 container' style={{    position: 'sticky'}}>
            <div className=''>
                {/* <input className='col-sm-10'/> */}
                <button className='btn btn-light col-sm-12' onClick={add}>Add</button>

                {flag &&
                    <AddItem display='block' setAdd={add} val={addItem}/>
                    }
            </div>
           <div className='form-control-plaintext item-height'>
                {val.length>0 && val.map((data,i)=>
                    <ItemList key={data.id} data={data} delete={deleteItem} updateList={updateList}/>
                )}
            </div>
        </div>
    )
}

export default TodoMain;