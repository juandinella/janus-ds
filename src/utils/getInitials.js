const getInitials = (name) => {
  const splitName = name.split(' ')
  if (splitName.length === 1) return splitName[0][0]
  return splitName[0][0] + splitName[1][0]
}

export default getInitials
