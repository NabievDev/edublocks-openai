// Цвет категории
const OA_COLOR = "#7c3aed"; // фиолетовый

// 2.1 Импорт OpenAI: from openai import OpenAI
Blockly.Blocks['oa_import_openai'] = {
  init: function () {
    this.appendDummyInput().appendField("from openai import OpenAI");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(OA_COLOR);
    this.setTooltip("Импорт клиента OpenAI");
    this.setHelpUrl("");
  }
};

// 2.2 Создать клиента: client = OpenAI()
Blockly.Blocks['oa_create_client'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("client"), "CLIENT")
      .appendField(" = OpenAI()");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(OA_COLOR);
    this.setTooltip("Создаёт объект клиента OpenAI");
    this.setHelpUrl("");
  }
};

// 2.3 Создать ответ: response = client.responses.create({...})
Blockly.Blocks['oa_responses_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("response"), "RESPONSE")
      .appendField(" = ")
      .appendField(new Blockly.FieldVariable("client"), "CLIENT")
      .appendField(".responses.create(");

    this.appendValueInput("MODEL").setCheck("String").appendField("model");
    this.appendValueInput("INPUT").setCheck("String").appendField("input");
    this.appendDummyInput().appendField(")");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(OA_COLOR);
    this.setTooltip("Вызов client.responses.create(model=..., input=...)");
    this.setHelpUrl("");
  }
};

// 2.4 Печать текста ответа: print(response.output_text)
Blockly.Blocks['oa_print_output_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("print(")
      .appendField(new Blockly.FieldVariable("response"), "RESPONSE")
      .appendField(".output_text)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(OA_COLOR);
    this.setTooltip("Печатает response.output_text");
    this.setHelpUrl("");
  }
};