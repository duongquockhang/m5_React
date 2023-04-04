import { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
 const handleClick = () => {
    const newValue = count + 1;
    setCount(newValue);
  };
  const handleClick1 = () => {
    const newValue = count -1;
    setCount(newValue);
  };
  return (
    <div>
      Giá trị {count}
      <div>
        <button onClick={handleClick}>Tăng</button>
      </div>
      <div>
        <button onClick={handleClick1}>Gỉam</button>
      </div>
    </div>
  );
}
export default Counter;
