import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [data, setData] = useState([])

  
  const getData = async() =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data)
    setData(data)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1 className='text-center text-xl'>KodeCamp Task 4</h1>
      <div className='card-container'>
        {data.map(person => (
          <div key={person.id} className="bg-slate-100 container">
            <h1 className='text-2xl font-bold'>{person.name}</h1>
            <p>{person.company.catchPhrase}</p>
            <div className='mt-4'>
              <h3 className='text-xl font-bold'>General Info</h3>
              <p className='text-sm'><span className='font-bold'>Username</span>: {person.username}</p>
              <p className='text-sm'><span className='font-bold'>Address</span>: {`${person.address.street} ${person.address.suite} ${person.address.city}`}</p>
              <p className='text-sm'><span className='font-bold'>Email</span>: <small>{person.email}</small></p>
              <p className='text-sm'><span className='font-bold'>Phone</span>: {person.phone}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
    
  );
}

export default App;
