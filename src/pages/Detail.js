
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
      .then(response => response.json())
      .then(item => setItem(item))
  }, [id])


  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{item.companyName}</h1>
      <p>Contact Name: {item.contactName}</p>
      <p>Phone: {item.phone}</p>
      <p>Address: {item.address}</p>
    </div>
  );
};

export default Detail;