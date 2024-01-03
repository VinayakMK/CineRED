import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieList from "./Movielist";
import axios from "axios";
import { API_KEY } from "../App";

const Container = styled.div`
  background-color: white;
  flex-direction: row;
  color: white;
  padding-left: 30%;
  margin-top: 4%;
  margin-left: 17.1%;
  margin-right: 17.1%;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
`;



const Recomendation = (props) => {
    

  return (
    <>
    <div className="mt-5">
        <h5 className="mt-5" style={{color:'red'}}>Based on your search :</h5>
    </div>

    
    
    <Container className="" type='submit'>
        <div style={{marginLeft:'-315px'}}>
        <div style={{display:'flex'}}>
          <div>
            <button
              className="box-rec"
              type="button"
            >More From
            </button>
          </div>
          <div>
            <button
              className="box-rec"
              type="button"
              //onClick={handleClick}
            >More From</button>
          </div>
        </div>

        <div style={{display:'flex'}}>
          <div>
            <button
              className="box-rec"
              type="button"
              //onClick={handleClick}
            >More From</button>
          </div>
          <div>
            <button
              className="box-rec"
              type="button"
              //onClick={handleClick}
            >More From</button>
          </div>
        </div>

        <div style={{display:'flex'}}>
          <div>
            <button
              className="box-rec"
              type="button"
              //onClick={handleClick}
            >More From</button>
          </div>
          <div>
            <button
              className="box-rec"
              type="button"
              //onClick={handleClick}
            >More From</button>
          </div>
        </div>
        </div>
        
        
    </Container>
    </>
  )
}

export default Recomendation;