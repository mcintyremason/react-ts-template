/**
 * The `module` mode inherited by `tsconfig.json` is not compatible with the
 * test runner, so it must be overriden to `commonjs`.
 */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs'
  }
});

const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
