/**
 * @type {import("@jest/transform").Transformer}
 */
const transformer = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    // The output is always the same.
    return "cssTransform";
  },
};

module.exports = transformer;
