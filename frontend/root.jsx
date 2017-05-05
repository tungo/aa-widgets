import React from 'react';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock/>
        <Weather/>
        <Autocomplete names={['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah', 'Sally', 'Xander']}/>
      </div>
    );
  }

}

export default Root;
