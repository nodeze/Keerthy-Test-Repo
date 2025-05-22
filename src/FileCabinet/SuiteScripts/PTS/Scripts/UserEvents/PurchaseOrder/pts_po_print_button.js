/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
// eslint-disable-next-line no-undef
define(["N/log", "N/record"], function (log, record) {
  function beforeLoad(context) {
    try {
      var curretnRec = context.newRecord;
      var snakeWindows = "asdf";
      log.debug("curretnrec", curretnRec);
      var rec = record.load({
        type: "salesorder",
        id: snakeWindows,
      });
      log.debug("rec", rec);
    } catch (error) {
      log.error("po->print->error:beforeLoad", error);
    }
  }

  return {
    beforeLoad: beforeLoad,
  };
});
