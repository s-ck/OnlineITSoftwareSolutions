import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Course from './components/courses/course.component';
import NavBar from './components/navigation/navigation.component';
import AboutUs from './components/aboutus/aboutus.component';
import QuickEnquiry from './components/enquiry/quick-enquiry.component';
import Register from './components/register/register.component';
import Home from './components/home/home.component';
import Testimonies from './components/testimonies/testimonies.component';
import TestimonieForm from './components/testimonies/add.testimonies';
import Projects from './components/projects/projects.component';
import Syllabus from './components/syllabus/syllabus.component';

const App = () => (
  <>
    <BrowserRouter basename = {process.env.React_APP_PUBLIC_URL}>
      <NavBar/>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path='/courses' component = {Course}/>
        <Route path='/aboutus' component = {AboutUs}/>
        <Route exact path='/enquiry' component = {QuickEnquiry}/>
        <Route exact path='/register' component = {Register}/>
        <Route exact path='/testimonies' component = {Testimonies}/>
        <Route exact path='/testimonies/add' component = {TestimonieForm}/>
        <Route exact path='/projects' component = {Projects}/>
        <Route path='/syllabus' component = {Syllabus}/>
      </Switch>
    </BrowserRouter>
  </>
)
export default App;
