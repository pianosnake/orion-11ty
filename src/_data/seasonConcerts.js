import concerts from './concerts.json' with { type: 'json' }
import seasons from './seasons.json' with { type: 'json' }

const concertsBySeasonId = concerts.reduce((seasonMap, concert) => {
  const seasonConcerts = seasonMap.get(concert.seasonId) ?? []
  seasonConcerts.push(concert)
  seasonMap.set(concert.seasonId, seasonConcerts)
  return seasonMap
}, new Map())

export default seasons.map((season) => ({
  ...season,
  items: concertsBySeasonId.get(season.id) ?? [],
}))
