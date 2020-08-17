import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import FAQSidebar from './FAQSidebar';
import FAQBody from './FAQBody';

const Edit = ({ data, onChangeBlock, block, selected, properties }) => {
  return (
    <div
      className={cx('block faq')}
    >
      <FAQBody data={data} properties={properties} id={block} isEditMode />
      <SidebarPortal selected={selected}>
        <FAQSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </div>
  );
};

export default Edit;