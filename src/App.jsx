import { useState } from "react"


function App() {
  
  const [color,setColor]=useState("blue")
  
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap  justify-center bottom-12 left-0 right-0   ">
          <div className="bg-white rounded-sm p-3 flex flex-wrap m-6 gap-4">
            <button type="button" className="border-black bg-red-500  text-white px-4 py-2 rounded " onClick={()=>setColor("red")}>Red</button>
            <button type="button" className="border-black bg-green-500  text-white px-4 py-2 rounded" onClick={()=>setColor("green")}>Green</button>
            <button type="button" className="border-black bg-yellow-500  text-white px-4 py-2 rounded" onClick={()=>setColor("yellow")}>Yellow</button>
    
            <button type="button" className="border-black bg-purple-500  text-white px-4 py-2 rounded" onClick={()=>setColor("purple")}>Purple</button>
            <button type="button" className="border-black bg-gray-500  text-white px-4 py-2 rounded" onClick={()=>setColor("gray")}>Gray</button>
            <button type="button" className="border-black bg-orange-500  text-white px-4 py-2 rounded" onClick={()=>setColor("orange")}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
