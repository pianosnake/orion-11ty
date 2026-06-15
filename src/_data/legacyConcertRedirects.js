import { readFileSync } from 'node:fs'

const concertsPath = new URL('./concerts.json', import.meta.url)
const concerts = JSON.parse(readFileSync(concertsPath, 'utf8'))
const currentSeason = concerts.seasons.at(-1)

export default ['1', '2', '3', '4'].map((concertId) => ({
  from: concertId,
  to: `${currentSeason.id}/${concertId}`,
}))