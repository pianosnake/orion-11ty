import seasonData from './concerts.json' with { type: 'json' }

export default seasonData.seasons
  .flatMap((season) => season.items.map((concert) => ({
    seasonId: season.id,
    concertId: concert.id,
    concert
  })))