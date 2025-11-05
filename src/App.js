import './App.css';
import Section from './components/Section';
import Aboutus from './components/Aboutus';
import Header from './components/Header';
import MembersList from './components/Memberslist';
const people = [
  { name: "Naga Lakshmi", city: "Chennai" },
  { name: "kota srikanth reddy", city: "Chennai" },
  { name: "Manikanta Kolusu", city: "Texas" },
  { name: "Someswararao M", city: "Anakapalle" },
  { name: "Jaya Surya Mallela", city: "Anantapur" },
  { name: "Sripathi Mamillapalli", city: "Tadikonda, guntur" },
  { name: "gajula venkateswaramma", city: "Bengaluru" },
  { name: "srinivasa batta", city: "Toronto" },
  { name: "Vamsi Kuncham", city: "Visakhapatnam" },
  { name: "praveen achari", city: "Kurnool" },
  { name: "mallikarjun thagili", city: "Telangana" },
  { name: "Maruthi Rao", city: "hyderabad" },
  { name: "Siva  Kumar", city: "Bengaluru" },
  { name: "Satyasai  Kandivalasa", city: "Kakinada" },
  { name: "RAMESHBABU K", city: "Palakollu" },
  { name: "Kothakandriga Surya", city: "tirupati" },
  { name: "Parvathina  Venkata sri Satya sai", city: "Yeditha" },
  { name: "John Abhishek", city: "Hyderabad" },
  { name: "SAI KIRAN KASUKURTHI", city: "ongole" },
  { name: "Durga Prasad  Kasa", city: "Palakollu" },
  { name: "punnarao kancherla", city: "Vijayawada" },
  { name: "Rajasekhar T", city: "Tirupati" },
  { name: "Karthik  Koppera", city: "Jagtial" },
  { name: "Ratnavalli D", city: "Rajamahendravaram" },
  { name: "K sai Charan  Charan", city: "Bengaluru" },
  { name: "Sonia Dondapati", city: "Hyderabad" },
  { name: "Naveen kumar  Mannam", city: "Hyderabad" },
  { name: "Kavuru  Prabhakar Rao", city: "Akividu" },
  { name: "Satyasai Pamarthi", city: "Kakinada, AP" },
  { name: "Mani Kanta", city: "Mudapaka" },
  { name: "Raju Thrilok", city: "Hyderabad" },
  { name: "UMA MAHESWARI RAYALA", city: "VIJAYAWADA" },
  { name: "Aravind Maricherla", city: "Parvipuram" },
  { name: "Srujana Velpula", city: "California" },
];


function App() {
  return (<div>
         <Header/>
         <div className='center-screen'>
          <Section title="About us">
          <Aboutus/>
          </Section>
          <Section title="Members">
          <MembersList  list={people}/>
          </Section>
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
