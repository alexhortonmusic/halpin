const aboutClick = $('#about-click')
const musicClick = $('#music-click')

aboutClick.click(() => {
  force.jump('.about')
})


musicClick.click(() => {
  force.jump('.music')
})
