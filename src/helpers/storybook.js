import React, { useState } from 'react'

export const getTemplate = (Component) =>
  function TemplateComponent(args) {
    return <Component {...args} />
  }

export const getListTemplate = (Component) => {
  return ({ items, ...args }) =>
    items.map((item, index) => <Component key={index} {...args} {...item} />)
}

export const getOptionsArgTypes = (options, name) => ({
  [name]: {
    control: {
      type: 'select',
      labels: options.reduce(
        (acc, option) => ({ ...acc, [option]: option }),
        {}
      ),
    },
    options,
  },
})

export const getTemplateWithValue = (Component) =>
  function TemplateComponent(args) {
    const [value, setValue] = useState(args.value ?? '')
    return (
      <Component
        {...args}
        onChange={(e) => {
          args.onChange(e)
          setValue(e.target.value)
        }}
        value={value}
      />
    )
  }
