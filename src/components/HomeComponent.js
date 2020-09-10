import React  from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import styled, { css } from 'styled-components';
import  { FadeTransform } from 'react-animation-components';
import Typewriter from 'typewriter-effect';
var app = document.getElementById('app');
function Home(props) {
    return(
  <Card>
  <div className="container">
      <div className="row row-header">
          <div className="col-12 col-sm-6">
          <Typewriter
  options={{
    strings: ['<h1>No more time wasted reading</h1>'],
    autoStart: true,
    loop: true,
    cursor: null,
  }}
/>
          </div>
      </div>
  </div>
  <CardImg src="assets/images/Word Art.png" height="400" width="200" />
  </Card>

    );
}

export default Home;
