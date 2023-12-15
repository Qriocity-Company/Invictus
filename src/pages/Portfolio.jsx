import React ,{useEffect} from 'react'

const Portfolio = () => {
  
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-20'>
        <h1>Portfolio</h1>
    </div>
  )
}

export default Portfolio