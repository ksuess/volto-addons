import chartIcon from '@plone/volto/icons/world.svg';

import FAQBlockEdit from './FAQ/BlockEdit';
import FAQBlockView from './FAQ/BlockView';


export default function applyConfig(config) {

  config.blocks.blocksConfig.faq_viewer = {
    id: 'faq_viewer',
    title: 'FAQ Viewer',
    edit: FAQBlockEdit,
    view: FAQBlockView,
    icon: chartIcon,
    group: 'common',
  };
  
  return config;
}


// export default config => config;