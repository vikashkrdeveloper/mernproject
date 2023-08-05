import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderComponent from '../partials/Loader';

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/logout', {
      method: "GET",
      headers: {

        'Content-Type': 'application/json'
      },

    }).then((res) => {
      toast.success("Logout sucessfully");
      navigate('/', { replace: true });
      window.location.reload();
    })
  })
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <main></main>
      )}

    </>
  )
}

export default Logout;