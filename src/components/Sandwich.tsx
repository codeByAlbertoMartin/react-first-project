import { useEffect, useState } from "react";
import type { Ingredientes} from "../models/sandwich.model";
import type { Relleno } from "../models/sandwich.model";


export function Sandwich({ relleno, pan }: Ingredientes) {
    //Variables
    const [text, setText] = useState(relleno.mayonesa ? "viene con mayonesa" : "no viene con mayonesa");

    const [upperCaseText, setUpperCaseText] = useState(text.toUpperCase());
    
    const [filteredRelleno, setFiltereRelleno] = useState(Object.keys(relleno));

    //MÉTODOS
    const changeText = (newText: string) => {
        setText(newText);
        setUpperCaseText(newText.toUpperCase());
    }

    
    const filterRelleno = (element: Relleno) => {
       return Object.keys(element).filter(key => !!element[key as keyof Relleno]);
    };
    

    //Efectos se ejecutan al menos una vez, y luego, cada vez que cambie lo que hay dentro de [ ], hay cambio de nuevo
    //useEffect se creo para sincronizar con el extrerior
    useEffect(() => {

        const filtered = filterRelleno(relleno);

        setFiltereRelleno(filtered);

        return () => {
            console.log("El componente Sandwich se ha desmontado");
        }
        //Creación / Actualización
    }, [relleno, setFiltereRelleno]);
    /*
    useEffect(() => {
        //No es externo, muchos renders innecesarios. Hacerlo cuando se cambia el texto
        setUpperCaseText(text.toUpperCase());
    
    }, [text, setUpperCaseText]);
    */
    return (
        <div>
            <h2>Viene con</h2>

            <p>¿ Mayonesa ? {text} </p>
            
            <p>Viene con pan de: {pan}</p>

            {filteredRelleno.map((element) => (
                <p key={element}>{element}</p>
            ))}

            <p>Texto en mayúsculas: {upperCaseText}</p>

            <button onClick={ () => { 
                changeText("Cualquier otro texto")
            }}>
                Cambiar Texto
            </button>
        </div>
    );
}

