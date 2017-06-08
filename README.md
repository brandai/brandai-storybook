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
register({ organizationName: 'test-org', libraryName: 'primary-brand', libraryKey: '' });

```
In the above example, the organizationName and libraryName were found by inspecting the url of a design library:
https://brand.ai/test-org/primary-brand

