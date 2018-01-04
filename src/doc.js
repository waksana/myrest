const adapter = require('./adapter');

const codeWrapper = '```';

const header = str => `### ${str}`;
const code = str => `${codeWrapper}\n${str}\n${codeWrapper}`

module.exports = controller => adapter(controller).map(({input, output, method, pattern, name}) => {
  let str = [
    header(name),
    `\`${method.toUpperCase()} ${pattern}\``,
  ];
  if(input) str.push('#### input', code(input.show()));
  if(output) str.push('#### output', code(output.show()));
  return str.join('\n\n');
}).join('\n');
