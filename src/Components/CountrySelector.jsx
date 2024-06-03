import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './CountrySelector.css'

function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        console.log("valueof selection" + value)
    }

    return <Select options={options} value={options.find(option => option.value === value)} onChange={changeHandler} />;
}

export default CountrySelector