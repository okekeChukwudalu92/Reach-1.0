import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const[user, setUser] = useState(null);
    //user shhape : shape{name, phone, role:'student' | 'driver' }
    const mockLogin = (name, phone, role) => {
        setUser({name, phone, role});
    };
    const logout = () => setUser(null);

    return(
        <AuthContext.Provider value={{user, mockLogin,logout }}>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}