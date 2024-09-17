import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from "./Post";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container className="mt-3">
    <Row>
      <Post author="John Doe" content="This is the post content" likes={20} />
      <Post author="Anne Hill" content="I like React" likes={3} />
      <Post author="Laia Martins" content="I love JSX" likes={0} />
    </Row>
  </Container>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
