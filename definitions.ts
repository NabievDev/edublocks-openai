const COLOR = "#7c3aed"; // локальная константа внутри IIFE

Blockly.Blocks['import_openai'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("from openai import OpenAI");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOR);
  }
}

Blockly.Blocks['openai'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("OpenAI(");
    this.appendValueInput("parameters")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setColour(COLOR);
  }
}