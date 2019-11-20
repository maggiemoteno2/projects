import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addnames} from '../../redux/info/actions';
import Messages from '../Messages'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            displayMessages: false
        }
    }
    nameAdd=(name)=>{
        const {peopleNames}=this.props;
        for(var i in peopleNames){
            if(peopleNames[i].name.toUpperCase().trim()=== name.toUpperCase().trim()){
                return alert("exist")
            }
        }
        this.props.addnames(name);
        this.setState({
            ...this.state,
            name:"",
            displayMessages: !this.state.displayMessages
        });
    };
    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render() {
        console.log("peopleNames",this.props.peopleNames)
        return (
            <div>
       name:<input type="text" value={this.name} name="name" onChange={this.handleChange}/>
       <div >
           <button onClick={()=> this.nameAdd(this.state.name)}class="btn btn-primary btn-sm">submit </button>
           {this.props.peopleNames.map(peopleName =>(<div key={peopleName.name}>
           <h2>{peopleName.name}</h2>
               </div>))}
       </div>
       {this.state.displayMessages == true ?<Messages />: null}
            </div>
        )
    }
}


const mapStateToProps= state =>({
    peopleNames:state.info.peopleNames
});


const mapDispatchToProps = dispatch =>{
    return {
        addnames:(name)=>{
            dispatch (addnames(name));
        }
    };
}

export default connect (mapStateToProps,mapDispatchToProps)(index);