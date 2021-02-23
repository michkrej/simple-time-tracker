/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { theme as MuiTheme } from '../../index'
import { createOption } from './NewActivity'

const ProjectSelect = ({ isLoading, setLoading, options, setOptions, value, setFieldValue }) => {
  const handleCreate = (inputValue) => {
    setLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      setLoading(false)
      setOptions([...options, newOption])
      setFieldValue('project', newOption)
    }, 500)
  }

  return (
    <div style={{ minWidth: '10rem', padding: MuiTheme.spacing(1) }}>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={value => setFieldValue('project', value)}
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
