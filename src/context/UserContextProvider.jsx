import React, { useState } from "react";
import UserContext from "./UserCoontext";
 
const UserContextProvider = ({children})=>{

    const [user, setuser] =  useState("")
   return (
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
   )

}

export default UserContextProvider