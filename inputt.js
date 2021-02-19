import React from 'react';



class TextInputBox extends React.Component
{
    state = { name: " " };
    render (){
        return (
            <div>
                enter name: <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                <div>
                    hi {this.state.name}
            </div>
            </div>
        )
    }
}
export default TextInputBox;


// class App extends React.Component {
//     state = { name: '' };
//     render() {
//         return (
//             < div >
//                 Enter your name: <input type="text" value=   {this.state.name} onChange={e => this.setState({ name:e.target.value })} />
//                 <div>Hi {this.state.name}!</div>
//             </div >
//         );
//     }
// }
 
// ReactDOM.render(<App />, document.getElementById('root'));