import React from 'react'
import experience from './data/experience.json'
const Experience = () => {
  return (
    <div>
      <div className="container ex" id='experience'>
        <h1>Education</h1>
      
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className='ex-items text-center my-5'
                data-aos="zoom-in"
                data-aos-duration="1000" >
                <div className="left">
                  <img src={`/images/${data.imageSrc}`} width="100px" style={{ borderRadius: '100px' }} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4><span style={{ color: 'yellowgreen' }}>{data.startDate}{" "}{data.endDate}</span>{" "}<span style={{ color: 'yellow' }}>{data.location}</span></h4>
                  <h3 style={{ color: 'yellow' }}>{data.experiences[0]}</h3>
                  <h3 style={{ color: 'yellow' }}>{data.experiences[1]}</h3>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Experience;


