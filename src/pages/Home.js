import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/suppliers')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])


    return (
        <div>
          <h1>Supplier List Data</h1>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  Company Name: {item.companyName} // Contact Name: {item.contactName}
                </Link>
                <hr/>
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default Home;