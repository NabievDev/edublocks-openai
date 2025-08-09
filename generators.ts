Blockly.Python['import_openai'] = function(block) {
  var code = 'from openai import OpenAI\n';
  return code;
}

Blockly.Python['OpenAI'] = function(block) {
  const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
  const code = `OpenAI(${parameters})\n`;
  return code;
}