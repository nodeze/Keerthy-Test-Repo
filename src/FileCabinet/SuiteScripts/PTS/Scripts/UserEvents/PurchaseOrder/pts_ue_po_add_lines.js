/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
// eslint-disable-next-line no-undef
define(["N/log"], function (log) {
  function beforeSubmit(context) {
    var rec = context.newRecord;
    var memo = rec.getValue("memo");
    log.debug("memmo", memo);
  }

  return {
    beforeSubmit: beforeSubmit,
  };
});
