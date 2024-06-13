import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import Home from './home';
// import Aboutus from './Aboutus';
// import Contact from './contact';
// import Admin from './admin'
// import User from './user';
// import Roll from './Roll';
// import Dashboard from './Dashboard';




import reportWebVitals from './reportWebVitals' ;


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App/>
    {/* <Home/>
    <Aboutus/> 
     <Contact/> 
     <Admin/> 
    <User/> 
 <Roll/> */}
 {/* <Dashboard/> */}
   </React.StrictMode>
);



//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  