//Import -- depentencias
import type { ReactNode } from "react"
import "./Title.module.css"

interface Props {
    children: ReactNode
}

export const Title = ({ children } : Props) => {
    //logica del componente
    //React trabaja con JSX, que es una sintaxis que permite escribir HTML dentro de JavaScript
    //HTML + JavaScript o HTML + TypeScript (TSX)
    //Le estamos añadiendo estilo  a un componente Title que ya tiene estilo de por si (el de h1 en este caso)
    //El componente Title recibe un children que es el texto que se va a mostrar dentro del h1
    return <h1 className="title">{children}</h1>
}


