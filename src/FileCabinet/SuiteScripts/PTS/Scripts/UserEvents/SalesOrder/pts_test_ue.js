/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define(["N/log"], function (log) {
  function beforeSubmit(context) {
    var rec = context.newRecord;
    var date = rec.getValue("trandate");
    log.debug("date", date);
  }
  return {
    beforeSubmit: beforeSubmit,
  };
});
