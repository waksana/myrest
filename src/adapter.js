
module.exports = function(controller) {
  let {_input, _output, _router} = controller.prototype;
  let result = [];
  for(let [name, {method, pattern}] of _router) {
    let input = _input.get(name);
    let output = _output.get(name);
    const fn = controller.prototype[name];
    result.push({ fn, input, output, method, pattern, name });
  }
  return result;
};
