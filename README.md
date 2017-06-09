# Storybook Brand.ai viewer

The Brand.ai viewer displays UI Components from a Brand.ai Design Library in [Storybook](https://github.com/storybooks/storybook).  

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

[Connect Brand.ai UI Components to your React Storybook](./docs/component-connect.md)
