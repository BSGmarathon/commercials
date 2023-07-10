/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

// This must go first so we can use module aliases!
/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('module-alias').addAlias('@esa-commercials', require('path').join(__dirname, '.'));

import { Configschema } from '@esa-commercials/types/schemas';
import type NodeCG from '@nodecg/types';
import { set } from './util/nodecg';

export = async (nodecg: NodeCG.ServerAPI<Configschema>): Promise<void> => {
  /**
   * Because of how `import`s work, it helps to use `require`s to force
   * things to be loaded *after* the NodeCG context is set.
   */
  set(nodecg);
  await require('./server').setup();
  require('./commercial');
};
