/* eslint-disable */
import React from 'react';
import { Button, Card, CardText, CardTitle, Col, Container, Row, Form, FormGroup, Label, Input, } from 'reactstrap';

class Cards extends React.Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        
                        <Col md="9">
                            <Card body className="card-shadow">
                                <CardTitle>Profile<a href="#" className="btn btn-sm btn-danger pull-right">Logout</a></CardTitle>
                                <hr className="style1" /> 
                                <Row>
                                    <Col md="3">
                                        <img src="https://he-s3.s3.amazonaws.com/media/avatars/shreedhara.ca/resized/180/photo.jpg" alt="..." className="img-thumbnail"/> 
                                    </Col>
                                        <Col md="8">
                                            <Form className="row">
                                                <FormGroup className="col-md-6">
                                                    <Label htmlFor="name">User Name</Label>
                                                    <Input type="text" className="form-control" id="name" placeholder="Enter Username" />
                                                </FormGroup>
                                                <FormGroup className="col-md-6">
                                                    <Label htmlFor="email">Email Address</Label>
                                                    <Input type="email" className="form-control" id="email" placeholder="Enter email" />
                                                </FormGroup>
                                                <FormGroup className="col-md-6">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input type="password" className="form-control" id="password" placeholder="Password" />
                                                </FormGroup>
                                                <FormGroup className="col-md-6">
                                                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                                                    <Input type="password" className="form-control" id="confirmpwd" placeholder="Confirm Password" />
                                                </FormGroup>
                                                <FormGroup className="col-md-12 ml-3">
                                                    <Input id="checkbox1" type="checkbox" />
                                                    <Label htmlFor="checkbox1"> Remember me </Label>
                                                </FormGroup>
                                                <Col md="12">
                                                    <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                                                    <Button type="submit" className="btn btn-inverse waves-effect waves-light m-r-10">Cancel</Button>
                                                </Col>
                                            </Form>
                                        </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card body className="card-shadow">
                                <div className="side-menu">
                                    <ul>
                                        <li><a href=""><i className="fa  fa-user"></i> <div>Menu Bar</div></a></li>
                                        <li><a href=""><i className="fa  fa-cubes"></i> <div>Cubes Collection</div></a></li>
                                        <li><a href=""><i className="fa  fa-dashboard"></i> <div>Dashboard</div></a></li>
                                        <li><a href=""><i className="fa  fa-search"></i> <div>Search Section</div></a></li>
                                        <li><a href=""><i className="fa  fa-user"></i> <div>User Register</div></a></li>
                                        <li><a href=""><i className="fa  fa-envelope"></i> <div>Inbox</div></a></li>
                                        <li><a href=""><i className="fa  fa-pie-chart"></i> <div>Chart Collection</div></a></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
                );
            }
        }
        
        export default Cards;
