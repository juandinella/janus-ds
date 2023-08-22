const requiredIfOtherPropIsTrue = (otherProp, expectedType) => {
  return (props, propName, componentName) => {
    const currentProp = props[propName]
    const shouldBeRequired = props[otherProp] === true

    if (shouldBeRequired && currentProp === undefined) {
      return new Error(
        `La prop \`${propName}\` es requerida en \`${componentName}\` cuando la prop \`${otherProp}\` es \`true\`.`
      )
    }

    if (currentProp !== undefined && typeof currentProp !== expectedType) {
      return new Error(
        `La prop \`${propName}\` en \`${componentName}\` debe ser de tipo \`${expectedType}\`.`
      )
    }

    return null
  }
}

export { requiredIfOtherPropIsTrue }
