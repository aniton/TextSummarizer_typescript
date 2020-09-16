import React  from "react";
import {Card, CardImg, CardText, Col, Container, CardHeader, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import styled, { css } from 'styled-components';
import  { FadeTransform } from 'react-animation-components';
import Typewriter from 'typewriter-effect';
var app = document.getElementById('app');
function Home(props) {
    return(
<Card body>
<Col>
  <div className="container">
      <div className="row row-header">
          <div className="col-12 col-sm-6">
          <Typewriter
  options={{
    strings: ['<h2>No more time wasted reading</h2>'],
    autoStart: true,
    loop: true,
    delay: 0,
    cursor: null,
  }}
/>
          </div>
      </div>
  </div>
</Col>
  <CardImg src="assets/images/WA.png"  height="650" width="190"/>
  </Card>

    );
}

export default Home;
