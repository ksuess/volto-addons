import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import FAQSidebar from './FAQSidebar';

const Edit = ({ data, onChangeBlock, block, selected, properties }) => {
  return (
    <div
      className={cx('block faq')}
    >
      <div>TODO FAQBody</div>
      <SidebarPortal selected={selected}>
        <FAQSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </div>
  );
};

export default Edit;