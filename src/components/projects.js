import React, {Component} from 'react';
import {Card, CardText, CardTitle, CardMenu, CardActions, Button} from 'react-mdl';
import '../css/project.css';
import ggj from './photo/screenshot_1.png';
import fp from './photo/fp.jpg';
import logo from './photo/mainpage.png';


class Projects extends Component {
  render() {
    return(
    <div>
      <div className="project">

      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle id="starwars"style={{color: '#fff', height: '176px'}}>Star Wars</CardTitle>
          <CardText style={{color: '#fff'}}>
              A React-Native mobile app for Star Wars fans. It contains Star Wars characters,
              planets etc. 
          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/Yusuf-Goren/StarWarsAp-">Github</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>



    <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
        <CardTitle id="flower" style={{color: '#fff', height: '176px'}}>WhattheFont</CardTitle>
        <CardText style={{color: '#fff'}}>
            It is group project. We build an app that can recognition flowers. It
            contains Python, Java. You can go details.

        </CardText>
        <CardActions border>
            <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/HabibullahMetin/PlantRecognition">GITHUB</Button>
        </CardActions>
        <CardMenu style={{color: '#000'}}>
        </CardMenu>
    </Card>
      </div>

      <div className="project">

      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle id="website" style={{ color: '#000', height: '176px'}}>yusufgoren.com</CardTitle>
          <CardText style={{color: '#fff'}}>
              The website you are browsing. My first ReactJS project.
              You may get source code of the project on GitHub.

          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/GoksuBay/goksubayram.com/tree/master/my-app">GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>



      </div>

    </div>
    );
  }
}

export default Projects;
