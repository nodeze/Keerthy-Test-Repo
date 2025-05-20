/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
define([
  "./pts_po_print_data_module.js",
  "../../../Libraries/pts_helper.js",
  "N/log",
], function (datamodule, util, log) {
  function onRequest(context) {
    var allIds = [];
    var id = context.id;
    log.debug("id", id);
    util.setValue("test", 1);
    datamodule.setLines(allIds);
  }

  return {
    onRequest: onRequest,
  };
});
