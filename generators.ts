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
  return [`OpenAI(${inside})`, Blockly.Python.ORDER_FUNCTION_CALL];
};
