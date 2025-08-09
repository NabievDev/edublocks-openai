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