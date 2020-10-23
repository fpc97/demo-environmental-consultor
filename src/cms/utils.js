export const getIntro = (intro, getAsset) => ({
  //title: intro.getIn(['data', 'title']),
  lead: intro.getIn(['data', 'header', 'lead']),
  principal: intro.getIn(['data', 'header', 'principal']),
  secundario: intro.getIn(['data', 'header', 'secundario']),
  background: getAsset(intro.getIn(['data', 'header', 'background'])).url
})