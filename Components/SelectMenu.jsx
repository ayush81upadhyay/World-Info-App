import React from 'react'

const SelectMenu = ({SetQueryRegion}) => {
  return (
    <select className='filter-by-region' onChange={event => SetQueryRegion(event.target.value)}>
        <option hidden="" value="">Filter by region</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}

export default SelectMenu;