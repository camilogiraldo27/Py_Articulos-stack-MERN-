import React from "react";
import { Component } from "react";

class Receta extends Component{

    render(){
        const receta ={
            nombre: "Pizza",
            ingredientes:['Tomate', 'Queso','Jamon'],
            calorias: 400
        }

        return(
            <div>
                <h1>{'Nombre: ${receta.nombre}'}</h1>
                <h2>{'Calorias: ${receta.calorias}'}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i)=>{
                            console.log(ingredientes);   
                            return(
                               <li key={i}>
                                   {ingredientes}
                               </li> 
                            )                     
                        })
                    }
                </ol>
            </div>
        )

    }
}

export default Receta;