// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import Guitars from './components/Guitars'
import Stores from './components/Stores'
import Single from './components/Guitars/Single'
import SingleStore from './components/Stores/Single'
import CreateGuitar from './components/Guitars/Create'
import GuitarState from './context/Guitar/GuitarState'
import StoreState from './context/Store/StoreState'
import CreateStore from './components/Stores/CreateStore'

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
			<GuitarState>
				<StoreState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="registro" element={<Register />} />
							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Login />} />
							{/* localhost:3000/guitarras */}
							<Route path="guitarras" element={<Guitars />} />
							
							<Route path="guitarras/:id" element={<Single/>}/>
							<Route path="guitarras/crear" element={<CreateGuitar />} />
							<Route path="tiendas" element={<Stores />} />
							<Route path="tiendas/:id" element={<SingleStore/>}/>
							<Route path="tiendas/crear" element={<CreateStore/>}/>
						</Route>
					</Routes>
				</BrowserRouter>
				</StoreState>
			</GuitarState>
			
		</>
	)
}


// 3. EXPORTACIÓN
export default Router