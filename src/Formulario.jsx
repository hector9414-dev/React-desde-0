import React, {Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            time: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
        this.Enviar = this.Enviar.bind(this)


    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }
    cambiarFecha(e){
        let date = new Date()
        let hours = date.getHours()
        let mins = date.getMinutes()
        if(mins<10){
            mins = `0${mins}`
        }
        let secs = date.getSeconds()
        if(secs<10){
            secs = `0${secs}`
        }
        let t = `${hours}:${mins}:${secs}`
        this.setState({
            time: t
            
        })
    }

    Enviar(e){
        e.preventDefault()
        console.log(e.target.nombre.value)
        console.log(e.target.email.value)
    }

    render(){
        return (
            <div className="ed-grid s-py-2"> 
                <h1 className="center">Formulario {this.props.title} </h1>
                <div><p> {this.state.time} </p></div>
                <form className="" onSubmit={this.Enviar}>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item" >
                            <label>Nombre Completo</label>
                            <input type="text" onChange={this.cambiarNombre} id="nombre"/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email" onChange={this.cambiarCorreo} id="email"/>
                        </div>
                    </div>
                    <button type="submit" className="button small" value="Enviar" id="send">Enviar</button>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.interval = setInterval(()=>(
        this.cambiarFecha()
        ),1000)
    }

    componentDidUpdate(prevProps,prevState){
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
     
}

export default Formulario