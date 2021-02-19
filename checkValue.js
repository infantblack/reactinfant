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
        };
    }
    createMembers = () =>
    {        
        
        let { customStoredPlace} = this.state;
        let customDetails =
         {
           name: this.state.name,
           dept: this.state.name,
           email:  this.state.email,
           phone: this.state.phone,
        }
        customStoredPlace.push(customDetails);
        
       
        
        this.setState( { 
            customStoredPlace: customStoredPlace  ,         
            name: "",
            dept: "",
            email: "",
            phone:"",
            
        } )       
        
    }
    nameOnchange = ( e ) =>
    {
        this.setState({name:e.target.value})
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
                     <input type="email" placeholder="Email"
                        value={ this.state.email}
                        onChange = {this.emailOnchange}>
                    </input>
                     <input type="number" placeholder="Phone"
                        value={ this.state.phone}
                        onChange = {this.phoneOnchange}>
                    </input>
                    <input type="text" placeholder="dept"
                        value={ this.state.dept}
                        onChange = {this.deptOnchange}>
                    </input>
                    
                    <button type="onClick" onClick={this.createMembers} >  Create...!</button>
                </div>


                <div>
                     <PassValue object={this.state.customStoredPlace}/> 
                </div>
            </div>
            
        );
    }
}

export default CheckValue1;


