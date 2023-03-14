import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [validation, setValidation] = useState("invalid");
  const [email, setEmail] = useState("");
  const emailFormat = /^[^.]([a-z\d\.-]+)[^.]@([a-z\d-]+)\.([a-z]{2,3})$/;
  
  useEffect(()=>{
    if(emailFormat.test(email)) setValidation("valid")
    else if(validation == "valid") setValidation("invalid")
  },[email])


  return(
    <>
      <input style={ {borderColor: validation == "valid" ? "rgb(3, 185, 0)" : "red"} } type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <p style={ {fontSize: "19px", color: validation == "valid" ? "rgb(3, 185, 0)" : "red"} } >{`Email is ${validation}`}</p>
    </>
  )
}

export default App
