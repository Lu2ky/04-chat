import styles from "./Signup.module.css"
import { Input } from "../../components/input/input"
import { Link, useNavigate, type NavigateFunction } from "react-router-dom"
import { auth } from "../../data/api/firebase/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import type { signup } from "../../types/types"
import { useState } from "react"

export function Signup() {
    const navigate: NavigateFunction = useNavigate()
    const [values, setvalues] = useState<signup>({
        name: "",
        email: "",
        password: "",
        repassword: "",
    })
    const [_errorMsg, seterrorMsg] = useState<string>("")
    const [submitButton, setsubmitButton] = useState<boolean>(false)
    const registro = () => {
        if (!values.email || !values.password || !values.repassword) {
            seterrorMsg("Llene todos los campos")
            return
        }
        if (!(values.password === values.repassword)) {
            seterrorMsg("Contraseñas no coinciden")
            return
        }
        seterrorMsg("")
        setsubmitButton(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setsubmitButton(false)
                const user = res.user
                await updateProfile(user, { displayName: values.name })
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
                            inputType: "text",
                            label: "name",
                            placeholder: "enter your name",
                        }}
                        onChange={(event) => {
                            setvalues((prev: signup) => ({
                                ...prev,
                                name: event.target.value,
                            }))
                        }}
                    ></Input>
                    <Input
                        {...{
                            inputType: "email",
                            label: "email",
                            placeholder: "enter your email",
                        }}
                        onChange={(event) => {
                            setvalues((prev: signup) => ({
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
                            setvalues((prev: signup) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }}
                    ></Input>
                    <Input
                        {...{
                            inputType: "password",
                            label: "confirm password",
                            placeholder: "enter your password again",
                        }}
                        onChange={(event) => {
                            setvalues((prev: signup) => ({
                                ...prev,
                                repassword: event.target.value,
                            }))
                        }}
                    ></Input>
                    <button
                        className={styles.submit}
                        onClick={registro}
                        disabled={submitButton}
                    >
                        Sign-in
                    </button>
                    <p>U already have an account?</p>
                    <Link
                        className={styles.links}
                        to="/login"
                    >
                        Log-in
                    </Link>
                </div>
                <div className={styles.card}>CHAT</div>
            </div>
            <div className={styles.right}>
                <Input
                    {...{
                        inputType: "text",
                        label: "name",
                        placeholder: "enter your name",
                    }}
                    onChange={(event) => {
                        setvalues((prev: signup) => ({
                            ...prev,
                            name: event.target.value,
                        }))
                    }}
                ></Input>
                <Input
                    {...{
                        inputType: "email",
                        label: "email",
                        placeholder: "enter your email",
                    }}
                    onChange={(event) => {
                        setvalues((prev: signup) => ({
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
                        setvalues((prev: signup) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }}
                ></Input>
                <Input
                    {...{
                        inputType: "password",
                        label: "confirm password",
                        placeholder: "enter your password again",
                    }}
                    onChange={(event) => {
                        setvalues((prev: signup) => ({
                            ...prev,
                            repassword: event.target.value,
                        }))
                    }}
                ></Input>
                <button
                    className={styles.submit}
                    onClick={registro}
                    disabled={submitButton}
                >
                    Sign-in
                </button>
                <p>U already have an account?</p>
                <Link
                    className={styles.links}
                    to="/login"
                >
                    Log-in
                </Link>
            </div>
        </div>
    )
}
