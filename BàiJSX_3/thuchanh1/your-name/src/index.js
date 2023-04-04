import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]
// // root.render(
// //   <h3>DD:{navigator.userAgent}</h3>
// // );
// root.render(
// <table>
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>

//    {students.map(student => (
//   <tr>
//     <td>{student.company}</td>
//     <td>{student.contact}</td>
//     <td>{student.country}</td>
//   </tr>
// ))}
 
// </table>

// )
root.render(
<div className="container">
  <div className="card">
    <div className="card--header" />
    <img
      className="avatar"
      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="avatar"
    />
    <div className="card--body">
      <div>
        <p className="text-header">Ruma Khan</p>
        <p className="text-sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
    </div>
  </div>
</div>
)

// {students.map(student => (
//   <tr>
//     <td>{student.company}</td>
//     <td>{student.contact}</td>
//     <td>{student.country}</td>
//   </tr>
// ))}


// const name = "Your name";
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry"
// ];

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);
// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };
// setInterval(tick, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
