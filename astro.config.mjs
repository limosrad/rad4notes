
// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import { unified } from '@astrojs/markdown-remark';
import { remarkLearningBlocks } from './src/plugins/learning-blocks.js';
import remarkDirective from 'remark-directive';

const base = '/rad4notes';

export default defineConfig({
  site: 'https://limosrad.github.io',
  base,
 
  integrations: [
    starlight({
      title: 'Rad4Notes',
      customCss: ['./src/styles/custom.css'],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },

      head: [
        {
          tag: 'script',
          attrs: {
            src: `${base}/external-links.js`,
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
              items: [{ autogenerate: { directory: 'front-matter' } }],
            },

            { label: 'Chest',
              collapsed: true, 
              items: [
                'chest/introduction',
                {
                  label: 'Imaging Modalities',
                  items: [{ autogenerate: { directory: 'chest/imaging-modalities' } }]
                },
                {
                  label: 'Infections',
                  items: [{ autogenerate: { directory: 'chest/infections' } }]
                },

                {
                  label: 'Lung Cancer',
                  items: [{ autogenerate: { directory: 'chest/lung-cancer' } }]
                },
                {
                  label: 'Mediastinum',
                  items: [
                    { autogenerate: { directory: 'chest/mediastinum' } }
                  ]
                },
                {
                  label: 'Miscellaneous',
                  items: [
                    { autogenerate: { directory: 'chest/miscellaneous' } }
                  ]
                },
                {
                  label: 'Pulmonary Vascular Disease',
                  items: [
                    { autogenerate: { directory: 'chest/pulmonary-vascular' } }
                  ]
                },
                {
                  label: 'Paediatric Chest',
                  items: [
                    { autogenerate: { directory: 'chest/paediatric-chest' } }
                  ]
                }
              ],
            },
            { label: 'Cardiovascular',
              collapsed: true,
              items: [
                'cardiovascular/introduction',
                {
                  label: 'Imaging Modalities',
                  items: [
                    { autogenerate: { directory: 'cardiovascular/imaging-modalities' } }
                  ]
                },
                {
                  label: 'Congenital Heart Disease',
                  items: [
                    { autogenerate: { directory: 'cardiovascular/congenital-heart' } }
                  ]
                },
                {
                  label: 'Acquired Heart Disease',
                  items: [
                    { autogenerate: { directory: 'cardiovascular/acquired-heart' } }
                  ]
                },
                {
                  label: 'Aorta and Peripheral Vascular Disease',
                  items: [
                    { autogenerate: { directory: 'cardiovascular/aorta-peripheral-vascular' } }
                  ]
                },                                
              ],  
            },
            { label: 'Gastrointestinal',
              collapsed: true,
              items: [
                'gastrointestinal/introduction',
                {
                  label: 'Imaging Techniques',
                  items: [
                    //'gastrointestinal/imaging-techniques/abdominal-x-ray',
                    //'gastrointestinal/imaging-techniques/abdominal-ct',
                  ]   
                },
                {
                  label: 'Oesophagus',
                  items: [
                    { autogenerate: { directory: 'gastrointestinal/oesophagus' } }
                  ]
                },
                {
                  label: 'Stomach and Duodenum',
                  items: [
                    { autogenerate: { directory: 'gastrointestinal/stomach-duodenum' } }
                  ]
                },
                {
                  label: 'Small Bowel',
                  items: [
                    { autogenerate: { directory: 'gastrointestinal/small-bowel' } }
                  ]
                },
                {
                  label: 'Colorectal and Appendix',
                  items: [
                    { autogenerate: { directory: 'gastrointestinal/colorectal' } }
                  ]
                },
                {
                  label: 'Paediatric GI',
                  items: [
                    { autogenerate: { directory: 'gastrointestinal/paediatric-gi' } }
                  ]
                },
              ],
            },
            { label: 'Hepatopancreatobiliary',
              collapsed: true,
              items: [
                'hepatopancreatobiliary/hpb-introduction',
                {
                  label: 'Liver',
                  items: [
                    { autogenerate: { directory: 'hepatopancreatobiliary/liver' } }
                  ]
                },
                {
                  label: 'Biliary Tree',
                  items: [
                    { autogenerate: { directory: 'hepatopancreatobiliary/biliary' } }
                  ]
                },       
                {
                  label: 'Pancreas',
                  items: [
                    { autogenerate: { directory: 'hepatopancreatobiliary/pancreas' } }
                  ]
                },
                {
                  label: 'Spleen',
                  items: [
                    { autogenerate: { directory: 'hepatopancreatobiliary/spleen' } }
                  ]
                }
              ],
            },
            { label: 'Genitourinary',
              collapsed: true,
              items: [
                'genitourinary/introduction-genitourinary',
                {
                  label: 'Adrenal gland',
                  items: [
                    { autogenerate: { directory: 'genitourinary/adrenal' } }
                  ]
                },
                {
                  label: 'Kidneys',
                  items: [
                    { autogenerate: { directory: 'genitourinary/renal' } }
                  ]
                },
                {
                  label: 'Retroperitoneum, Ureters, Urinary Bladder, Urethra and Penis',
                  items: [
                    { autogenerate: { directory: 'genitourinary/ureter-bladder' } }
                  ]
                },
                {
                  label: 'Prostate and Seminal Vesicles',
                  items: [
                    { autogenerate: { directory: 'genitourinary/prostate-sv' } }
                  ]
                },
                {
                  label: 'Testis',
                  items: [
                    { autogenerate: { directory: 'genitourinary/testis' } }
                  ]
                }                
              ],
            },
            {
              label: 'Obstetric, Gynaecologic and Breast',
              collapsed: true,
              items: [
                'obg-breast/obg-breast-list',
                
                {
                  label: 'Obstetric Imaging',
                  items: [
                    { autogenerate: { directory: 'obg-breast/obstetrics' } }
                  ]
                },
                {
                  label: 'Ovaries',
                  items: [
                    { autogenerate: { directory: 'obg-breast/ovaries' } }
                  ]
                },
                {
                  label: 'Uterus, Cervix and Vagina',
                  items: [
                    { autogenerate: { directory: 'obg-breast/uterus-cervix' } }
                  ]
                },
                {
                  label: 'Breast',
                  items: [
                    { autogenerate: { directory: 'obg-breast/breast' } }
                  ]
                },                
              ],
            },
            {
              label: 'Neuroradiology',
              collapsed: true,
              items: [
                'neuroradiology/neuro-introduction',
                {
                  label: 'CNS Neoplasms',
                  items: [
                    { autogenerate: { directory: 'neuroradiology/cns-neoplasms' } }
                  ],
                },
                {
                  label: 'Infection, Inflammation and Degeneration',
                  items: [
                    { autogenerate: { directory: 'neuroradiology/infection-inflammation-degeneration' } }
                  ],
                },
                {
                  label: 'Neurovascular',
                  items: [
                    { autogenerate: { directory: 'neuroradiology/neurovascular' } }
                  ],
                },
                {
                  label: 'Spine',
                  items: [
                    { autogenerate: { directory: 'neuroradiology/spine' } }
                  ],
                },
                {
                  label: 'Paediatric Neuroradiology',
                  items: [
                    { autogenerate: { directory: 'neuroradiology/paediatric-cns' } }
                  ]
                }
              ],
            },
            {
              label: 'Head and Neck Radiology',
              collapsed: true,
              items: [
                'head-neck/head-neck-intro',
                {
                  label: 'Orbits',
                  items: [
                    { autogenerate: { directory: 'head-neck/orbits' } }
                  ],
                },                
                {
                  label: 'Ear, Nose and Throat',
                  items: [
                    { autogenerate: { directory: 'head-neck/ear-nose-throat' } }
                  ],
                },

                {
                  label: 'Dental',
                  items: [
                    { autogenerate: { directory: 'head-neck/dental' } }
                  ],
                },                
              ],
            },

            {
              label: 'Musculoskeletal Radiology',
              collapsed: true,
              items: [
                'musculoskeletal/msk-introduction',
                {
                  label: 'Bone – Benign and Non-neoplastic',
                  items: [
                    { autogenerate: { directory: 'musculoskeletal/bone-benign' } },
                  ],
                },
                {
                  label: 'Bone Tumours',
                  items: [
                    { autogenerate: { directory: 'musculoskeletal/bone-tumours' } }
                    
                  ],
                },
                {
                  label: 'Soft Tissue',
                  items: [
                    { autogenerate: { directory: 'musculoskeletal/soft-tissue' } }
                  ],
                },
                {
                  label: 'Trauma',
                  items: [
                    { autogenerate: { directory: 'musculoskeletal/trauma' } }
                  ],
                },
              ],
            },
            {
              label: 'Physics',
              collapsed: true,
              items: [
                'physics/physics-introduction',
                {
                  label: 'X-ray Physics',
                  items: [
                    { autogenerate: { directory: 'physics/x-ray-physics' } }
                  ]
                },
                {
                  label: 'CT Physics',
                  items: [
                    { autogenerate: { directory: 'physics/ct-physics' } }
                    //'physics/ct-physics/ct-dose',
                  ]
                },
                {
                  label: 'MRI Physics',
                  items: [
                    { autogenerate: { directory: 'physics/mri-physics' } }
                  ]
                },
                {
                  label: 'Ultrasound Physics',
                  items: [
                    { autogenerate: { directory: 'physics/ultrasound-physics' } }
                  ]
                },
              ]                                                  
            },
            {
              label: 'General Radiology',
              collapsed: true,
              items: [
                'general-radiology/general-rad-introduction',
                {
                  label: 'Contrast in Radiology',
                  items: [
                    { autogenerate: { directory: 'physics/contrast-in-radiology' } }
                  ]
                },
                {
                  label: 'Statistics in Radiology',
                  items: [
                    { autogenerate: { directory: 'physics/statistics-in-radiology' } }
                  ]
                },
                {
                  label: 'Multisystem Radiology',
                  items: [
                    { autogenerate: { directory: 'physics/multisystem-radiology' } }
                ]
                },
                {
                  label: 'General Interventional Radiology',
                  items: [
                    { autogenerate: { directory: 'physics/general-interventional-radiology' } }
                  ]
                },
              ]                                                  
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
