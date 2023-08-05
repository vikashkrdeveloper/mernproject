import React,{useEffect,useState} from 'react'
import './About.css'
import LoaderComponent from '../partials/Loader';

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Simulating content loading time
      setTimeout(() => {
          setIsLoading(false);
      }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <main className='main-about-container'>
          <h1>About Page</h1>
        </main>
      )}
    </>
  )
}

export default About
