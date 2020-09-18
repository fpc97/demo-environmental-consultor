export const objectHasValues = obj => {
  if (!(typeof obj === 'object' && obj !== null)) return false
  return Object.values(obj).some(a => Boolean(a))
}

export const objectDeepSearch = (obj, navigation) => {
  return navigation.reduce((a, b) => {
    if (typeof a !== 'object') {
      return obj[a] && obj[a][b] ? obj[a][b] : false
    } else {
      return a[b] ? a[b] : false
    }
  })
}

export const parseNumber = num => {
  return [...num].map(a => a === ' ' ? '-' : a).join('')
}

export const parseFirstWord = str => str.split(' ')[0].toLowerCase()

export const toKebabCase = str => str.toLowerCase().replace(' ', '-')