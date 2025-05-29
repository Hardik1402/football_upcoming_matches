import { useState ,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/card'
import { apicall } from './api/apicall'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apicall();
      setData(response.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className=" min-h-screen">
      <h1 className="text-3xl max-w-sm mx-auto rounded-2xl  bg-white font-bold text-center p-4">Upcoming Matches</h1>
      {data ? <Card data={data} /> : <p className="text-center">Loading...</p>}
    </div>
    </>
  )
}

export default App
