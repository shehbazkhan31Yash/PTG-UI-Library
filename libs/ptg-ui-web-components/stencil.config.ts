import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  globalStyle: 'src/global/global.scss',
  namespace: 'ptg-ui-web-components',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'global' }
      ],
      // disable service workers
        },

        // reactOutputTarget({
        //   componentCorePackage: '@ptg-ui/ptg-ui-web-components',
        //   proxiesFile:
        //   '../../../libs/ptg-ui-web-components-react/src/generated/components.ts',
        //   includeDefineCustomElements: true,
        // }),
        // reactOutputTarget({
        //       outDir: '../../../libs/ptg-ui-web-components-react/src/generated/components.ts',
        //       esModules: true,
        //       stencilPackageName: '@ptg-ui/ptg-ui-web-components',
        //       excludeComponents: [], // Add any components you want to exclude
        //       excludeServerSideRenderingFor: [], // Add any components to exclude from SSR
        //     }),
   angularOutputTarget({
      componentCorePackage: '@ptg-ui/ptg-ui-web-components',
      directivesProxyFile:
        '../../../libs/ptg-ui-web-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../libs/ptg-ui-web-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
