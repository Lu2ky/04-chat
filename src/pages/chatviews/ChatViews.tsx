import styles from "./ChatViews.module.css"
import { PiChatTextFill } from "react-icons/pi"
import { LuCircleUser } from "react-icons/lu"
import { useState } from "react"

export function ChatView() {
    const [actived, setactived] = useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div
                className={`${styles.sidebar}`}
                onMouseEnter={() => setactived(true)}
                onMouseLeave={() => setactived(false)}
            >
                <div className={`${styles.column} ${styles.innerBox}`}>
                    <div
                        className={`${styles.row} ${styles.icon} ${styles.chaticon}`}
                    >
                        <PiChatTextFill
                            color="black"
                            size={30}
                        ></PiChatTextFill>
                        <h5
                            className={
                                actived ? `${styles.para}` : `${styles.hidden}`
                            }
                        >
                            Chats
                        </h5>
                    </div>
                    <div
                        className={`${styles.row} ${styles.icon} ${styles.user}`}
                    >
                        <LuCircleUser
                            color="black"
                            size={30}
                        ></LuCircleUser>
                        <h5
                            className={
                                actived ? `${styles.para}` : `${styles.hidden}`
                            }
                        >
                            User
                        </h5>
                    </div>
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
