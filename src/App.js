import Axios from "./Axios";
import Apple from "./components/src/App";
import Slider from "./Slider";

function App() {
  return (
    <div className="w-[90%] m-auto">
    <div className="text-5xl text-center mt-4 border-4 w-[80%] p-4 m-auto font-bold border-cyan-500 br text-cyan-300">
    <marquee  
    scrollamount="0"
    behavior="alternate"
   direction="right" >Crousel Slider!!!!!! Created By Santosh </marquee>
    </div>
   {/*  <Slider/>
    <Axios/> */}

    <Apple/>

     </div>
  );
}

export default App;
