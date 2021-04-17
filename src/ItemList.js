import { useState } from 'react'
import AddItem from './AddItem';

function ItemList(props) {
    const [flag, setFlag] = useState(true)
    const [edit, setEdit] = useState(true)
    function show() {
        setFlag(!flag);
    }

    function deleteItem(e){
        if(window.confirm("Do you want to delete?"))
            props.delete(e)
    }
  
    function editItem(){
        setEdit(!edit)
    }

    function add(){
        setEdit(!edit)
        setFlag(!flag);
    }

    function addItem(data){
        let v = {
            'id':data.id,
            'title':data.title,
            'description':data.description
        }
        props.updateList(v)
    }
    return (
        <div className='card'>
            {
                // props.val.map((data) =>
                    <div className='form-group item-list'>
                        {flag && edit &&
                            <div>
                                <label className='title col-sm-12' onClick={show}>{props.data.title}</label>
                                <div><label className='col-sm-12'>{props.data.description}</label></div>
                            </div>
                        }
                        {!flag && edit &&
                            <div style={{ textAlign: 'center' }}>
                                <button className='btn btn-outline-success' onClick={editItem}>Edit</button>
                                <button className='btn btn-outline-danger' value={props.data.id} onClick={deleteItem}>Delete</button>
                                <button className='btn btn-outline-success' onClick={show}>Back</button>
                            </div>
                        }
                        {
                            !edit &&
                            <AddItem update={true} data={props.data} display={'block'} val={addItem} setAdd={add}/>
                        }

                    </div>
                // )
            }
        </div>

    )
}

export default ItemList;