
import {useReducer} from 'react'
import axiosClient from '../../config/axios'
import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const StoreState = (props) => {
    //initial state
    const initialState = {
        stores: [],
        _id: "",
        domicilio: "",
        telefono: ""
    }

    //2config
    //reducers
    const[globalState, dispatch] = useReducer(StoreReducer, initialState)

    //3funciones
    const changeText = () => {

        dispatch({
            type:"CHANGE_TEXT",
            payload: "muerto"
        })
    }
    
    const getStores = async () => {
        const res = await axiosClient.get("stores/readall")
        console.log("Obteniendo tiendas..")
        const list = res.data.data
        dispatch({
            type: "GET_STORES",
            payload: list
        })
       
    }

    const getStore = async (storeId) => {
        const res = await axiosClient.get(`stores/readone/${storeId}`)

        const selectedStore = res.data.data
        dispatch({
            type: "GET_STORE",
            payload: selectedStore
        })
    }


    //return
    return (
        <StoreContext.Provider
        value={{
            stores: globalState.stores,
            hola: globalState.hola,
            singleStore: globalState.singleStore,
            changeText,
            getStores,
            getStore

        }}
        >
            {props.children}


        </StoreContext.Provider>
    )
}

export default StoreState