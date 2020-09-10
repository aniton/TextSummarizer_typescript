import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Control, Form, Errors } from 'react-redux-form';
import 'react-tabs/style/react-tabs.css';
import axios, { post } from 'axios';
class Try extends Component {

    constructor(props) {
        super(props);
        this.state ={
              file:null
            }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }

    handleSubmit(values) {
        this.props.postText(values);
        this.props.resetTextForm();
    }

    render() {
        return(
          <div class="container">
          <Tabs>
      <TabList>
        <Tab>Insert the text</Tab>
        <Tab>Upload a document</Tab>
      </TabList>
      <TabPanel>
      <Form model="text" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md={5}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="15"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 0}}>
                                        <Button type="submit" color="primary">
                                        Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
      </TabPanel>
      <TabPanel>
      <form onSubmit={this.onFormSubmit}>
        <Row className="form-group">
              <input type="file" onChange={this.onChange} />
              </Row>
              <Row className="form-group">
                  <Col md={{size:10, offset: 0}}>
                      <Button type="submit" color="primary">
                      Submit
                      </Button>
                  </Col>
              </Row>
            </form>
      </TabPanel>
    </Tabs>
    </div>

        );
    }

}

export default Try;
