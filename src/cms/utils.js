export const getIntro = (intro, getAsset) => ({
  title: intro.getIn(['data', 'title']),
  lead: intro.getIn(['data', 'intro', 'lead']),
  principal: intro.getIn(['data', 'intro', 'principal']),
  secundario: intro.getIn(['data', 'intro', 'secundario']),
  background: getAsset(intro.getIn(['data', 'intro', 'background'])).url
})