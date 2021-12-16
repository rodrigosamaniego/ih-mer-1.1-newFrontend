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
import UserState from './context/User/UserState'
import EditGuitar from './components/Guitars/Single/Edit'
import EditStore from './components/Stores/Single/Edit'

import Auth from './routes/Auth'
import Private from './routes/Private'
import Profile from "./components/User/Profile";




// 2. FUNCIÓN
const Router = () => {

	return (
		<>
			<UserState>
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

									<Route path="guitarras/:id" element={<Single />} />
									<Route path="guitarras/crear" element={<CreateGuitar />} />
									{/* localhost:3000/guitarras/:id/editar */}
									<Route path="guitarras/:id/editar" element={<EditGuitar />} />
									<Route path="tiendas/:id/editar" element={<EditStore />} />
									<Route path="tiendas" element={<Stores />} />
									<Route path="tiendas/:id" element={<SingleStore />} />
									<Route path="tiendas/crear" element={<CreateStore />} />
									
							{/* 1. RUTAS DE AUTENTICACIÓN */}
							{/* EVITAN QUE UN USUARIO LOGGEADO PUEDA ENTRAR A REGISTER.JS Y LOGIN.JS */}

							{/* localhost:3000/registro */}
							<Route 
								path="registro" 
								element={<Auth component={Register} />} 
							/>

							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Auth component={Login} />} />
							<Route path="profile" element={<Private component={Profile} />} />
								</Route>
							</Routes>
						</BrowserRouter>
					</StoreState>
				</GuitarState>
			</UserState>

		</>
	)
}


// 3. EXPORTACIÓN
export default Router