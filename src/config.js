import chartIcon from '@plone/volto/icons/world.svg';

import {View as FAQBlockView} from './FAQ/BlockView';
import {Edit as FAQBlockEdit} from './FAQ/BlockEdit';


export function applyConfig(config) {

  // config.blocks.blocksConfig.faq_viewer = {
  //   id: 'faq_viewer',
  //   title: 'FAQ Viewer',
  //   view: FAQBlockView,
  //   edit: FAQBlockEdit,
  //   icon: chartIcon,
  //   group: 'common',
  // };
  
  return config;
}
