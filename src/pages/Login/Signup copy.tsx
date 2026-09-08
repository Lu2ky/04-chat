import styles from "./Signup.module.css"
import { Input } from "../../components/input/input"
import { Link } from "react-router-dom"

export function Signup() {
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
                    ></Input>
                    <Input
                        {...{
                            inputType: "password",
                            label: "password",
                            placeholder: "enter your password",
                        }}
                    ></Input>
                    <Input
                        {...{
                            inputType: "password",
                            label: "confirm password",
                            placeholder: "enter your password again",
                        }}
                    ></Input>
                    <button className={styles.submit}>Sign-in</button>
                    <p>U already have an account?</p>
                    <Link
                        className={styles.links}
                        to="/login"
                    >
                        Log-ing
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
                ></Input>
                <Input
                    {...{
                        inputType: "password",
                        label: "password",
                        placeholder: "enter your password",
                    }}
                ></Input>
                <Input
                    {...{
                        inputType: "password",
                        label: "confirm password",
                        placeholder: "enter your password again",
                    }}
                ></Input>
                <button className={styles.submit}>Sign-in</button>
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
