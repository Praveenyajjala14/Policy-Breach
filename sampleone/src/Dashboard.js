// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import small_logo from './images/small_logo.png';
// import Button from 'react-bootstrap/esm/Button';
// import { Row } from 'react-bootstrap';
// import {Col} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import ajay from './images/ajay.jpg';
// import  { useState } from "react";
// import { Form } from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';



// function Dashboard(){
//     const[show,setShow]=useState(false)
//     const showName=()=>{
//       if (show===true){
//         setShow(false)
//       }
//       else
//       {
//         setShow(true)
//       }
//     }
    
//     const [inputValue, setInputValue] = React.useState('');
  
//     function handleInputChange(event) {
//       setInputValue(event.target.value);
//     }
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       console.log(`Submitted value: ${inputValue}`);
//     }
  
  
    
//     return(
//         <div>
//             <Container fluid>
//                 <div style={{backgroundColor:'#f8f9fa'}}>
//                     <img src={small_logo} alt='thub logo'></img>
//                     <div style={{float:'right',marginTop:'20px',marginRight:'30px'}}>
//                         <Button variant="dark" ><Link to="/home" style={{textDecoration:"none",color:"white"}}>Logout</Link></Button>
//                     </div>
//                 </div>
//             </Container>
//             <div>
//                 <h2 style={{textAlign:'center',padding:'20px'}}>Student Details</h2>

                
//             </div>
//             <Container>
//             <Row>
//                 <Col sm={4}>
//                 <Card style={{ width: "65%", height: "100%" }}>
//                     <Card.Img variant="top" src={ajay} alt="Card Image" />
//                     <Card.Body>
//                 <Card.Title style={{textAlign:'center'}}>REMARK</Card.Title>
//             <Card.Text>
//                 <div>
//                 <Form.Check
//                     type="checkbox"
//                     label="Beard"
//                 />
//                 <Form.Check
//                     type="checkbox"
//                     label="Shoe"
//                 />
//                 </div>
//                 <div style={{textAlign:'center'}}><Button variant="primary">Submit</Button></div>
//             </Card.Text>
//         </Card.Body>
//     </Card>
//                 </Col>
//                 <Col sm={8}>
//                 <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicInput">
          
//           <Form.Control type="text" placeholder="Enter text" style={{marginTop:"100px",width:"400px"}} value={inputValue} onChange={handleInputChange} />
//         </Form.Group>
        
//         <Button variant="primary" type="submit" bg="dark" style={{marginTop:"20px",marginLeft:"120px"}} onClick={showName}>
//           {
//             show && (
//               <div>
      
//                 <Table responsive="xs,sm,lg" style={{marginTop:"0px", backgroundColor:'gray'}}>
//                   <thead>
//                      <tr>
            
//                           <th>Name</th>
//                           <th>Roll No</th>
//                           <th>Technology</th>
//                           <th>AN/FN</th>
//                           <th>Mentor</th>
//                           <th>Status</th>


//                       </tr>
//                    </thead>
//         <tbody>
//           <tr>
            
//             <td>Ajay</td>
//             <td>20MH1A0566</td>
//             <td>FSD</td>
//             <td>Drive Ready Plus</td>
//             <td>NDP, SIM</td>
//             <td>0</td>


//           </tr>
        
          
//         </tbody>
//       </Table>
     
      
//     </div>
//             )
//           }
//           Submit
//         </Button>
//       </Form>
    
//                 </Col>
//             </Row>
//             </Container>
//         </div>
//     );
// }
// export default Dashboard;

import React from 'react';
import Container from 'react-bootstrap/Container';
import small_logo from './images/small_logo.png';
import Button from 'react-bootstrap/esm/Button';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ajay from './images/ajay.jpg';
import  { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Dashboard(){
  // const [datas, setDatas] = useState()
  const [data,setData]=useState([])
  const [rollno,setRollno]=useState('')
  const [image,setImage]=useState('')
  const [count,setCount]=useState(0);
    const[show,setShow]=useState(false)
    const showName=()=>{
      if (show==true){
        setShow(false)
      }
      else
      {
        setShow(true)
      }
    }
    const [inputValue, setInputValue] = React.useState('');
    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(`Submitted value: ${inputValue}`);
      setRollno(inputValue)
    }
    useEffect(()=>{
      axios.get("http://localhost:4000/getData").then((res)=>{
        setData(res.data)
        
      })
    },[])
    // const [value,setvalue]=useState({
    //   _id:"",
    //   name:"",
    //   technology:"",
    //   count:""
    // });
    const [data1,setData1]=useState();
    const search=()=>{
      let c=data1.toLowerCase();
      for(let i=0;i<data.length;i++)
      {
        let c2=data[i]._id.toLowerCase();
        if(c==c2)
        {
          document.getElementById('t1').innerHTML=data[i]._id;
          document.getElementById('t2').innerHTML=data[i].name;
          document.getElementById('t3').innerHTML=data[i].technology;
          document.getElementById('t4').innerHTML=data[i].count;
          setImage(data[i].image)
          break;
          
        }
       
      }
     
      // alert("data not found")
    }
    return(
      
        <div>
            <Container fluid>
                <div style={{backgroundColor:'#F8F9FA'}}>
                    <img src={small_logo} alt='thub logo'></img>
                    <div style={{float:'right',marginTop:'20px',marginRight:'30px',}}>
                        <Button variant="dark" style={{textDecoration:'none'}} ><Link to="/home"> Logout</Link></Button>
                    </div>
                </div>
        </Container>
            <div>
                <h2 style={{textAlign:'center',padding:'20px'}}>Student Details</h2>
            </div>
            <Container>
            <Row>
                <Col sm={4}>
                <Card style={{ width: "65%", height: "100%" }}>
                    {image=='' ? (
                      <>
                    <Card.Img variant="top" src={'nophoto.jp'} alt="Card Image" />
                    </>)
                    : (<Card.Img variant="top" src={image} alt="Card Image" />)
                    }
                    <Card.Body>
                <Card.Title style={{textAlign:'center'}}>REMARK</Card.Title>
            <Card.Text>
              <Container>
                <div>
                <Form.Check
                    type="checkbox"
                    label="Beard or Shoe"
                />
                {/* <Form.Check
                    type="checkbox"
                    label="Shoe"
                /> */}
                </div>
                </Container>
                <div style={{textAlign:'center'}}><Button variant="primary" onClick={()=>setCount(count +1)}>Submit</Button></div>
            </Card.Text>
        </Card.Body>
    </Card>
                </Col>
                <Col sm={8}>
          <div>
              <h5>Enter Rollnumber</h5>
              <div>
                {/* <p className='Username'><b></b></p> */}
                {/* <input type="text" placeholder="user name" className="name"/> */}
                Username : <input type='text' placeholder='RollNumber' onChange={(e)=>setData1(e.target.value)}></input><button onClick={search} >submit</button>
              </div>
              <div>
                <Table striped hover responsive bordered> 
                  <thead>
                    <tr>
                      <th>RollNumber</th>
                      <th>Name</th>
                      <th>Technology</th>
                      <th>count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      <tr>
                        <td id='t1'></td>
                        <td id='t2'></td>
                        <td id='t3'></td>
                        <td id='t4'></td>
                      </tr>
                    }
                  </tbody>
                </Table>
              </div>
         </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
}
export default Dashboard;
