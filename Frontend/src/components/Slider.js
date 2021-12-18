import React, {Component} from 'react';
//Defenimos una clase
class Slider extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        return (
            <div>
                <div id="slider" className={this.props.size}>
                    {/* <h1>Bienvenido al Curso de ReactJS NRC 53848 - 53849</h1> */}
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.curso}</h2>

                    {this.props.btn &&
                        <a href="index.html" className="btn-white">{this.props.btn}</a>
                    }
                    
                </div> 
                
                {/*LIMPIAR FLOTADOS*/}
                <div class="clearfix">
                            
                </div>
            </div>
            )    
    }
}
// Lo exportamos 
export default Slider;