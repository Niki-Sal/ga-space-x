//imports
import axios from 'axios';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Company from './components/company/Company';
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer';




function App() {
  // state
  const [company, setCompany] = useState({});

  // useEffect
  useEffect(() => {
    // async 
    const fetchCompany = async () => {
      // axios
      const response = await axios.get('https://api.spacexdata.com/v4/company');
      const data = response.data;
      
      //OR fetch
      // const response = await fetch('https://api.spacexdata.com/v4/company');
      // const data = await response.json();
      // console.log(data);

      //OR no async and axios
      // axios.get('https://api.spacexdata.com/v4/company')
      // .then(response => {
      //     const data = response.data;
      //     console.log(data);
      // });

      //OR no async and fetch
      // fetch('https://api.spacexdata.com/v4/company')
      // .then(response => {
      //     return response.json()
      // })
      // .then(data => {
      //     console.log(data);
      // });

      // Destructuring
      const { ceo, employees, name, valuation, vehicles } = data;
      setCompany({
        student: 'Nikki Salehi',
        ceo: ceo,
        employees: employees,
        name: name,
        valuation,
        vehicles
      });
    }

    // run fetch/axios
    fetchCompany();
  //close useEffect
  }, [])
  console.log(company)
  return (
    <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/capsules">Capsules</Link>
      </nav>
      <h1>GA Space X</h1>
      <Route exact path="/" render={() => <Company company={company}/>} />
      <Route path="/capsules" component={CapsuleUnitContainer} />
    </div>
  </Router>
  );
}
export default App;
