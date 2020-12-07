import React, { useState } from 'react'


type User = null | {username: string}

export const AuthContext = React.createContext<{
    user: User,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {}
});

interface AuthProviderProps {

}
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<null | {username: string} >(null);
     return (
         <AuthContext.Provider value={{
             user,
             login: () => {
                 const fakeUser = {username: 'Bboy'}
                setUser(fakeUser);
             },
             logout: () => {
                 setUser(null);
             }
         }}>
             {children}
         </AuthContext.Provider>
     )
}