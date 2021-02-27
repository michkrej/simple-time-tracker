/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { theme as MuiTheme } from '../../index'

const ProjectSelect = ({ isLoading, options, value, setFieldValue, handleCreate }) => {
  const [input, setInput] = useState('')

  const width = value ? `${value.label.length * 8 + 100}px` : '12rem'
  return (
    <div style={{ width: width, padding: MuiTheme.spacing(1) }}>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onInputChange={value => setInput(value)}
        onChange={value => setFieldValue('project', value)}
        onCreateOption={handleCreate}
        formatCreateLabel={() => `+ Add new project: ${input}`}
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
