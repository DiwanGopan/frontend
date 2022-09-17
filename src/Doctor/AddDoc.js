import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Basic/Navbar";
import Leftside from "../Dashbaord/LeftsideDoctor";
import { Row,Col, Container, FormGroup, Input, Label, Button } from 'reactstrap';
import { Redirect, useHistory } from 'react-router';

import axios from "axios";

const AddDoc = () => {
    const [form,setForm]= useState({
        username:"",
		password:"",
		name:"",
		phoneNumber:"",
		specialization:"",
		feesPerSession:"",
    })
    function updateForm(value){
        return setForm((prev)=>{
            return {...prev,...value};
        });
    }
    const history = useHistory();

    async function addOfficer() {
        const newOfficer ={...form};

        try {
            const res = await fetch(`http://localhost:5000/doctors/add`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(newOfficer),
                }
            )
            // console.log(res);
            if (res.status === 200) {
                history.push('/patient')
            }
            else {
                console.log(res.message)
            }
        }
        catch(err){
            console.log(err);
        }
    }

    


    return (
        <div style={{ height: "100vh" }}>
          <Navbar />
          <div>
            <div className="row m-5" style={{ maxWidth: "100%" }}>
              <div
                className="col-3 col-md-3 p-4 bg-white "
                style={{ height: "80vh" }}
              >
                
              </div>
              <div
                className="col-9 col-md-9 p-4"
                style={{
                  border: "15px",
                  height: "80vh",
                  backgroundColor: "#92cae8",
                }}
              >
                <Container className="mt-5 p-5 text-white w-50 center">
                <FormGroup >

                    <Row>
                        <Col >
                        <Label for='username' ><h5>User Name</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='username'
                            id='username'
                            placeholder='provide your username'
                            value={form.username}
                            onChange={(e)=> updateForm({username:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                        <Label for='password' ><h5>Password</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='password'
                            name='password'
                            id='password'
                            placeholder='provide your password'
                            value={form.password}
                            onChange={(e)=> updateForm({password:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                        <Label for='name' ><h5>Name</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='name'
                            id='name'
                            placeholder='provide name'
                            value={form.name}
                            onChange={(e)=> updateForm({name:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                        <Label for='number' ><h5>Phone/Mobile Number</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='provide your phone/mobile number'
                            value={form.phoneNumber}
                            onChange={(e)=> updateForm({phoneNumber:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                        <Label for='specialization' ><h5>Specialization</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='specialization'
                            id='specialization'
                            placeholder='provide your specialization'
                            value={form.specialization}
                            onChange={(e)=> updateForm({specialization:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                        <Label for='fee' ><h5>Fee</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='feesPerSession'
                            id='feesPerSession'
                            placeholder='provide your feesPerSession'
                            value={form.feesPerSession}
                            onChange={(e)=> updateForm({feesPerSession:e.target.value})}
                            
                        />
                        </Col>
                        
                    </Row>
                       
                

                    <Button  className="mt-4" block color='primary' onClick={addOfficer}>Add Officer</Button>
                </FormGroup>
            </Container>
              </div>
            </div>
          </div>
        </div>
      );
    };
    export default AddDoc;
