import React, { useState, useEffect} from 'react'
import Divider from '@mui/material-next/Divider';

const Contact = () => {
    
    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:"" });

    const userContact = async () => {

      try{
        const res = await fetch('/getdata', {
          method:"GET",
          headers: {
            "Content-Type":"application/json"
          },
        });

        const data = await res.json();
        console.log(data);
        setUserData({...userData, name:userData.name, email:userData.email, phone:userData.phone});

        if(!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }

      }catch(err){
        console.log(err);
      }

    }
  
    useEffect(() => {
      userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  const contactForm = async (e) => {
    e.preventDefault();

    const {name, email, phone, message } = userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name, email, phone, message
      })
    });

    const data = await res.json();

    if (!data) {
      console.log("Meassage not send");
    } else {
      alert("Message send");
      setUserData({...userData, message:""});
    }
  }

    return (
        <div className="description-contact-container mt-5">
            <h2 style={{color:'red'}}>Contact us</h2>
            <Divider color="#FDA228" sx={{ height: 2, width: '180px', borderBottomWidth: '4px' }} />
        
                <form className="mt-5" method='POST' id='contact_form' >

                    <div className="mb-5">
                        <label className="form-label"  htmlFor="name">Name</label>
                        <input className="form-control" style={{width:'60%'}} 
                            name="name"
                            value={userData?.name}
                            onChange={handleInputs}
                            type="text" id="name" required />
                    </div>

                    <div className="mb-5">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" style={{width:'60%'}} 
                            name="email"
                            value={userData?.email}
                            onChange={handleInputs}
                            type="email" id="email" required />
                    </div>

                    <div className="mb-5">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <input className="form-control" style={{width:'60%'}}
                            name="phone" 
                            value={userData?.phone}
                            onChange={handleInputs}
                            type="number" id="phone" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea className="form-control" style={{width:'60%'}} 
                          name="message"
                          value={userData?.message}
                          onChange={handleInputs}
                          id="message" required />
                    </div>

                    <button className="button-contact" type="submit"
                    onClick={contactForm}>Send</button>
            </form>
        </div>
  )
}

export default Contact;