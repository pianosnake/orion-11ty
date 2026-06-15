import concerts from './concerts.json' with { type: 'json' }

export default concerts.seasons
  .slice(0, -1)
  .flatMap((season) => season.items.map((concert) => ({
    seasonId: season.id,
    concertId: concert.id,
    concert
  })))