import React from 'react';
import addons from '@kadira/storybook-addons';
import AssetContainer from './addon/AssetContainer';
import {ADDON_ID, PANEL_ID} from './constants';

export default (options) => {
  var { dataUrl } = options;

  if (!dataUrl) {
    console.log('The Brand.ai library viewer is not configured');
    return;
  }

  addons.register(ADDON_ID, api => {
    const channel = addons.getChannel();
    addons.addPanel(PANEL_ID, {
      title: 'Design Library',
      render: () => <AssetContainer
        channel={channel}
        api={api}
        dataUrl={dataUrl}
      />,
    });
  });
}

