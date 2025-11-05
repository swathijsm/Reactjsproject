import { useState } from "react";
import "./MembersList.css"
import Confetti from "react-confetti";
import "./styledbutton.css"
function Styledbutton(prop){
    const {buttonName, listofpeople}=prop;
    const [luckyPerson, setluckyPersion]=useState("");
    const [isloading, setloading]=useState(false);
    const [celebrations,setcelebrations]=useState(false);
    console.log("celebrations....", celebrations)
    console.log("luckyPerson",luckyPerson)
    function pickRandom(){
       setloading(true);
       const  pickRandomindex=Math.floor(Math.random()*listofpeople.length)
       const result=listofpeople[pickRandomindex];
       const message=`${result.name} from ${result.city}`;
       setTimeout(function(){
       setluckyPersion(message);
       setloading(false);
       setcelebrations(true);
       },1000);
    }
    return(<div className="mebers-container">
        {celebrations && <Confetti/>}
        <h1>{luckyPerson}</h1>
        {/*Rendering if one condition is true*/}
        {isloading && <h4>Loading....</h4>}
        <button className="styledButton" onClick={pickRandom}>
        {buttonName}
        </button>
       
        </div>
        )
}
export default Styledbutton;