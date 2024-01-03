import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Divider from '@mui/material-next/Divider';
import { useEffect, useState } from 'react';

const Profile = () => {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const callProfilePage = async () => {
      

      try{
        const res = await fetch('/profile', {
          method:"GET",
          headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }

      }catch(err){
        console.log(err);
        navigate('/signin', {replace: true}); //'/signin'
      }

    }
    
      callProfilePage();
  }, []);  
  

  return (
    <>
      <div className='description-profile-container mt-5'>
        <form method="GET">
          <h1 style={{color:'red'}}>Profile</h1>
          <Divider color="#FDA228" sx={{ height: 2, width: '130px', borderBottomWidth: '4px' }} />
          <div className='row mt-5'>
            <div className='col-md-5'>
              <div className='profile-head'>
                  <h5>{userData?.name}</h5>
              <div className='mt-5'>
                  <h5 style={{color:'red'}}>About</h5>
              </div>
                  



              </div>

              <div className='row'>
                
                  <div className='col-md-8 pl-5'>
                      <div className='tab-content profile-tab' id='myTabContent'>
                        <div className='tab-pane fade show active' id='profile-tab' role='tablepanel' aria-labelledby ='home-tab'>
                         

                          <div className='row mt-3'>
                            <div className='col-md-6'>
                              <label>User ID</label>
                            </div>
                            <div className='col-md-6'>
                              <p>{userData?._id}</p>
                            </div>
                          </div>

                          <div className='row mt-3'>
                            <div className='col-md-6'>
                              <label>Username</label>
                            </div>
                            <div className='col-md-6'>
                              <p>{userData?.name}</p>
                            </div>
                          </div>
      
                          <div className='row mt-3'>
                            <div className='col-md-6'>
                              <label>Email</label>
                            </div>
                            <div className='col-md-6'>
                              <p>{userData?.email}</p>
                            </div>
                          </div>

                          <div className='row mt-3'>
                            <div className='col-md-6'>
                              <label>Phone Number</label>
                            </div>
                            <div className='col-md-6'>
                              <p>{userData?.phone}</p>
                            </div>
                          </div>
                          
                          <div className='col-md-2' style={{display:'flex'}}>
                            <Link to="/signout">
                              <button type="submit" className='button-profile-logout mt-5'>Logout</button>
                            </Link>
                          </div>

                        </div>

                      </div>
                  </div>
                
              </div>
            </div>
          </div>

        </form>

      </div>
    </>
  )
}

export default Profile;