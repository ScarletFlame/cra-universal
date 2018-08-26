const path = require('path');

const React = require('react');
import {
  createReactAppExpress,
  handleUniversalRender
} from '@cra-express/core';

const { default: App } = require('appbase/src/components/App');
const clientBuildPath = path.resolve(__dirname, '../client');

let AppEl = App;

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: () => handleUniversalRender(<AppEl />)()
});

if (module.hot) {
  module.hot.accept('appbase/src/components/App', () => {
    const { default: App } = require('appbase/src/components/App');
    AppEl = App;
    console.log('✅ Server hot reloaded App');
  });
}

module.exports = app;
