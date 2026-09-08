export interface input {
    placeholder: string
    inputType: string
    label: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface signup {
    name: string
    email: string
    password: string
    repassword: string
}
export interface login {
    email: string
    password: string
}
