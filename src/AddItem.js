import './AddItem.css'
import  React from 'react'


class AddItem extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.addUpdate = "Add Item"
        this.close = this.close.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state={
            'title':'',
            'description':''
        }
        if(props.update){
            this.addUpdate = 'Update'
            this.state={
                'id':props.data.id,
                'title':props.data.title,
                'description':props.data.description
            }
        }
    }

    onChange(e){
        if(e.target.name === 'title')
            this.setState({
                'title' : e.target.value
            })
        else   
        this.setState({
            'description' : e.target.value
        })
    }

    addItem(){
        if(this.state.title.length>0){
            
        this.props.val(this.state)
            this.close();
        }
        else
            alert('Add Title')
    }

    close(){
        this.props.setAdd()
    }
    render(){
        return (
            <div className='modal' style={{display: this.props.display}}>
                <div className="modal-content">
                    <input onChange={this.onChange} value={this.state.title} name='title' className='form-control form-group form-control-plaintext title'  placeholder='Title' />
                    <input onChange={this.onChange} value={this.state.description} name='description' className='form-control form-group form-control-plaintext' placeholder='Description' />
                    <div style={{textAlign:'center'}}>
                        <button className='btn btn-outline-success' onClick={this.addItem}>{this.addUpdate}</button>
                        <button className='btn btn-outline-danger' onClick={this.close}>Close</button>
                    </div>
                </div>
            </div>
        )
        }
   
}

export default AddItem;