import React from 'react'

const Country = (props) => {
  return (
    <div className='bg-white px-12 h-screen'
    style={props.clicked ? {backgroundColor:"#202d36", color:"white"} : {backgroundColor:"#fafafa"}}>
      <a className='inline-block border-solid border-2 px-10 rounded-md my-6 py-1 cursor-pointer' href={props.link}
      style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}>Back</a>
      <div className='flex justify-between gap-36 my-12'>
        <img src={props.flag} alt="flag-country" className='p-1 w-2/5'/>
        <div className='flex-1 flex gap-48'>
            <div>
                <h3 className='font-bold text-2xl mb-3'>{props.countryName}</h3>
                <span className='block mb-2'><span className='font-bold text-sm'>Native Name: </span>{props.native}</span>
                <span className='block mb-2'><span className='font-bold text-sm'>Population: </span>{props.population}</span>
                <span className='block mb-2'><span className='font-bold text-sm'>Region: </span>{props.region}</span>
                <span className='block mb-2'><span className='font-bold text-sm'>Sub Region: </span>{props.subRegion}</span>
                <span className='block mb-2'><span className='font-bold text-sm'>Capital: </span>{props.capital}</span>
                <p className='font-bold my-20 absolute'>Border Countries: {props.borders && props.borders.map((item) => (<span className='font-normal border-solid border-2 rounded-md mr-2 p-1'>{item}</span>))}</p>
            </div>
            <div>
                <span className='block mt-12 mb-2'><span className='font-bold text-sm'>Top Level Domain:</span> {props.topLevel}</span>
                <span className='block mb-2'><span className='font-bold text-sm'>Currences: </span>{props.currences}</span>
                <span className='mb-2'><span className='font-bold text-sm'>Languages: {props.languages.map((item) => <span className='font-normal'>{item.name+", "}</span>)}</span></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Country
