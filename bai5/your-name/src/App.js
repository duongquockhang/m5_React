// import { Component } from "react";

// class App extends Component {
//   constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0
  //   };
  // }

  // increase = () => {
  //   this.setState({ number: this.state.number + 1 });
  // };
  // decrease = () => {
  //   this.setState({ number: this.state.number - 1 });
  // };

  // render() {
  //   return (
  //     <div style={{ textAlign: "center", padding: 30 }}>
  //       <button onClick={this.decrease}>Decrease</button>
  //       <span style={{ padding: 10 }}>{this.state.number}</span>
  //       <button onClick={this.increase}>Increase</button>
  //     </div>
  //   );
//   super(props);
//     this.state = {
//       color: 'black'
//     };
//   }
 
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: 'pink' });
//     }, 50);
//   }
 
//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             backgroundColor: this.state.color,
//             paddingTop: 20,
//             width: 400,
//             height: 80,
//             margin: 'auto'
//           }}
//         />
//       </div>
//     );
//   }
// }
// import './App.css';
// import {useState} from 'react'
// // import CheckBox from "./component/checkBox";
// // import TodoList from "./component/TodoList";
// // import UpdateDOM from "./component/UpdateDOM";
// import Content from "./Components/Content";
// // import FakeChatApp from "./component/fakeChatApp";
// import React from "react";

// //fake comment

// function App() {
//     const [show,setShow] = useState(true)

//     const handleClick = () =>{
//         setShow(!show)
//     }

//  const emitComment = (id) =>{
//         setInterval(()=>{
//             window.dispatchEvent(
//                 new CustomEvent(`lesson-${id}`,{
//                     detail:`comment at ${id}`
//                 })
//             )
//         },2000)
//  };
//     emitComment(1)
//     emitComment(2)
//     emitComment(3)
//     return (
//         <React.Fragment>
//             {/* <CheckBox /> */}
//             {/* <TodoList /> */}
//             <button onClick={() => {
//                 handleClick()
//             }}>Toggle</button>
//             {/* {show && (<UpdateDOM/>)} */}
//             <Content />
//             {/* <FakeChatApp /> */}
//         </React.Fragment>
//     )
// }

// export default App;
import "./App.css";
import React, {useState} from "react";
function App() {
  let content =
    "One Piece (ワンピース Wan Pīsu?), từng được xuất bản tại Việt Nam dưới tên gọi Đảo Hải Tặc là bộ manga dành cho lứa tuổi thiếu niên của tác giả Oda Eiichiro, được đăng định kì trên tạp chí Weekly Shōnen Jump, ra mắt lần đầu trên ấn bản số 34 vào ngày 19 tháng 7 năm 1997. Bản tankōbon của truyện do Shueisha phát hành với tập đầu tiên vào ngày 24 tháng 12 năm 1997. One Piece kể về cuộc hành trình của Monkey D. Luffy - thuyền trưởng của băng hải tặc Mũ Rơm và các đồng đội của cậu. Luffy tìm kiếm vùng biển bí ẩn nơi cất giữ kho báu lớn nhất thế giới One Piece, với mục tiêu trở thành Tân Vua Hải Tặc.  ";
  let [contents, setContent] = useState(true);
  function handleLogin() {
    setContent(true);
  }
  function handleLogout() {
    setContent(false);

    
  }
  return (
    <>
      <p style={{textAlign: "center"}}>{contents ? content : ""}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;

