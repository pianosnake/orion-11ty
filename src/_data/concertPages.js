import concerts from './concerts.json' with { type: 'json' }

export default concerts.map((concert) => ({
  seasonId: concert.seasonId,
  concertId: concert.id,
  concert,
}))