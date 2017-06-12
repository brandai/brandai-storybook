import '@storybook/react/addons';
import register from '../src/manager';

// data export url used by storybook to fetch component data
register({ dataUrl: 'https://assets.brand.ai/brand-ai/style/style-data.json?exportFormat=list' });
