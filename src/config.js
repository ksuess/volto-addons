import chartIcon from '@plone/volto/icons/world.svg';

import FAQBlockView from './FAQ/BlockView';
import FAQBlockEdit from './FAQ/BlockEdit';


export function applyConfig(config) {
  addCustomGroup(config);

  config.blocks.blocksConfig.faq_viewer = {
    id: 'faq_viewer',
    title: 'FAQ Viewer',
    view: FAQBlockView,
    edit: FAQBlockEdit,
    icon: chartIcon,
    group: 'custom_addons',
  };
  
  return config;
}
