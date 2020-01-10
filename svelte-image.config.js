// Svelte-Image Configurations
// [URL](https://github.com/matyunya/svelte-image)
// Loaded in `rollup.config.js` file.
export default {
  optimizeAll: true, // optimize all images discovered in img tags

  // Case insensitive. Only files whose extension exist in this array will be
  // processed by the <img> tag (assuming `optimizeAll` above is true). Empty
  // the array to allow all extensions to be processed. However, only jpegs and
  // pngs are explicitly supported.
  imgTagExtensions: ['jpg', 'jpeg', 'png'],

  // Same as the above, except that this array applies to the Image Component.
  // If the images passed to your image component are unknown, it might be a
  // good idea to populate this array.
  componentExtensions: [],

  // inline all images in img tags below 10kb
  inlineBelow: 10000,  // Default: 10000

  // png quality level
  compressionLevel: 8,  // Default: 8

  // jpeg/webp quality level
  quality: 80,  // Default: 70

  // default component name:  Default: 'Image'
  tagName: "Image",

  // array of sizes for srcset in pixels; Default: [400, 800, 1200]
  sizes: [400, 800, 1200, 1500],

  // array of screen size breakpoints at which sizes above will be applied
  breakpoints: [375, 768, 1024, 1280],

  outputDir: "g/",

  placeholder: "blur", // "trace" or "blur",

  // WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp)
  webpOptions: {
    quality: 75,
    lossless: false,
    force: true
  },

  webp: true,

  // Potrace options for SVG placeholder
  trace: {
    background: "#fefefe",
    color: "#e6ccb5",
    threshold: 120
  }
};
