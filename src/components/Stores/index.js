// import React, {useEffect, useContext} from "react";
// import StoreContext from "../../context/Store/StoreContext";
// import { Link } from "react-router-dom";

// export default function Stores() {
//     const ctx = useContext(StoreContext)


//     const {stores, hola, changeText} = ctx

//     return (
//         <>
//         <p>Listado de tiendas</p>
        
//         <button onClick={ () => {getStores()}}>
//             Listar tiendas
//         </button>
//         <div>
//             <h2>Listado de Tiendas</h2>
//             <ul>
//                 {
//                     stores.map((element) =>{
//                         return (
//                             <li key={element._id}>
//                                 <Link to={`/tiendas/${element._id}`}>
//                                 <p>{element.domicilio} </p>
//                                 </Link>
//                                 <p>{element.telefono} </p>
//                             </li>
//                         )
//                     })

// }
//             </ul>
//         </div>
//         </>
//     )

// }