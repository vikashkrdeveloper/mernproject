import React, { useEffect, useState } from 'react'

function Allproducts() {
  const [getdata, setdata] = useState([]);
  const fetchapi = async () => {
    try {
      const apigetdata = await fetch('/dashboard/all/products/show', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'

        },
      })

      const data = await apigetdata.json();
      setdata(data)

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchapi();
  }, [])

  return (
    <>
      <main>
        {getdata.map((getdata, index) => (
          <li key={index}>{getdata.producttitle}</li>

        ))}
        {getdata.map((getdata, index) => (
          <img key={index} src={getdata.productimage} alt="Loading.." />

        ))}
        {getdata.map((getdata, index) => (
          <p key={index} >{getdata.discription} </p>

        ))}
        {getdata.map((getdata, index) => (
          <p key={index} >{getdata.price} </p>

        ))}

      </main>


    </>
  )
}

export default Allproducts
