import React from 'react';

class Greetings extends React.Component{
    render(){
        return(
            <div>
                <h1>my class is {this.props.class}</h1>
            </div>
        )
    }
}
export default Greetings