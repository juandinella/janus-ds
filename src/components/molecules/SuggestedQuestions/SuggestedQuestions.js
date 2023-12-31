import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SuggestedQuestions.styles'
import SuggestedQuestion from '../../atoms/SuggestedQuestion'
import Container from '../../layout/Container'

/**
 * SuggestedQuestions
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSuggestedQuestions = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const SuggestedQuestions = ({ id, questions, onQuestionSelected }) => {
  return (
    <StyledSuggestedQuestions id={id} data-testid={id}>
      <Container
        flex
        gap="xxs"
        overflow="auto"
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        whiteSpace="nowrap"
        space="xs, 0"
      >
        {questions.map((question) => (
          <SuggestedQuestion
            key={question.id}
            id={question.id}
            text={question.text}
            onClick={() => {
              if (onQuestionSelected) onQuestionSelected(question.id)
            }}
          />
        ))}
      </Container>
    </StyledSuggestedQuestions>
  )
}

SuggestedQuestions.displayName = 'SuggestedQuestions'

SuggestedQuestions.propTypes = {
  id: PropTypes.string,
  onQuestionSelected: PropTypes.func,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default SuggestedQuestions
