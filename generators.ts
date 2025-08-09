// Флаг, чтобы импорт сгенерировался один раз
let __oa_import_emitted = false;

function ensureOpenAIImport () {
  if (!__oa_import_emitted) {
    __oa_import_emitted = true;
    Blockly.Python.definitions_["import_openai_client"] = "from openai import OpenAI";
  }
}

Blockly.Python['oa_import_openai'] = function(block) {
  ensureOpenAIImport();
  return ""; // сам импорт попал в definitions_
};

Blockly.Python['oa_create_client'] = function(block) {
  ensureOpenAIImport();
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('CLIENT'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${client} = OpenAI()\n`;
};

Blockly.Python['oa_responses_create'] = function(block) {
  ensureOpenAIImport();
  const responseVar = Blockly.Python.nameDB_.getName(block.getFieldValue('RESPONSE'), Blockly.VARIABLE_CATEGORY_NAME);
  const clientVar   = Blockly.Python.nameDB_.getName(block.getFieldValue('CLIENT'), Blockly.VARIABLE_CATEGORY_NAME);

  let model = Blockly.Python.valueToCode(block, 'MODEL', Blockly.Python.ORDER_NONE) || '"gpt-5"';
  let input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_NONE) || "''";

  const code = `${responseVar} = ${clientVar}.responses.create(\n    model=${model},\n    input=${input}\n)\n`;
  return code;
};

Blockly.Python['oa_print_output_text'] = function(block) {
  const responseVar = Blockly.Python.nameDB_.getName(block.getFieldValue('RESPONSE'), Blockly.VARIABLE_CATEGORY_NAME);
  return `print(${responseVar}.output_text)\n`;
};