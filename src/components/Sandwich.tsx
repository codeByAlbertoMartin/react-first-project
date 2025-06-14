import { useState } from "react";
import type { Ingredientes, Relleno } from "../models/sandwich.model";


export function Sandwich({ relleno, pan }: Ingredientes) {
    const [text, setText] = useState(relleno.mayonesa ? "viene con mayonesa" : "no viene con mayonesa");

    const filtereRelleno = Object.keys(relleno).filter(key => !!relleno[key as keyof Relleno]);


    return (
        <div>
            <h2>Viene con</h2>

            <p>¿ Mayonesa ? {text} </p>
            
            <p>Viene con pan de: {pan}</p>

            {filtereRelleno.map((element) => (
                <p key={element}>{element}</p>
            ))} 

            <button onClick={ () => { 
                setText ("cualquier cosa")}}>Cambiar Texto
            </button>
        </div>
    );
}

