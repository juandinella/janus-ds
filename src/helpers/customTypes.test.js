import { requiredIfOtherPropIsTrue } from './customTypes'

describe('requiredIfOtherPropIsTrue', () => {
  const otherProp = 'iconButton'
  const propName = 'miProp'
  const componentName = 'Button'
  const expectedType = 'string'

  const validator = requiredIfOtherPropIsTrue(otherProp, expectedType)

  it('should return an error if otherProp is true and propName is undefined', () => {
    const props = {
      iconButton: true,
      miProp: undefined,
    }

    const error = validator(props, propName, componentName)
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe(
      `La prop \`${propName}\` es requerida en \`${componentName}\` cuando la prop \`${otherProp}\` es \`true\`.`
    )
  })

  it('should return an error if otherProp is true and propName has a wrong type', () => {
    const props = {
      iconButton: true,
      miProp: 123,
    }

    const error = validator(props, propName, componentName)
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe(
      `La prop \`${propName}\` en \`${componentName}\` debe ser de tipo \`${expectedType}\`.`
    )
  })

  it('should return null if otherProp is true and propName has a correct type', () => {
    const props = {
      iconButton: true,
      miProp: 'correct value',
    }

    const error = validator(props, propName, componentName)
    expect(error).toBeNull()
  })

  it('should return null if otherProp is false', () => {
    const props = {
      iconButton: false,
      miProp: undefined,
    }

    const error = validator(props, propName, componentName)
    expect(error).toBeNull()
  })
})
