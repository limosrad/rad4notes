
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

      head: [
        {
          tag: 'script',
          attrs: {
            src: '/external-links.js',
            defer: true,
          },
        },
      ],

      sidebar: [
        {
          label: 'Contents',

          items: [

            { label: 'Front Matter',
              collapsed: true,
              items: [
                'front-matter/abbreviations',
                'index',
              ],
            },

            { label: 'Chest',
              collapsed: true, 
              items: [
                'chest/introduction',
                {
                  label: 'Imaging Modalities',
                  items: [
                    'chest/imaging-modalities/chest-usg',
                    'chest/imaging-modalities/chest-x-ray',
                    'chest/imaging-modalities/chest-ct',
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
                    'chest/lung-cancer/lung-cancer-staging',
                    'chest/lung-cancer/other-neoplasms'
                  ]
                },
                {
                  label: 'Mediastinum',
                  items: [
                    'chest/mediastinum/mediastinal-masses',
                  ]
                },
              ],
            },
            { label: 'Cardiovascular',
              collapsed: true,
              items: [
                'cardiovascular/introduction',
              ],  
            },
            { label: 'Gastrointestinal',
              collapsed: true,
              items: [
                'gastrointestinal/introduction',
              ],
            },
            { label: 'Genitourinary',
              collapsed: true,
              items: [
                'genitourinary/introduction-genitourinary',
                {
                  label: 'Adrenal',
                  items: [
                    'genitourinary/adrenal/neuroblastoma',
                  ]
                },
                
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
