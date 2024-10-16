
import './App.css'
import Count from './counter'


import User from './user'
// event handler
function App() {
  const handle = () =>{
    alert("i am fine and you")
  }
  // if perameter add function
  const addfive = (num) =>{
    alert(num +5)
  }

  return (
    <>
    <h1>hi how are you</h1>
    <Count/>
    <div className='contain'>
    
    <button className='btn2' onClick={handle}>click it</button>
    <button className='btn2' onClick={()=>{alert("button 2 clicked")}}>click 2</button>
     {/* diffrents style call with perameter */}
    <button className='btn2' onClick={()=>{addfive(4)}}>add five</button>
    </div>
    <User/>
    
   
    
      
     
    </>
  )
}

export default App
