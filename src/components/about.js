import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../css/about.css';
class About extends Component {
  render() {
    return(
      <div className="about"style={{width: '100%', margin: 'auto'}}>
        <Grid className="grid">
          <Cell col={12}>
            <div className="header">
              <h1>About Me</h1>
            </div>
          </Cell>
        <Cell col={6}>
              <p>Hey There!<br></br><br></br>
              I am Yusuf Gören and Computer Engineering student at Sakarya University. Living in İstanbul right now.<br></br><br></br>
              I am a programmer who is interested in Artificial Intelligence.
              <br></br><br></br>
              Improving on Machine Learning,Python Programming Language and Data Science
              </p>
          </Cell>
          <Cell col={6}>
                <p> I also intrested in Graphic Design. I experienced with Photoshop CC and CorelDraw.
                  <br></br><br></br>
                  Sometimes I foil my design on t-shirts. That make me pleased.
                </p>
            </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
