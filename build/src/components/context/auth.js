import { useState,useEffect,useContext,createContext } from "react";

const AuthContext=createContext();
const AuthProvider=({Children})=>{
const[auth,setAuth]=useState({
    user:null,
    token:""
})
return(
    <AuthContext.Provider value={[auth,setAuth]}>
        {Children}
    </AuthContext.Provider>
)
}

const useAuth =()=> useContext(AuthContext);

export{useAuth,AuthProvider}