
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
            { label: 'Home', link: '/' },

            // CARDIOVASCULAR
            {
              label: 'Cardiovascular',
              items: [
                { slug: 'cardiovascular' },
              ],
            },

            // CHEST
            {
              label: 'Chest',
              items: [
                { slug: 'chest' },

                // Imaging Modalities
                {
                  label: 'Imaging Modalities',
                  items: [
                        {
                          autogenerate: {
                            directory: 'chest/imaging-modalities',
                          },
                        },
                      ],    
                  
                },

                // Infections
                {
                  label: 'Infections',
                  items: [
                    {
                          autogenerate: {
                            directory: 'chest/infections/immunocompromised-hosts',
                          },
                        },
                      ],
                    
                  
                },
              ],
            },

            // GASTROINTESTINAL
            {
              label: 'Gastrointestinal',
              items: [
                { slug: 'gastrointestinal' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
