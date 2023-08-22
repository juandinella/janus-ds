module.exports = {
  "stories": ["../src/**/*.@(mdx|stories.@(js))"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/theming"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true,
    source: {
      excludeDecorators: true,
    },
  },
  features: {
    legacyDecoratorFileOrder: true,
  },
  staticDirs: ['../public'],
}
