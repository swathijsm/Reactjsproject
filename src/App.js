import logo from './logo.svg';
import './App.css';
import { Members } from './Members';
import Aboutus from './Aboutus';
const people=[{name:"1",city:"a" },
  {name:"2",city:"b" },
  {name:"3",city:"c"},
  {name:"4",city:"d" },
  {name:"5",city:"e" },
  {name:"6",city:"f" },
  {name:"7",city:"g" },
  {name:"8",city:"h" },
  {name:"9",city:"i" },
  {name:"10",city:"j" },
]

function App() {
  return (<div>
          <h1 style={{backgroundColor:"blue", textAlign:"center"}}>
            First batch is best batch
            </h1>
          <Aboutus/>
          <div class="members-container">
            {people.map(function(members){
              return <Members name={members.name} city={members.city}/>;
            })}
             {/*<Members name="charan" city="hyderabad"/>
             <Members name="Maruthi" city="Guntur"/>
            <Members name="valli" city="Bangloor"/>*/}
            </div>
          
  </div>);

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
