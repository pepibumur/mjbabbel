import * as React from 'react';
import Color from '../style/color';
import Text from '../styled-components/text';
import { CSSProperties } from 'react';

const logo = require('../images/logo.svg');

class Header extends React.Component {
  render() {
      const style: CSSProperties = {
        height: '55px',
        backgroundColor: Color.babbelHeader,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      };
      const textStyle: CSSProperties = {
        color: 'white',
        fontSize: '20px'
      };
      return (
        <div style={style}>
          <Text style={textStyle}>Why I'd love to work for</Text>
          <div style={{width: '17px'}}/>
          <img src={logo}/>
        </div>
        );
  }
}

export default Header;
