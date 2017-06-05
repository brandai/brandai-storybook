import React from 'react';
import addons from '@kadira/storybook-addons';
import AssetContainer from './addon/AssetContainer';
import {ADDON_ID, PANEL_ID} from './constants';

export default function register(options) {
  var { host, organizationName, libraryName, libraryKey } = options;

  if (!organizationName || !libraryName) {
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
        host={host}
        organizationName={organizationName}
        libraryName={libraryName}
        libraryKey={libraryKey}
      />,
    });
  });
};

