import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : ''
    };
  }
    render(){
        return (
            <div>
            <button onClick={()=> {this.setState({name : 'huan'});}}>click</button>
             <h1>Hello React!!!@ {this.state.name}</h1>

            </div>

        );
    }
}

export default App;
