import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {current_tab: 0};
  }

  chooseTab(idx, e){
    this.setState({current_tab: idx});
  }

  render(){
    return (
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <ul>
            {this.props.tabs.map((tab, idx) => <li  onClick={this.chooseTab.bind(this, idx)} key={idx}><h1>{tab.title}</h1></li>)}
          </ul>
          <article className="pane">{this.props.tabs[this.state.current_tab].content}</article>
        </div>
      </div>
    );
  }
}

export default Tabs;
