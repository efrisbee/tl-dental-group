module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('views/assets/styles/css');

    return {
        dir: {
            input: "views",
            output: "dist",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        },
        templateFormats: ["html", "liquid", "md"],
        htmlTemplateEngine: "liquid",
        passthroughFileCopy: true
      };
  };

