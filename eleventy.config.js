export default function (eleventyConfig) {
  function parseConcertDateTime(dateTime) {
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

  eleventyConfig.addFilter('concertDisplayDate', (dateTime) => {
    return parseConcertDateTime(dateTime).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  })

  eleventyConfig.addFilter('concertTime', (dateTime) => {
    return parseConcertDateTime(dateTime).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    })
  })

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" })
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/styles")
  eleventyConfig.addPassthroughCopy("src/scripts")

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
}
