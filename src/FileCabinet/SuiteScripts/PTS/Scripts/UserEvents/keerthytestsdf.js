/**
*@NApiVersion 2.1
*@NScriptType UserEventScript
*/
// eslint-disable-next-line no-undef
define(["N/log"], function(log) {
 
    function afterSubmit(context) {
        var soRec = context.newRecord;
        var tranid = soRec.getValue("tranid");
        log.debug("Transaction ID Retrieved", tranid);
        log.debug("Transaction ID Retrieved", tranid);
        log.debug("Transaction ID Retrieved5", tranid);
        log.debug("Transaction ID Retrieved6", tranid);
        log.debug("Transaction ID Retrieved7", tranid);

    }
 
    return {
        afterSubmit: afterSubmit
    };
});