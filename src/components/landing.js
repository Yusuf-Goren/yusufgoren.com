import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../css/landing.css';

class Landing extends Component {
  render() {
    return(
      <div className="landing"style={{width: '100%', margin: 'auto'}}>
        <Grid className="grid">
          <Cell col={12}>
          <div className="text">
            <h1>Yusuf Gören</h1>
            <h2>Computer Enginnering Student</h2>
            <h2>at Sakarya University</h2>
            </div>
           </Cell>
           </Grid>
      </div>
    );
  }
}

export default Landing;
