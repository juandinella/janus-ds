const getInitials = (fullName = '') => {
  if (!fullName) return ''

  const names = fullName.split(' ')
  let initials = ''

  if (names.length > 1) {
    initials = `${names[0][0]}${names[1][0]}`
  } else {
    initials = names[0].slice(0, 2)
  }

  return initials.toUpperCase()
}

export default getInitials
