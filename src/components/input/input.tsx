import { useState } from "react"
import type { input } from "../../types/types"
import styles from "./input.module.css"

export function Input(props: input) {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = props.inputType === "password"
    const inputType = isPassword && showPassword ? "text" : props.inputType

    return (
        <div className={styles.container}>
            {props.label && (
                <label className={styles.label}>{props.label}</label>
            )}
            <div className={styles.inputWrapper}>
                <input
                    type={inputType}
                    className={styles.input}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
                {isPassword && (
                    <button
                        type="button"
                        className={styles.eyeButton}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            // Ojo abierto (mostrando)
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="3"
                                />
                            </svg>
                        ) : (
                            // Ojo tachado (oculto)
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line
                                    x1="1"
                                    y1="1"
                                    x2="23"
                                    y2="23"
                                />
                            </svg>
                        )}
                    </button>
                )}
            </div>
        </div>
    )
}
