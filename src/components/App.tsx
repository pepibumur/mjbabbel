import * as React from 'react';
import Header from './header';
import { CSSProperties } from 'react';
import Color from '../style/color';
import Text, { TitleText } from '../styled-components/text';

const mariajose = require('../images/mariajose.jpg');

class App extends React.Component {
  render() {
    const mainStyle: CSSProperties = {
      backgroundColor: Color.babbelLightGray,
      flex: '1',
    };
    const contentStyle: CSSProperties = {
      backgroundColor: 'white',
      display: 'flex',
      marginLeft: '150px',
      marginRight: '150px',
      padding: '70px',
      flexDirection: 'column',
    };
    const imageStyle: CSSProperties = {
      alignSelf: 'center',
      margin: '20px'
    };
    return (
      <div style={mainStyle}>
        <Header/>
        <div style={contentStyle}>
          <img src={mariajose} style={imageStyle} height="200px"/>
          <TitleText>🇪🇸🍷 Who am I?</TitleText>
          <Text><p>Hi 👋! This is Maria José, an extrovert and adventurous language-passinate. I was born in the south of Spain, a region called Murcia, very close to the so-known by the tourists, Alicante. I studied a bachelor in Translation and Interpretation in the University of Alicante and later, I did a master in Education. I like teaching languages, especially my mother tongue language, Spanish. I taught Spanish to French students, Hungarian ones, and also online to people from all over the world.

          </p><p>Besides English, I'm also fluent in French and I'm about to start my relationship with the so fearsome German.</p></Text>
          <TitleText>❤️ Where did my passion for languages come from?</TitleText>
          <Text>
            When I was young I liked xxxx
            <ul>
              <li>xxxxx</li>
              <li>xxxxx</li>
              <li>xxxxx</li>
            </ul>
          </Text>
          <TitleText>🇩🇪 How did I end up in Berlin?</TitleText>
          <Text>
            It's not my that I missed the rainy weather, nor that I am a big fan of the Kebap-based gastronomy. Love brought me to Berlin, and I found the city a good opportunity to keep growing personally and professionally. I love this city, although it's a bit tough in Winter. 
            // TODO 
          </Text>
          <TitleText>🌱 Babbel</TitleText>
          <Text>
            My passion has always been to help people learn languages and understand
          </Text>
        </div>
      </div>
    );
  }
}

export default App;