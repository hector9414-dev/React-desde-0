import React from 'react'

import Home from './Pages/Home'
import Form from './Pages/Form'
import CourseGrid from './Pages/Courses'
import Course from './Pages/Course'
import Header from './Organisms/Header'
import Users from './Pages/Users'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRoutes = ()=>(
    <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cursos" component={CourseGrid}/>
        <Route path="/curso/:id" component={Course}/>
        <Route path="/usuarios/" component={Users}/>
        <Route path="/formulario" component={ ()=> <Form title="de Registro"/> }/>
        <Route component={()=>(
        <div className="ed-grid">
            <h1>Error 404</h1>
            <p>Pagina no eccontrada</p>
        </div>)
        }/>
        </Switch>
    </Router>
)

export default AppRoutes