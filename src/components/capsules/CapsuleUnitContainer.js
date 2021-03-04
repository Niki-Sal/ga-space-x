import { useState, useEffect } from 'react';
import axios from 'axios'

import Capsule from './Capsule'; 


const CapsuleUnitContainer = () => {
    const [capsules, setCapsules] = useState([])

    useEffect(() => {
        const fetchCapsules = async () => {
          const response = await axios.get('https://api.spacexdata.com/v4/capsules');
          //for connecting back end and frontend // bringing in our API end point- the one we mage in backend
        //const response = await axios.get('https://localhoset:8000/v1/');
          const data = response.data; // array
          // destructuring
         
          setCapsules(data);

          // capsules is an array
          
    
        }
        fetchCapsules();
    }, [])

    console.log(capsules)

    const capsuleList = capsules.map((capsule, index) => {
        return <Capsule capsule={capsule} key={index} />
    });

    return (
        <div>
        {capsuleList}
        </div>
    )
}

export default CapsuleUnitContainer;