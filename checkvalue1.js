import React  from 'react';
import PassValue from './passValue';

class CheckValue1 extends React.Component
{
    constructor()
    {
        super();
        console.log( "checked" );
        this.state = {
            customStoredPlace: [],
            name: "",
            id: "",
            uuid:0,
            dept: "",
            email: "",
            phone: "",
            isupdate:false
        };
    }
    createMembers = () =>
    {        
        let { customStoredPlace} = this.state;
        let customDetails =
         {
            name: this.state.name,
            id: this.state.id,
            uuid:this.state.uuid+1,
            dept: this.state.name,
            email:  this.state.email,
            phone: this.state.phone,
        }
        customStoredPlace.push(customDetails); 
        this.setState( { 
            customStoredPlace: customStoredPlace  ,         
            name: "",
            id:"",
            dept: "",
            uuid:this.state.uuid+1,
            email: "",
            phone:"",
            
        } )       
        
    }
    nameOnchange = ( e ) =>
    {
        this.setState({name:e.target.value})
    }
    idOnchange = ( e ) =>
    {
    this.setState(({id:e.target.value}))    
    }
    emailOnchange = ( e ) =>
    {
        this.setState({email:e.target.value})
    }
    phoneOnchange = ( e ) =>
    {
        this.setState({phone:e.target.value})
    }
     deptOnchange = ( e ) =>
    {
        this.setState({dept:e.target.value})
    }
    getUpdate = ( newdata ) =>
    {
    
}
    getEditDetails = ( data ) =>
    
    { 
        console.log("name",data.name)
        this.setState( {
           isupdate: true, 
           name: data.name,
           dept: data.dept,
           email: data.email,
           phone: data.phone,
            
        } )
    }
    render () 
    {
        // let { customObjects} = this.state;
        console.log("this.state", this.state);
        return (
            <div>
                <div>
                    <input type="text" placeholder="Name"
                        value={ this.state.name}
                        onChange = {this.nameOnchange}>
                    </input>
                </div>
                <div>
                    <input type="id" placeholder="customid"
                        value={ this.state.id}
                        onChange = {this.idOnchange}>
                    </input>
                </div>
                <div>
                     <input type="email" placeholder="Email"
                        value={ this.state.email}
                        onChange = {this.emailOnchange}>
                    </input>
                </div>
                <div>
                     <input type="number" placeholder="Phone"
                        value={ this.state.phone}
                        onChange = {this.phoneOnchange}>
                    </input>
                </div>
                <div>
                    <input type="text" placeholder="dept"
                        value={ this.state.dept}
                        onChange = {this.deptOnchange}>
                    </input>
                </div> 
                <button type="onClick" onClick={ this.createMembers } >  Create...!</button>
                { this.state.isupdate ? (<button type="onClick" onClick={this.editMember} >  Edit Here...!</button> ):null}
                <div>
                    <PassValue object={ this.state.customStoredPlace }
                        getEditdetail={ this.getEditDetails } /> 
                </div>
            </div>
        );
    }
}
export default CheckValue1;




