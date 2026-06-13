export default function (eleventyConfig) {
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
