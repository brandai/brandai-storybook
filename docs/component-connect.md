##Connect Brand.ai UI Components to your React Storybook

This tutorial assumes that you are logged in to Brand.ai and that your storybook has been [connected to Brand.ai](./brandai-connect.md). In addition, you will need edit permissions to the design library to connect components.

1. To connect a component, the design library must be in edit mode
![Edit mode](edit-mode.png)

2. Click `UI Components` in the navigation menu and click on a component to see additional information.

3. Copy the story url from your storybook and paste it into the story url field

![Story url](component-url.png)


The story url contains a few pieces of information that we'll use to connect the design library to your storybook
1. The full url - in read-only mode, the link to your storybook will appear in the design library as a reference to the storybook
2. We extract the story kind and the story name to render the Brand.ai component in storybook.

Note: If you want the same Brand.ai component to be displayed for multiple stories of the same kind, you can paste a partial url containing only the selectedKind

`http://localhost:9001/?selectedKind=Button`

