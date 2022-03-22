import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import{ 
Navigation,
Footer,
Home,
About,
Contact,
Form,
Blog,
Posts,
Post
} from "./components";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/form" element={<Form/>}/>
  <Route path="" element={<Posts/>}/>
  <Route path=":postSlug" element={<Post/>}/>
  <Route/>
  </Routes>
  <Footer />
  </Router>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
