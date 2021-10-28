import {useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
// axios.defaults.headers['ContentType'] = 'application/json';

function App() {
  const [name,setName] = useState('')
  const change = (e) => {
    setName(e.target.value)
  }
  const myClick = async () =>{
    console.log(name)
    let res = await axios.post('http://127.0.0.1:8000/write/',{name:name})
    console.log(res)
  }
  const getData = async () =>{
    let res = await axios.get('http://127.0.0.1:8000/read/')
    console.log(res)
  }
  const getOne = async () => {
    let res = await axios.get('http://127.0.0.1:8000/read-one/',{params:{name:'volodya'}})
    console.log(res)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <input onChange={(e)=>change(e)} />
      <button onClick={()=>myClick()}>点击</button>
      <button onClick={() => {getOne()}}>获取一个</button>
    </div>
  );
}

export default App;
