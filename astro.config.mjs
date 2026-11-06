
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

            { label: 'Chest', 
              items: [
                'chest/introduction',
                {
                  label: 'Imaging Modalities',
                  items: [
                    'chest/imaging-modalities/introduction',
                    'chest/imaging-modalities/chest-x-ray',
                    'chest/imaging-modalities/contrast-ct',
                  ]
                },
                {
                  label: 'Infections',
                  items: [
                    'chest/infections/immunocompromised',
                  ]
                }

              ],
            },
            { label: 'Cardiovascular',
              items: [
                'cardiovascular/introduction',
              ],  
            },
            { label: 'Gastrointestinal',
              items: [
                'gastrointestinal/introduction',
              ],
            },
          ],
        },
      ],
            
    }),
  ],  
});
