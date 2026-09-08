import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import { Signup } from "../pages/Signup/Signup"
import { Login } from "../pages/Login/Login"
import { auth } from "../data/api/firebase/firebase"
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { ChatView } from "../pages/chatviews/ChatViews"

export function MyRoutes() {
    const [userName, setUserName] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserName(user ? user.displayName : null)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/login"></Navigate>}
                ></Route>
                <Route
                    path="/signup"
                    element={<Signup></Signup>}
                ></Route>
                <Route
                    path="/login"
                    element={<Login></Login>}
                ></Route>
                <Route
                    path="/chats/:id"
                    element={
                        loading ? (
                            <p>Cargando...</p>
                        ) : userName ? (
                            <ChatView></ChatView>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </Router>
    )
}
