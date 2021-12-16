// ./src/context/User/UserReducer.js

const reducer = (globalState, action) => {


	switch (action.type) {

		case "REGISTRO_EXITOSO":
		case "LOGIN_EXITOSO":
			localStorage.setItem("token", action.payload)

			return {
				...globalState,
				authStatus: true
			}


		case "GET_DATA_USER":
			return {
				...globalState,
				authStatus: true,
				currentUser: action.payload
			}

		default: 
			return globalState

	}


}

export default reducer