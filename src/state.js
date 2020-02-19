const prefixes = {
  acdh: 'https://vocabs.acdh.oeaw.ac.at/schema#',
  acdhi: 'https://id.acdh.oeaw.ac.at/',
};

const N3 = require('n3');

export default {
  prefixes,
  module: N3,
  store: new N3.Store(),
  parser: new N3.Parser(),
  // writer: new N3.Writer(null, { prefixes }), // reminiscence of an ancient technique we used, which since has stopped working
  processing: false,
  processingMessage: '',
  ttlString: '',
  ttlLength: 0,
  p: ['ttlString'],
  stored: true,
  update: 0,
};
