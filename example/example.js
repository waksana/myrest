const {input, output, get} = require('myrest/src/decorator');
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
