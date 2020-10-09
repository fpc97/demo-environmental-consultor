export default ({ mobile, tablet, desktop }) => [
  {
    ...mobile,
    media: `(max-width: 400px)`
  },
  {
    ...tablet,
    media: `(max-width: 760px)`
  },
  desktop
]