/**
*@NApiVersion 2.1
*@NScriptType UserEventScript
*/
define(["N/log"], function(log) {
 
    function afterSubmit(context) {
        var soRec = context.newRecord;
        var tranid = soRec.getValue("tranid");
        log.debug("Transaction ID Retrieved", tranid);
        log.debug("Transaction ID Retrieved2", tranid);

    }
 
    return {
        afterSubmit: afterSubmit
    };
});