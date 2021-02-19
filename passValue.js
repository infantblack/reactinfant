import React, { Component } from 'react';

class PassValue extends Component
{
    constructor ()
    {
        super();
        this.state={}

    }

    editDetails = (custom) =>
    {
        this.props.getEditdetail(custom)
    }
    render ()
    {
        
        console.log("this.properties", this.props.object);
        return (
          
            <div>
                {
                    this.props.object.map( ( custom ) =>
                           <>
                        <p>
                                Name:  { custom.name }
                                Id:     {custom.id}
                                email:  { custom.email }
                                Phone: { custom.phone }
                                dept:  { custom.dept }                            
                           </p>
                            <button onClick={()=>this.editDetails(custom)}> Edit</button>
                        </>  
                    )
                }
                
            </div>
                
        );
    }
}

export default PassValue;
