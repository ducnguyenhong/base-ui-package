/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/**/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};
export default config;
