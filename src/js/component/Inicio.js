import React, { useState } from "react";
import PropType from "prop-types";
import ReactDOM from "react-dom";

const Inicio = (props) => {
    const [state, setState] = useState({
        player1: "",
        player2: "",
    });
    const [primero, setPrimero] = useState("")

    const handleChange = e => {
        setState({
            ...state, //misma funcion para todos los campos
            [e.target.name]: e.target.value //escribir en el texto que corresponde //name//
        })
    }
    const handleClick = e => {
        if (state.player1 !== "" && state.player2 !== "") {
            if (e.target.className == "btn btn1" || e.target.className === "fas fa-times") {
                console.log("hola")
                props.startPlayer1()
            } else {
                console.log("chao")
                props.startPlayer2()
            }
        }
        console.log(e.target.className)
    }

    console.log(props)
    return (
        <>
            <div className={"contenedor " + (props.ocultar ? "d-none" : " ")}>
                <h3>Pick a Weapon</h3>

                <div className="row">
                    <div className="contenedorIn">
                        <input type="text" className="form-control" name="player1" id="player1" placeholder="Player 1" onChange={(e) => handleChange(e)} />
                        <input type="text" className="form-control ml-1" name="player2" id="player2" placeholder="Player 2" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="button row">
                    <button className="btn btn1" onClick={(e) => handleClick(e)}><i className="fas fa-times" onClick={(e) => handleClick(e)}></i></button>
                    <button className="btn btn2" onClick={(e) => handleClick(e)}><i className="far fa-circle"onClick={(e) => handleClick(e)}></i></button>
                </div>
            </div>
        </>
    )
}

export default Inicio;