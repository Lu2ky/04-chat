import styles from "./Login.module.css"
import { Input } from "../../components/input/input"
import { Link, useNavigate, type NavigateFunction } from "react-router-dom"
import { auth } from "../../data/api/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import type { login } from "../../types/types"
import { useState } from "react"

export function Login() {
    const navigate: NavigateFunction = useNavigate()
    const [values, setvalues] = useState<login>({
        email: "",
        password: "",
    })
    const [_submitButton, setsubmitButton] = useState<boolean>(false)
    const [errorMsg, seterrorMsg] = useState<string>("")
    const Login = () => {
        if (!values.email || !values.password) {
            seterrorMsg("Llene todos los campos")
            return
        }
        seterrorMsg("")
        setsubmitButton(false)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                setsubmitButton(false)
                const user = res.user
                localStorage.setItem("user_chat", user.uid)
                navigate("/chats/" + user.uid)
            })
            .catch((err) => {
                setsubmitButton(false)
                seterrorMsg(err.message)
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.responsive_form}>
                    <Input
                        {...{
                            inputType: "email",
                            label: "email",
                            placeholder: "enter your email",
                        }}
                        onChange={(event) => {
                            setvalues((prev: login) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }}
                    ></Input>
                    <Input
                        {...{
                            inputType: "password",
                            label: "password",
                            placeholder: "enter your password",
                        }}
                        onChange={(event) => {
                            setvalues((prev: login) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }}
                    ></Input>
                    <button
                        className={styles.submit}
                        onClick={Login}
                    >
                        Login
                    </button>
                    <b>{errorMsg}</b>
                    <p>U dont have an account?</p>
                    <Link
                        className={styles.links}
                        to="/signup"
                    >
                        Sign-in
                    </Link>
                </div>
                <div className={styles.card}>CHAT</div>
            </div>
            <div className={styles.right}>
                <Input
                    {...{
                        inputType: "email",
                        label: "email",
                        placeholder: "enter your email",
                    }}
                    onChange={(event) => {
                        setvalues((prev: login) => ({
                            ...prev,
                            email: event.target.value,
                        }))
                    }}
                ></Input>
                <Input
                    {...{
                        inputType: "password",
                        label: "password",
                        placeholder: "enter your password",
                    }}
                    onChange={(event) => {
                        setvalues((prev: login) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }}
                ></Input>

                <button
                    className={styles.submit}
                    onClick={Login}
                >
                    Login
                </button>
                <b>{errorMsg}</b>
                <p>U dont have an account?</p>
                <Link
                    className={styles.links}
                    to="/signup"
                >
                    Sign-in
                </Link>
            </div>
        </div>
    )
}
