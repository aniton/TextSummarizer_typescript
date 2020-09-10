import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/try">Try</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        Student Department, Admissions Team<br />
                        Skolkovo Institute of Science and Technology<br />
                        Bolshoy Boulevard 30, bld. 1<br />
                        Skolkovo, 121205<br />
                        Russian Federation<br />
                        <i className="fa fa-phone fa-lg"></i>: +8(999)999-999<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:www@skoltech.ru">
                            www@skoltech.ru</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© TL;DL all rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
