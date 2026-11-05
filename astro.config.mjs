// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Rad4Notes',
      customCss: ['./src/styles/custom.css'],

      sidebar: [
        {
          label: 'My Notebook',
          items: [
            {
              label: 'Home',
              link: '/',
            },
            {
              label: 'Cardiovascular',
              items: [{
                autogenerate: {
                  directory: 'cardiovascular',
                },
              }],
            },
            {
              label: 'Chest',
              items: [
                  {
                    autogenerate: {
                      directory: 'chest',
                    },
                  },
                ], 
            },
            {
              label: 'Gastrointestinal',
              items: [{
                autogenerate: {
                  directory: 'gastrointestinal',
                },
              }],
            },
          ],
        },
      ],
    }),
  ],
});