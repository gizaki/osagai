module.exports = {
  stories: ['../packages/**/stories/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
}
