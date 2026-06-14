import { concertDisplayDate, concertTime } from './src/utils/concert-date-time.js'

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData('layout', 'layout.njk')
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value))
  eleventyConfig.addFilter('concertDisplayDate', concertDisplayDate)
  eleventyConfig.addFilter('concertTime', concertTime)

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
