export const objectHasValues = obj => {
  if (!(typeof obj === 'object' && obj !== null)) return false
  return Object.values(obj).some(a => !!a)
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

export const toTitleCase = str => [...str].map((ch, i, arr) => (
  i === 0 || arr[i - 1] === ' ' ? ch.toUpperCase() : ch.toLowerCase()
)).join('')

export const getMarkdownFirstImage = md => typeof md === 'string' ? md.match(/!\[.*]\((.*)\)/)[1] : false

export const parseGraphQLEdges = data => data.allMarkdownRemark.edges || false

export const removeAccents = str => {
  const parseMap = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u'
  }

  return [...str]
    .map(ch => parseMap[ch.toLowerCase()] || ch.toLowerCase())
    .join('')
}

export const removeSpaces = str => str.split(' ').join('')