import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CategoryService";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [auth, sethAuth] = useState({token: null, role: null});


    useEffect(() => {
        async function loadData(){
            const response = await fetchCategories();
            setCategories(response.data);
        }

        loadData();
    }, []);

    const setAuthData = (token, role) => {
        sethAuth({token, role});
    }

    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
    
}