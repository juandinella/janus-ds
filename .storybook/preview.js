import React from 'react'
import GlobalProvider from '../src/providers/GlobalProvider'

const getStyles = ({ __sb } = {}) => ({
  display: 'flex',
  flexDirection: __sb?.fd || 'column',
  maxHeight: __sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: __sb?.h || '100%',
  gap: '10px 30px',
  position: 'relative',
})

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story, { parameters }) => (
    <GlobalProvider>
      <div style={getStyles(parameters)}>
        {Story()}
      </div>
    </GlobalProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: true,
    panelPosition: "bottom",
  },
}
