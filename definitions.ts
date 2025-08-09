(function() {
  const COLOR = "#7c3aed";

  // если блоки уже есть — выходим (защита от двойной загрузки)
  if (Blockly.Blocks['oa_import_openai'] && Blockly.Blocks['oa_openai']) return;

  // from openai import OpenAI
  Blockly.Blocks['oa_import_openai'] = {
    init: function() {
      this.appendDummyInput().appendField("from openai import OpenAI");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(COLOR);
      this.setTooltip("Импорт клиента OpenAI");
    }
  };

  // OpenAI(...) — БЛОК-ВЫРАЖЕНИЕ (output), чтобы можно было писать: client = OpenAI(...)
  Blockly.Blocks['oa_openai'] = {
    init: function() {
      this.appendDummyInput().appendField("OpenAI(");
      this.appendValueInput("parameters").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true);            // <— ключевой момент
      this.setColour(COLOR);
      this.setTooltip("Создаёт объект клиента OpenAI. Пример параметров: api_key=\"...\"");
    }
  };

  if (!Blockly.Blocks['oa_client_send']) {
    Blockly.Blocks['oa_client_send'] = {
      init: function() {
        this.appendValueInput("CLIENT").setCheck(null)
          .appendField("клиент");
        this.appendDummyInput().appendField(".send(");
        this.appendValueInput("TEXT").setCheck("String").appendField("текст");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(COLOR);
        this.setTooltip("Отправляет текст в ИИ и возвращает ответ");
      }
    };
  }
})();
