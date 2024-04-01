module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assetsc');
    // eleventyConfig.setNunjucksEnvironmentOptions({
	// 	throwOnUndefined: true,
	// 	autoescape: false, // warning: don’t do this!
	// });
    return{
        dir:{
            input:"src",
            output:"_site"
        }
    };
}