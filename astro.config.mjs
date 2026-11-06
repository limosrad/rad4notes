
// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import { unified } from '@astrojs/markdown-remark';
import { remarkLearningBlocks } from './src/plugins/learning-blocks.js';
import remarkDirective from 'remark-directive';


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
                },
                {
                  label: 'Lung Cancer',
                  items: [
                    'chest/lung-cancer/solitary-nodules',
                    'chest/lung-cancer/lung-cancer-pathology',
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
      
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
      },    
    }),
  ],
  
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkDirective,
        remarkLearningBlocks,
      ],
    }),
  },

});
