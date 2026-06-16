import { readFileSync } from 'node:fs'

const seasonsPath = new URL('./seasons.json', import.meta.url)
const seasons = JSON.parse(readFileSync(seasonsPath, 'utf8'))
const currentSeason = seasons.at(-1)

export default ['1', '2', '3', '4'].map((concertId) => ({
  from: concertId,
  to: `${currentSeason.id}/${concertId}`,
}))