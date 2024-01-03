import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Signout = () => {

    const navigate = useNavigate();
    useEffect(() => {
        fetch('/signout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate('/signin', {replace: true});
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }else{ 
                window.alert("User successfully Logged off")
            }
        }).catch((err) => {
            console.log(err);
        })
    });

  return (
    <div>
        
    </div>
  )
}

export default Signout