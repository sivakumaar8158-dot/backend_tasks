import axios from "axios"
import { useEffect, useState } from "react";

const App = () => {

const movieData = {

  
  movieName: "",
  ProducerName: "",
  DirectorName: "",
  actorName: "",
  actressName: "",
  MovieType: "",
  movieLanguage: "",
  RelasingDate: "",
 

  }

  const [data, setData] = useState(movieData)
  const [myDatas, setMyDatas] = useState([])

  useEffect(() => {

    setData({ ...data, 
       movieName: "Parasakthi",
       ProducerName: "Aakash Baskaran",
       DirectorName: "Sudha Kongara",
       actorName: "Sivakarthikeyan",
       actressName: "Srileela",
       MovieType: "Action,love",
       movieLanguage: "tamil",
       RelasingDate: "jan 10 2026",
    })


  }, [])



  const handleclick = async () => {



    try {

      const fetchdata = await axios.get("http://localhost:5000/api/movieData/get");

      console.log(fetchdata);
      
      setMyDatas(fetchdata.data.myDatas)


    } catch (error) {

      console.log('something error', error);


    }



  }

  return (
    <>

      <div className=" text-2xl text-center items-center">
        <h1 className="items-center p-5 text-center">Form Handling using API through Backend</h1>
        <button className="p-2 bg-amber-400 text-black items-center text-center mt-3" onClick={handleclick} >Click to Check API Status</button>
      </div>
      <div>
        {
          myDatas.map((e)=>(

            <div className="text-center items-center mt-5" key={e._id}>

             <h1>{e.movieName}</h1>
             <p>{e.ProducerName}</p>
             <p>{e.DirectorName}</p>
             <p>{e.actorName}</p>
             <p>{e.actressName}</p>
             <p>{e.MovieType}</p>
             <p>{e.movieLanguage}</p>
             <p>{e.RelasingDate}</p>

           </div>


          ))
        }
       </div>

    </>
  )
}

export default App