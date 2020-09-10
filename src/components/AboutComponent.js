import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardHeader, Media, CardTitle, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

function About(props) {

    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>About Us</h3>
                    <p>TL;DL is a Text Summarizer project, based on TEF (Technology Entrepreneurship: Foundation) course at Skoltech.</p>
                </div>
                <div className="col-12">
                    <h3>Our Team</h3>
                    </div>
                <CardDeck>
                <Card border="light" style={{ width: '20rem' }} >
                <CardImg variant="top" src="assets/images/aziz.png" />
                <CardBody>
                  <CardTitle>Abdalaziz Al-Maeeni</CardTitle>
                  <CardText>
                    Backend developer
                  </CardText>
                </CardBody>
              </Card>
              <Card border="light" style={{ width: '20rem' }} >
              <CardImg variant="top" src="assets/images/igor.png" />
              <CardBody>
                <CardTitle>Igor Panin</CardTitle>
                <CardText>
              Frontend developer
                </CardText>
              </CardBody>
            </Card>
            <Card border="light" style={{ width: '20rem' }} >
            <CardImg variant="top" src="assets/images/gri.png" />
            <CardBody>
              <CardTitle>Grigoriy Shutov</CardTitle>
              <CardText>
                Project manager
              </CardText>
            </CardBody>
          </Card>
          <Card border="light" style={{ width: '25rem' }} >
          <CardImg variant="top" src="assets/images/lily.png" />
          <CardBody>
            <CardTitle>Lily Musina</CardTitle>
            <CardText>
              Project manager
            </CardText>
          </CardBody>
        </Card>
        <Card border="light" style={{ width: '20rem' }} >
        <CardImg variant="top" src="assets/images/anit.png" />
        <CardBody>
          <CardTitle>Anita Soloveva</CardTitle>
          <CardText>
          Frontend developer
          </CardText>
        </CardBody>
      </Card>
            </CardDeck>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-12">
                <h3>Contact us</h3>
                  <CardDeck>
                    <Card>
                        <CardHeader className="bg-primary text-white">Feedback</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <p>If You want to give us any feedback, i.e. ideas for improvement, express gratitude and etc.</p>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="bg-primary text-white">Partnership</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <p>If You want to collaborate with us for R&D or educational activities</p>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="bg-primary text-white">Media</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                            <p>If You want to invite our researchers as speakers or if You have some other PR ideas</p>
                            </dl>
                        </CardBody>
                    </Card>
                      </CardDeck>
                </div>
            </div>
        </div>


    );
}

export default About;
