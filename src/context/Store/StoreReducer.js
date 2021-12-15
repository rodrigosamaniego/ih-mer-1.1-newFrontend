
const reducer = (globalState, action) => {
    switch(action.type){
        
        case "GET_STORE":
            return{
                ...globalState,
                singleStore: action.payload
            }

        case "GET_STORES":
            return {
                ...globalState,
                stores: action.payload
            }
        
        
        case "CHANGE_TEXT":
        return {
            ...globalState,
            hola: action.payload
        }

        default:
            return globalState
    }
}

export default reducer