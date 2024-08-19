 // module.exports = require("@irachus/tailwind/tailwind.config")
const sharedConfig = require('@irachus/tailwind/tailwind.config');

module.exports = {
  ...sharedConfig.content,
  content: [
    './src/atoms/**/*.{js,ts,jsx,tsx}', 

  ],
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme.extend,
    },
  },
  plugins: [
    ...sharedConfig.plugins,
  ],
};


