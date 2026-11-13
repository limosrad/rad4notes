
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
                'index',
                'front-matter/abbreviations',
                'front-matter/universal-references',
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
                    'chest/lung-cancer/lung-cancer',
                    'chest/lung-cancer/other-neoplasms'
                  ]
                },
                {
                  label: 'Mediastinum',
                  items: [
                    'chest/mediastinum/mediastinal-masses',
                  ]
                },
                {
                  label: 'Miscellaneous',
                  items: [
                    'chest/miscellaneous/chest-wall-pleura',
                    'chest/miscellaneous/icu-radiograph',
                  ]
                },
                {
                  label: 'Pulmonary Vascular Disease',
                  items: [
                    'chest/pulmonary-vascular/pulmonary-embolism',
                  ]
                },
                {
                  label: 'Paediatric Chest',
                  items: [
                    'chest/paediatric-chest/neonatal-chest',
                    'chest/paediatric-chest/paediatric-chest',
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
                    'cardiovascular/imaging-modalities/cardiac-mri',
                    'cardiovascular/imaging-modalities/cardiac-ct',
                    'cardiovascular/imaging-modalities/nuclear-cardiology',
                  ]
                },
                {
                  label: 'Congenital Heart Disease',
                  items: [
                    'cardiovascular/congenital-heart/chest-x-ray-chd',
                    'cardiovascular/congenital-heart/aorta-congenital',
                    'cardiovascular/congenital-heart/cardiac-surgery',
                  ]
                },
                {
                  label: 'Acquired Heart Disease',
                  items: [
                    'cardiovascular/acquired-heart/ischaemic-heart-disease',
                    'cardiovascular/acquired-heart/cardiac-masses',
                  ]
                },
                {
                  label: 'Aorta and Peripheral Vascular Disease',
                  items: [
                    'cardiovascular/aorta-peripheral-vascular/acute-aorta',
                    'cardiovascular/aorta-peripheral-vascular/aortic-aneurysm',
                    'cardiovascular/aorta-peripheral-vascular/vasculitis',
                  ]
                },                                
              ],  
            },
            { label: 'Gastrointestinal',
              collapsed: true,
              items: [
                'gastrointestinal/introduction',
                {
                  label: 'Imaging Modalities',
                  items: [
                    //'gastrointestinal/imaging-techniques/abdominal-x-ray',
                    //'gastrointestinal/imaging-techniques/abdominal-ct',
                  ]   
                },
                {
                  label: 'Oesophagus',
                  items: [
                    'gastrointestinal/oesophagus/barium-oesophagogram',
                    'gastrointestinal/oesophagus/oesophageal-carcinoma',
                  ]
                },
                {
                  label: 'Stomach and Duodenum',
                  items: [
                    'gastrointestinal/stomach-duodenum/stomach-benign',
                    'gastrointestinal/stomach-duodenum/stomach-neoplasms',
                    'gastrointestinal/stomach-duodenum/paediatric-duodenum',
                  ]
                },
                {
                  label: 'Small Bowel',
                  items: [
                    'gastrointestinal/small-bowel/small-bowel-followthrough',
                    'gastrointestinal/small-bowel/inflammatory-bowel-disease',
                  ]
                },
                {
                  label: 'Colorectal and Appendix',
                  items: [
                    'gastrointestinal/colorectal/colorectal-benign',
                    'gastrointestinal/colorectal/colorectal-malignant',
                  ]
                },
                {
                  label: 'Paediatric GI',
                  items: [
                    'gastrointestinal/paediatric-gi/paediatric-upper-gi',
                    'gastrointestinal/paediatric-gi/paediatric-lower-gi',
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
                    'hepatopancreatobiliary/liver/liver-doppler',
                    'hepatopancreatobiliary/liver/diffuse-liver',
                    'hepatopancreatobiliary/liver/focal-liver-general',
                    'hepatopancreatobiliary/liver/focal-liver-hcc',
                    'hepatopancreatobiliary/liver/liver-transplant',
                  ]
                },
                {
                  label: 'Biliary Tree',
                  items: [
                    'hepatopancreatobiliary/biliary/cholangiopathies',
                    'hepatopancreatobiliary/biliary/gall-bladder',
                  ]
                },       
                {
                  label: 'Pancreas',
                  items: [
                    //'hepatopancreatobiliary/pancreas/pancreatitis',
                    'hepatopancreatobiliary/pancreas/cystic-pancreatic-neoplasms',
                    'hepatopancreatobiliary/pancreas/solid-pancreatic-neoplasms',
                  ]
                },
                {
                  label: 'Spleen',
                  items: [
                    'hepatopancreatobiliary/spleen/focal-spleen',
                    'hepatopancreatobiliary/spleen/general-spleen',
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
                    'genitourinary/adrenal/adrenal-general',
                    'genitourinary/adrenal/adrenal-neoplasms',
                    'genitourinary/adrenal/neuroblastoma',
                  ]
                },
                {
                  label: 'Kidneys',
                  items: [
                    'genitourinary/renal/renal-benign',
                    'genitourinary/renal/renal-neoplasms',
                    'genitourinary/renal/renal-transplant',
                  ]
                },
                {
                  label: 'Retroperitoneum, Ureters, Urinary Bladder, Urethra and Penis',
                  items: [
                    'genitourinary/ureter-bladder/retroperitoneum',
                    'genitourinary/ureter-bladder/bladder-malignant',
                    'genitourinary/ureter-bladder/urethra',
                    'genitourinary/ureter-bladder/penis',
                  ]
                },
                {
                  label: 'Prostate and Seminal Vesicles',
                  items: [
                    'genitourinary/prostate-sv/prostate-cancer',
                  ]
                },
                {
                  label: 'Testis',
                  items: [
                    'genitourinary/testis/testis-benign',
                    'genitourinary/testis/testis-malignancy',
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
                    'obg-breast/obstetrics/first-trimester',
                    'obg-breast/obstetrics/postpartum',
                  ]
                },
                {
                  label: 'Ovaries',
                  items: [
                    'obg-breast/ovaries/ovaries-benign',
                    'obg-breast/ovaries/ovaries-malignant',
                  ]
                },
                {
                  label: 'Uterus, Cervix and Vagina',
                  items: [
                    'obg-breast/uterus-cervix/uterus-benign',
                    'obg-breast/uterus-cervix/uterus-malignant',
                    'obg-breast/uterus-cervix/cervix-benign',
                    'obg-breast/uterus-cervix/cervix-malignant',
                  ]
                },
                {
                  label: 'Breast',
                  items: [
                    'obg-breast/breast/imaging-modalities',
                    'obg-breast/breast/breast-cancer',
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
                    'neuroradiology/cns-neoplasms/cns-neoplasm-ddx',
                    'neuroradiology/cns-neoplasms/adult-supratentorial',
                    'neuroradiology/cns-neoplasms/paediatric-supratentorial',
                    'neuroradiology/cns-neoplasms/paediatric-infratentorial',
                    'neuroradiology/cns-neoplasms/cerebellopontine-angle',
                    'neuroradiology/cns-neoplasms/sellar-pineal',
                    'neuroradiology/cns-neoplasms/syndromic-cns-neoplasms',
                  ],
                },
                {
                  label: 'Infection, Inflammation and Degeneration',
                  items: [
                    'neuroradiology/infection-inflammation-degeneration/cns-infections',
                    'neuroradiology/infection-inflammation-degeneration/dementia',
                    'neuroradiology/infection-inflammation-degeneration/multiple-sclerosis',
                    'neuroradiology/infection-inflammation-degeneration/toxic-metabolic-encephalopathies',
                  ],
                },
                {
                  label: 'Neurovascular',
                  items: [
                    'neuroradiology/neurovascular/cns-haemorrhage',
                    'neuroradiology/neurovascular/neuro-trauma',
                    'neuroradiology/neurovascular/stroke',
                  ],
                },
                {
                  label: 'Spine',
                  items: [
                    'neuroradiology/spine/craniovertebral-junction',
                    'neuroradiology/spine/spine-bone-benign',
                    'neuroradiology/spine/spine-bone-tumours',
                    'neuroradiology/spine/spine-cns-neoplasms',
                    'neuroradiology/spine/spine-trauma',
                  ],
                },
                {
                  label: 'Paediatric Neuroradiology',
                  items: [
                    'neuroradiology/paediatric-cns/perinatal-brain-injury',
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
                    'head-neck/orbits/intraocular',
                    'head-neck/orbits/optic-nerve',
                    'head-neck/orbits/orbital-masses-intraconal',
                    'head-neck/orbits/orbital-masses-extraconal',
                  ],
                },                
                {
                  label: 'Ear, Nose and Throat',
                  items: [
                    'head-neck/ear-nose-throat/middle-ear',
                    'head-neck/ear-nose-throat/inner-ear',
                    'head-neck/ear-nose-throat/nose-pns',
                    'head-neck/ear-nose-throat/suprahyoid-spaces',
                    'head-neck/ear-nose-throat/infrahyoid-spaces',
                    'head-neck/ear-nose-throat/thyroid-parathyroid',
                    'head-neck/ear-nose-throat/salivary-gland-neoplasms',
                  ],
                },

                {
                  label: 'Dental',
                  items: [
                    'head-neck/dental/facial-trauma',
                    'head-neck/dental/odontogenic-masses',
                    'head-neck/dental/bone-lesions-jaw',
                    'head-neck/dental/oral-cavity-cancer',
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
                    'musculoskeletal/bone-benign/arthritis',
                    'musculoskeletal/bone-benign/infection',
                    'musculoskeletal/bone-benign/marrow',
                    'musculoskeletal/bone-benign/metabolic',
                    'musculoskeletal/bone-benign/skeletal-dysplasia',
                  ],
                },
                {
                  label: 'Bone Tumours',
                  items: [
                    'musculoskeletal/bone-tumours/bone-tumour-differentials',
                    'musculoskeletal/bone-tumours/bone-tumour-benign',
                    'musculoskeletal/bone-tumours/bone-tumour-chondroid',
                    'musculoskeletal/bone-tumours/bone-tumour-osteoid',
                    'musculoskeletal/bone-tumours/bone-tumour-malignant',
                    
                  ],
                },
                {
                  label: 'Soft Tissue',
                  items: [
                    'musculoskeletal/soft-tissue/soft-tissue-benign',
                    'musculoskeletal/soft-tissue/soft-tissue-neoplasms',
                    'musculoskeletal/soft-tissue/soft-tissue-vascular',
                    'musculoskeletal/soft-tissue/synovial-proliferative',
                  ],
                },
                {
                  label: 'Trauma',
                  items: [
                    'musculoskeletal/trauma/trauma-approach',
                    'musculoskeletal/trauma/shoulder',
                    'musculoskeletal/trauma/elbow',
                    'musculoskeletal/trauma/wrist',
                    'musculoskeletal/trauma/pelvis-hip',
                    'musculoskeletal/trauma/knee',
                    'musculoskeletal/trauma/ankle-foot',
                    'musculoskeletal/trauma/paediatric-trauma',
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
                    //'physics/x-ray-physics/radiation-physics-introduction',
                    //'physics/x-ray-physics/x-ray-production',
                    //'physics/x-ray-physics/x-ray-interaction',
                  ]
                },
                {
                  label: 'CT Physics',
                  items: [
                    //'physics/ct-physics/ct-scanning',
                    //'physics/ct-physics/ct-contrast',
                    //'physics/ct-physics/ct-dose',
                  ]
                },
                {
                  label: 'MRI Physics',
                  items: [
                    //'physics/mri-physics/mri-principles',
                    //'physics/mri-physics/mri-sequences',
                    //'physics/mri-physics/mri-contrast',
                  ]
                },
                {
                  label: 'Ultrasound Physics',
                  items: [
                    //'physics/ultrasound-physics/ultrasound-principles',
                    //'physics/ultrasound-physics/ultrasound-sequences',
                    //'physics/ultrasound-physics/ultrasound-contrast',
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
                    //'physics/contrast-in-radiology/radiation-physics-introduction',
                    //'physics/contrast-in-radiology/x-ray-production',
                    //'physics/contrast-in-radiology/x-ray-interaction',
                  ]
                },
                {
                  label: 'Statistics in Radiology',
                  items: [
                    //'physics/statistics-in-radiology/ct-scanning',
                    //'physics/statistics-in-radiology/ct-contrast',
                    //'physics/statistics-in-radiology/ct-dose',
                  ]
                },
                {
                  label: 'Multisystem Radiology',
                  items: [
                    //'physics/multisystem-radiology/mri-principles',
                    //'physics/multisystem-radiology/mri-sequences',
                    //'physics/multisystem-radiology/mri-contrast',
                  ]
                },
                {
                  label: 'General Interventional Radiology',
                  items: [
                    //'physics/general-interventional-radiology/ultrasound-principles',
                    //'physics/general-interventional-radiology/ultrasound-sequences',
                    //'physics/general-interventional-radiology/ultrasound-contrast',
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
