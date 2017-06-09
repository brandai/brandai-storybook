# Storybook Brand.ai viewer

The Brand.ai viewer can be used to display UI Components from a Brand.ai Design Library in Storybook.  

## Getting Started

Install:

```sh
npm i -D @brandai/storybook-addon
```

Create a file called `addons.js` in your storybook config (default: `.storybook`) and add the following to `addon.js` :

```javascript
// import default storybook addons
import '@kadira/storybook/addons'

import register from '@brandai/storybook-addon';
register({ dataUrl:'<brandai-data-export-url>' });

```
[Obtaining the Brand.ai data export url](./docs/brandai-connect.md) 

[Add Storybook stories to Brand.ai](./docs/component-connect.md)
