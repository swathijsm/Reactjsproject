import "./member.css"
export function Members(prop){
    //object destructuring
    //const {city="Banglor", name="valli"} = prop;
    //if u want to change the property(or key) name
    //const {city:town="Bangloor", name="Valli"}=prop;
    //value is an object
    const memberName=prop.name;
    const memberCity=prop.city;
    return (
    <div className="memberCard">
        <h1>{memberName}</h1>
        <p className="member-sub-heading">{memberCity}</p>
    </div>);
}