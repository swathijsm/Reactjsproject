import "./MembersList.css"
import { Members } from "./Members";
import Styledbutton from "./styledbutton";
function MembersList(prop){
    const {list}=prop;
    console.log("the list of people",list)
    return (
    <>
    <div class="members-container">
            {list.map(function(members){
              return <Members name={members.name} city={members.city}/>;
            })}
             {/*<Members name="charan" city="hyderabad"/>
             <Members name="Maruthi" city="Guntur"/>
            <Members name="valli" city="Bangloor"/>*/}
            </div>
            <div className="flex-center">
            <Styledbutton  buttonName="Luckydraw" listofpeople={list} />
            </div>
    </>
)}
export default MembersList;