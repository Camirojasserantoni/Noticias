import React,{Component} from 'react';
import propTypes from 'prop-types';
class Formulario extends Component {
    state = { 
        categoria: 'general'
     }



     cambiarCategoria = e => {

        this.setState({
            categoria: e.target.value
        }, () => {
            this.props.consultarNoticias(this.state.categoria);
        })

        //pasarlo a la pagina principal para que haga la consulta
       
     }

    render() { 
        return ( 

            <div className= "buscador row">
                <div className="col s12 m8 offset-m2"></div>
                    <form>
                        <h2>Encuentra Noticias por categoría
                        </h2>
                        <div className="input-field col s12  m8"> 
                            <select 
                            onChange={this.cambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business"> Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports"> Deportes</option>
                                <option value="technology">Tecnología</option>




                             </select>   



                         </div>   
                    </form>   
            </div>

         );
    }
}
 
Formulario.propTypes = { 
    consultarNoticias: propTypes.func.isRequired
}
export default Formulario;