import React from 'react';
import "./styles/styles.scss";
import Banner from './Banner'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid'
import Course from './Course'
import MainMenu from './MainMenu'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


const App = () => (
  <Router>
    <MainMenu />
    <Switch>
    <Route path="/" exact component={Banner}/>
    <Route path="/cursos" exact component={CourseGrid}/>
    <Route path="/cursos/:id" exact component={Course}/>
    <Route path="/formulario" exact component={ ()=> <Formulario title="de Registro"/> }/>
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
