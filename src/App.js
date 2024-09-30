import React from 'react'
import './App.css';

const valArr = [1,2,3,4,5,6,7,8,9,'+',0,'-','*','/','=']
function App() {
  const [text,setText] = React.useState('')
  const [result,setResult] = React.useState(null)

  const onHandleButtonClick = (val) => {
    if(val==='='){
      const res = eval(text)
      setResult(res)
    }
    else setText(prev=>prev+val)
  }
  return (
    <div className="App">
      <div className='cal-container'>
        {valArr.map(val=>{
          return (
            <button className='cal-values' onClick={()=>onHandleButtonClick(val)}>{val}</button>
          )
        })}
        <div className='display-text'>
          <h1>{text}</h1>
          {
            result && <h1>Result : {result}</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
