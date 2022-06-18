import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesBar from './../../components/catogeriesBar/CategoriesBar';
import Video from './../../components/video/Video';

const HomeScreen = () => {
  return <Container>
    <CategoriesBar/>
    <Row>
    {[...new Array(20)].map(()=> <Col lg={3} md={4} >
            <Video />
            </Col>)}
    </Row>
  </Container>
};

export default HomeScreen;
