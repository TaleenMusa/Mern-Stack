import React,{useState} from 'react'

const Form = () => {
    const [firstName,setFirstName]=useState('');
    const [fnError,setFnError]=useState('');
    const [lastName,setLastName]=useState('');
    const [lnError,setLnError]=useState('');
    const [email,setEmail]=useState('');
    const [eError,setEError]=useState('');
    const [password,setPassword]=useState('');
    const [pError,setPError]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [cpError,setCpError]=useState('');

    const handleFirstName=(e)=>{
        if (e.length >= 2){
            setFirstName(e);
            setFnError('');
        }
        else{
            setFnError('First Name must be atleast 2 characters');
        }
    }

    const handleLastName=(e)=>{
        if (e.length >= 2){
            setLastName(e);
            setLnError('');
        }
        else{
            setLnError('Last Name must be atleast 2 characters');
        }
    }

    const handleEmail=(e)=>{
        if (e.length >= 2){
            setEmail(e);
            setEError('');
        }
        else{
            setEError('Email must be atleast 2 characters');
        }
    }

    const handlePassword=(e)=>{
        if (e.length >= 8){
            setPassword(e);
            setPError('');
        }
        else{
            setPError('Password must be atleast 8 characters');
        }
        
    }

    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e);
        if(password != confirmPassword) {
            setCpError("Passwords must match");
        }
        else{
            setCpError("");
        }
    }



  return (
    <>
        <p>First Name : <input type="text" onChange={e=>handleFirstName(e.target.value)}/></p>
        <p>{fnError}</p>
        <p>Last Name : <input type="text" onChange={e=>handleLastName(e.target.value)}/></p>
        <p>{lnError}</p>
        <p>Email : <input type="text" onChange={e=>handleEmail(e.target.value)}/></p>
        <p>{eError}</p>
        <p>Password : <input type="text" onChange={e=>handlePassword(e.target.value)}/></p>
        <p>{pError}</p>
        <p>{cpError}</p>
        <p>Confirm Password : <input type="text" onChange={e=>handleConfirmPassword(e.target.value)}/></p>
        <hr/>
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password : {confirmPassword}</p>
    </>
  )
}

export default Form