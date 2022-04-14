import React from 'react';
import './Features.css';

// import Data
import Card from './Card';
import data from './FeaturesApi';

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
         <div className='container'>
          <div className='heading text-center'>
            <h1>Projetos</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
         </div>
      </section>
    </>
  )
}

export default Features;