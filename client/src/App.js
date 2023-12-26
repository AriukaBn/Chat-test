import React,{useEffect, useState} from 'react';
import {MailOutlined, KeyOutlined} from "@ant-design/icons";

const App = () =>{

const [Users, setUsers] = useState([]);
const Ap = async () => {
    const i = await fetch("http://localhost:3000/users");
    const a = await i.json();
    setUsers(a);
    console.log(a);
  };
useEffect(() =>{
    Ap()
},[]);


/*const [input, setInput] = useState();
const onInputChange = (event) => {
    const text = (event.target.value)
    setInput(text);
};
const [inputPass, setInputPass] = useState();
const onInputPassChange = (event) => {
    const text = (event.target.value)
    setInputPass(text);
};*/

const [Checker, setChecker] = useState(false);

return (
    <div>
        <section>
          <div class="from-box">
            <div class="from-value">
              <form action="">
                <h2>Login</h2>
                <div class="inputbox">
                  <MailOutlined />
                  <input type="email" required /*value={input} onChange={onInputChange}*//>
                  <label for="">Email</label>
                </div>
                <div class="inputbox">
                  <KeyOutlined />
                  <input type="password" required /*value={inputPass} onChange={onInputPassChange}*//>
                  <label for="">Password</label>
                </div>
                <div class="Forget">
                  <label for=""><input type="checkbox" />Remember Me</label>
                  <a href="#">Forget Password</a>
                </div>
                <button className='Login_Btn'>Login</button>
                <div class="register">
                  <p>Don't have account <a href="#">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
)}
export default App