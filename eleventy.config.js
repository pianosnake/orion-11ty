export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" })
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/styles")

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
}
