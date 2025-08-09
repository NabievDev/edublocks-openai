// Один раз добавляем импорт
function ensureOpenAIImport() {
  if (!Blockly.Python.definitions_["oa_import_openai"]) {
    Blockly.Python.definitions_["oa_import_openai"] = "from openai import OpenAI";
  }
}

Blockly.Python['oa_import_openai'] = function(block) {
  ensureOpenAIImport();
  return ""; // импорт уже в definitions_
};

Blockly.Python['oa_openai'] = function(block) {
  ensureOpenAIImport();
  const params = Blockly.Python.valueToCode(block, 'parameters', Blockly.Python.ORDER_NONE) || "";
  const inside = params ? params : "";
  // это выражение: возвращаем [код, приоритет]
  return [`OpenAI(${inside})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['oa_client_send'] = function(block) {
  const client = Blockly.Python.valueToCode(block, 'CLIENT', Blockly.Python.ORDER_ATOMIC) || "client";
  const text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  return [`${client}.send(${text})`, Blockly.Python.ORDER_FUNCTION_CALL];
};