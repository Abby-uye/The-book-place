import {useState} from "react";
import {useNavigate} from "react-router-dom";
import style from "./index.module.css"

const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const handleLogin = async ()=>{
        try {
            const response = await fetch("http://localhost:8585/api/v1/the-library-press/login",{
               method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            })
            const data = response.json()
            if (response.ok) {
               setErrorMessage("")
                if (email !== null && password !== null) {
                    console.log(data.readerId)
                     navigate("/")
                }
            }
            else if (data.uErr){
                    setErrorMessage(data.uErr)
                    console.log(data.uErr)
                }
            else if(data.pErr){
                    setErrorMessage(data.pErr)
                    console.log(data.pErr)
                }

            }
            catch (error){
            setErrorMessage("Error logging in")
                console.log(error)
        }
    }


    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }
        return (
            <div className={style.login}>
                <form
                    onSubmit={handleLogin}
                    className={style.loginForm}
                >
                    <div className={style.mainCont}>
                        <div>
                            <input type={"email"}
                                   value={email}
                                   placeholder={"Enter your email"}
                                   onChange={handleEmail}
                                   className={style.inputField}

                            />
                            {errorMessage && <span>{errorMessage}</span>}
                        </div>
                        <div>
                            <input type={"password"}
                                   value={password}
                                   placeholder={"Enter your password"}
                                   onChange={handlePassword}
                                   className={style.inputField}
                            />
                            {errorMessage && <span>{errorMessage}</span>}
                        </div>
                        <button style={{backgroundColor: "white"}} type={"submit"}>Submit</button>
                    </div>
                </form>
            </div>
        )
}
export default Login