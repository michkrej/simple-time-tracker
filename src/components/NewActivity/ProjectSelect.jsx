/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { theme as MuiTheme } from '../../index'
import { createOption } from './NewActivity'

const ProjectSelect = ({ isLoading, setLoading, options, setOptions, value, setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleCreate = (inputValue) => {
    setLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      setLoading(false)
      setOptions([...options, newOption])
      setValue(newOption)
    }, 500)
  }

  console.log(isLoading, options, value)

  return (
    <div style={{ minWidth: '10rem' }}>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={options}
        value={value}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: MuiTheme.palette.primary.main,
            primary25: MuiTheme.palette.primary[50],
            primary50: MuiTheme.palette.primary[200],
            primary75: MuiTheme.palette.primary[300]
          }
        })}
      />
    </div>
  )
}

export default ProjectSelect
