import "./App.css";
import { Sandwich } from "./components/Sandwich";
import { Panes } from "./models/sandwich.model";
import type { Relleno } from "./models/sandwich.model";
// Cotenedor = estructura la página
// Obtener la i¡informacion que se utilizará en su hijos
function App() {
  const relleno : Relleno= {
    lechuga: true,
    carne: false,
    pepinillo: false,
    mostaza: true,
    mayonesa: true
  }
  const pan: Panes = Panes.SEMILLAS;
  return <>
    <Sandwich relleno= {relleno} pan = {pan} />
  </>
  
}

export default App
