import React from 'react';
import { Component } from 'react';

import Navigator from './src/navigation/NavigatorFactory';

export default class App extends Component{
  render(){
    return (
      <Navigator></Navigator>
    )
  }
}

