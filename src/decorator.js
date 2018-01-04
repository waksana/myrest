function registry(target) {
  if(target.isAPI) return;
  target._router = new Map();
  target._input = new Map();
  target._output = new Map();
  target.isAPI= true;
}

const curd = method => pattern => (target, name, descriptor) => {
  registry(target);
  target._router.set(name, {method, pattern});
  return descriptor;
}

const check = io => type => (target, name, descriptor) => {
  registry(target);
  target['_' + io].set(name, type);
  return descriptor;
}

module.exports = {
  get: curd('get'),
  post: curd('post'),
  del: curd('delete'),
  put: curd('put'),

  input: check('input'),
  output: check('output'),
}
