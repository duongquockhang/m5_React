// import logo from './logo.svg';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';
import AddComponent2  from "./components/AddComponent2";
import React from "react";
import Alert from "./components/Alert"
import Calculator from "./components/Calculator"
import StudentInfoComponent from './components/StudenInfoComponent'

const studentInfo =[
  {
id:1,
name: 'Student',
age: 18,
address: '123 Main St'
}, {
  id:2,
  name: 'Student',
  age: 18,
  address: '123 Main St'
}, {
  id:2,
  name: 'Student',
  age: 18,
  address: '123 Main St'
}
]

function App() {
    return (
        <React.Fragment>
            <div className="App">
                <Welcome name="Duong"/>
            </div>
            <div><h3>Class</h3>
                <AddComponent firstNumber={1} lastNumber={2} />
            </div>
            <div>
                <h3>function</h3>
                <AddComponent2 firstNumber={2} secondNumber={2} />
            </div>
              <div>
                  <h3>Alert</h3>
                  <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
              </div>
            <div>
                <h3>Alert</h3>
                <Calculator />
            </div>
            <div>
         <StudentInfoComponent student ={studentInfo}/>
  </div>
        </React.Fragment>
    );
}


export default App;