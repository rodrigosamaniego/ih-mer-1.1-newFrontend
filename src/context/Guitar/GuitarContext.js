// ./client/src/context/Guitar/GuitarContext.js
// GUITAR CONTEXT
// INICIALIZACIÓN DEL CONTEXT, ESTO SIGNIFICA QUE EMPIEZA CON UN VALOR INICIAL DE NULL, PERO, CONFORME VAYAMOS AGREGANDO NUEVOS VALORES, ESE NULL VA A CAMBIAR A UN OBJETO
import { createContext } from 'react'

const GuitarContext	= createContext(null)

export default GuitarContext