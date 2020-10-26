export const getIntro = (entry, getAsset) => ({
  //title: intro.getIn(['data', 'title']),
  lead: entry.getIn(['data', 'header', 'lead']),
  principal: entry.getIn(['data', 'header', 'principal']),
  secundario: entry.getIn(['data', 'header', 'secundario']),
  background: getAsset(entry.getIn(['data', 'header', 'background'])).url
})