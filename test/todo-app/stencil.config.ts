import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist-custom-elements',
      dir: 'public'
    }
  ],
};