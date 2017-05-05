import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: ''};
    this.display = this.props.names;
  }

  addName(e){
    let inputVal = e.target.value;

    this.display = this.props.names.filter((name) => name.toLowerCase().indexOf(inputVal.toLowerCase()) === 0);

    this.setState({inputVal});
  }

  clickName(e) {
    this.display = [e.target.innerHTML];
    this.setState({inputVal: e.target.innerHTML});
  }

  render(){
    return(
      <div>
        <h1>Autocomplete</h1>
        <div className="auto">
          <input onChange={this.addName.bind(this)}  value={this.state.inputVal}></input>
          <ul>{
              this.display.map((name,idx) => <li onClick={this.clickName.bind(this)} key={idx}>{name}</li>)
            }</ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
