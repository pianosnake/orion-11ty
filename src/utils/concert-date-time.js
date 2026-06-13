export function parseConcertDateTime(dateTime) {
  const [date, time, meridiem] = dateTime.split(' ')
  const [month, day, year] = date.split('-').map(Number)
  const [rawHour, rawMinute] = time.split(':')
  const hour = Number(rawHour)
  const normalizedHour = meridiem === 'PM' && hour !== 12
    ? hour + 12
    : meridiem === 'AM' && hour === 12
      ? 0
      : hour

  return new Date(year, month - 1, day, normalizedHour, Number(rawMinute))
}

export function concertDisplayDate(dateTime) {
  return parseConcertDateTime(dateTime).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function concertTime(dateTime) {
  return parseConcertDateTime(dateTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })
}
