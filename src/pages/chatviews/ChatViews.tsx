import styles from "./ChatViews.module.css"
import { PiChatTextFill } from "react-icons/pi"
import { useState, type ReactElement, type ReactNode } from "react"

export function ChatView() {
    const [actived, setactived] = useState<boolean>(false)
    const [animationEnded, setanimationEnded] = useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div
                className={`${styles.sidebar}`}
                onMouseEnter={() => setactived(true)}
                onMouseLeave={() => setactived(false)}
            >
                <div className={`${styles.row} ${styles.innerBox}`}>
                    <PiChatTextFill
                        color="black"
                        size={30}
                        cursor={"pointer"}
                    ></PiChatTextFill>
                    <h5
                        className={
                            actived
                                ? `${styles.para}`
                                : `${styles.para} ${styles.hidden}`
                        }
                    >
                        Chats
                    </h5>
                </div>
            </div>
            <div className={styles.chat}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="insert message"
                />

                <div className={styles.messages}>
                    {Array.from({ length: 30 }, (_, i) => (
                        <div
                            key={i}
                            className={styles.usermessage}
                        >
                            ola
                        </div>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => (
                        <div
                            key={i}
                            className={styles.othermessage}
                        >
                            ola
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
