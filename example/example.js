const {input, output, get} = require('../ful/src/decorator');
const {c, t} = require('chkr');

class ExampleAPI {
  @get('/:id')
  @input(c.Obj({
    f: t.Num,
  }))
  async t1(ctx, data) {
    console.log(data);
  }
}
