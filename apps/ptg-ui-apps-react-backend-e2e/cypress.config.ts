import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ptg-ui-apps-react-backend:serve',
        production: 'nx run ptg-ui-apps-react-backend:preview',
      },
      ciWebServerCommand: 'nx run ptg-ui-apps-react-backend:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
