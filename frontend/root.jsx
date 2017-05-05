import React from 'react';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock/>
        <Weather/>
        <Autocomplete names={['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah', 'Sally', 'Xander']}/>
        <Tabs tabs={[{title: "one", content: "first pane"}, {title: 'two', content: "second pane"}, {title: 'three', content: 'third pane'}]}/>
      </div>
    );
  }

}

export default Root;
