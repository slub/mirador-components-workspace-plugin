import mirador from 'mirador/dist/es/src/index';
import workspaceComponentsPlugins from '../../src';

const config = {
  id: 'demo',
  catalog: [{
    manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  }],
  windows: [{
      loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  }]
};

mirador.viewer(config, [...workspaceComponentsPlugins]);
