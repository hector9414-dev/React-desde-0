import React from 'react';
import "../styles/styles.scss";
import Home from './Pages/Home'
import Form from './Pages/Form'
import CourseGrid from './Pages/CourseGrid'
import Course from './Pages/Course'
import Header from './Organisms/Header'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


const App = () => (
  <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/cursos" exact component={CourseGrid}/>
    <Route path="/cursos/:id" exact component={Course}/>
    <Route path="/formulario" exact component={ ()=> <Form title="de Registro"/> }/>
    <Route component={()=>(
      <div className="ed-grid">
        <h1>Error 404</h1>
        <p>Pagina no eccontrada</p>
      </div>)
    }/>
    </Switch>
  </Router>
  )

export default App;
