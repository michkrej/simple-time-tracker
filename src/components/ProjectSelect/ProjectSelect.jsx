import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { theme as MuiTheme } from '../../index'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
})

const defaultOptions = [
  createOption('TDDD96'),
  createOption('TDDD60'),
  createOption('TSRT12')
]

const ProjectSelect = () => {
  const [isLoading, setLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [value, setValue] = useState(undefined)

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
