// import React from 'react'


// class NameList1 extends React.Component
// {
//     constructor ()
//     {
//         super();
//         this.state = {
//             userName: "",
//             userList: [],
//             userobject: {
//                 Name: '',
//                 Id: '',
//                 Age: ''
//             }
//         };
//     }
//     adduser = () =>
//     {
//         let { userList, userobject } = this.state;
//         userList.push( userobject );
//         let test = {};
//         test[ 'Name' ] = "";
//         test[ 'Id' ] = "";
//         test[ 'Age' ] = "";
         
//         this.setState( {
//             userobject: test,
//             userList: this.state.userList,
//         } );
//     };

//     edit = ( index ) =>
//     {
//           console.log("----->",index)
    
//         let { userList } = this.state;
//         this.setState( {
//             userobject: userList[ index ]
//         } )
//         console.log("------->>>",userList)
//     }

//     handlechange = ( key, values ) =>
//     {
//         let { userobject } = this.state;
//         userobject[ key ] = values;
//         this.setState( { userobject } );
//     }
//     delete = () =>
//     {
//         console.log(this.delete)
//         this.setState({
//             userName: "",
//         } )
        
//         // this.setState( {
//         // }); 
//     }
    
//     render ()
//     {
//         let { userobject, userList } = this.state;
//         return (
//             <div>
//                 {/* { <input type="text" onChange={ ( e ) => { this.setState({userName: e.target.value});} } />  } */}
                
//                 <input type="text" value={ userobject.Name } name='Name' onChange={ (e)=>this.handlechange('Name', e.target.value) } />
//                 <input type="text" value={ userobject.Id } name='Id' onChange={ (e)=>this.handlechange('Id', e.target.value) } />
//                 <input type="text" value={ userobject.Age } name='Age' onChange={ (e)=>this.handlechange('Age', e.target.value) } />
                
//                 <button  onClick={ this.adduser }> click me..!</button>
//                  <button  onClick={this.delete}> delete me..!</button>
//                                <p></p>
//                 <div>
//                     {
//                       userList.map((list, index) =>
//                          <div>
//                             <span>Name: { list.Name }</span> 
//                             <span>Id: {list.Id}</span> 
//                             <span>Age: { list.Age }</span> 
//                             <span  onClick={ () => this.edit( index ) }>Edit </span>
//                             </div>
//                       )
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
// export default NameList1;



    // getChange = ( event ) =>
    // {
    //     this.setState( { object123: [ ...this.state.object123, event.target.value ] } );
    //     console.log(this.state.object123)
    // };
//     change = () =>
//     {
//         this.state.object123.map( item => <h2>{ item}</h2>)
    
// }




import React from 'react'

// function NameList ()
// {
//     const names = [ 'Bruse', 'Lee', 'Charlie' ]
//     const nameList =  names.map( name =><h2>{ name}</h2>)
//     return (
//         <div>
//             {nameList}
//         </div>
//     )
// }

class NameList1 extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            userName: "",
            userList: [],
            userobject: {
                Name: '',
                Id: '',
                Age: ''
            }
        };
    }

    adduser = () =>
    {
        let { userList, userobject } = this.state;
        userList.push( userobject );
        let test = {};
        test[ 'Name' ] = "";
        test[ 'Id' ] = "";
        test[ 'Age' ] = "";
            
        this.setState( {
            userobject: test,
            userList: this.state.userList,
        } );
        console.log( '__>..', userList );
    };
   edit = (index) =>
   {
       
        this.setState( {
            userobject: this.state.userList[ index ]
        } );
    };
    handlechange = ( key, values ) =>
    {
        console.log( "key", key );
        console.log( "values", values );
        let { userobject } = this.state;
        userobject[ key ] = values;
        this.setState( { userobject } );
    }

    delete = () =>
    {
        console.log(this.delete)
        this.setState({
            userName: "",
        } )
        
        // this.setState( {
        // }); 
    }
    
    render ()
    {
        let { userobject, userList } = this.state;
        return (
            <div>
                {/* <input type="text" onChange={ ( e ) => { this.setState({userName: e.target.value});} } /> */ }
                
                <input type="text" value={ userobject.Name } name='Name' onChange={ (e)=>this.handlechange('Name', e.target.value) } />
                <input type="text" value={ userobject.Id } name='Id' onChange={ (e)=>this.handlechange('Id', e.target.value) } />
                <input type="text" value={ userobject.Age } name='Age' onChange={ (e)=>this.handlechange('Age', e.target.value) } />
                
                <button onClick={ this.adduser }> click me..!</button>
                 
                {/* <button onClick={ this.delete }> delete me..!</button> */}
                
                               <p></p>
                <div>
                    {
                      userList.map((list, index) =>
                        <div>
                            <span>Name: { list.Name }</span> 
                            <span>Id: {list.Id}</span> 
                            <span>Age: { list.Age }</span> 
                           <button onClick={ () => this.edit( index) }> Edit </button>  
                        </div>
                      )
                    }
                </div>
            </div>
        );
    }
}
export default NameList1;





//     getChange = ( event ) =>
//     {
//         this.setState( { object123: [ ...this.state.object123, event.target.value ] } );
//         console.log(this.state.object123)
//     };
//     change = () =>
//     {
//         this.state.object123.map( item => <h2>{ item}</h2>)
    
// }


    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.comments === nextProps.comments) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }