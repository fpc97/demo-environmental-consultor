export const objectHasValues = obj => {
  if (!(typeof obj === 'object' && obj !== null)) return false
  return Object.values(obj).some(a => !!a)
}

export const objectDeepSearch = (obj, navigation) => {
  if (!obj) {
    console.warn('objectDeepSearch got empty object')
    return false
  }

  return navigation.reduce((a, b) => {
    if (typeof a !== 'object') {
      return obj[a] && obj[a][b] ? obj[a][b] : false
    } else {
      return a[b] ? a[b] : false
    }
  })
}

export const parseNumber = num => [...num].map(a => a === ' ' ? '-' : a).join('')

export const parseFirstWord = str => str.split(' ')[0].toLowerCase()

export const toKebabCase = str => str.toLowerCase().replace(' ', '-')

export const toTitleCase = str => [...str].map((ch, i, arr) => (
  i === 0 || arr[i - 1] === ' ' ? ch.toUpperCase() : ch.toLowerCase()
)).join('')

export const getMarkdownFirstImage = md => {
  const match = typeof md === 'string' ? md.match(/!\[.*]\((.*)\)/) : false
  if (!(Array.isArray(match) && match.length > 1)) return false
  return match[1].split(' ')[0]    // Remove alt text
}

export const parseGraphQLEdges = data => {
  if (data.allMarkdownRemark) return data.allMarkdownRemark.edges
  else if (data.edges) return data.edges
  else return false
}

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

export const isNonDisplay = img => {
  const src = objectDeepSearch(img, ['childImageSharp', 'lg', 'src'])

  return typeof src === 'string' && src.endsWith('non-display.png')
}