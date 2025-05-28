/**
*@NApiVersion 2.1
*@NScriptType UserEventScript
*/
define(["N/log"], function(log) {
 
    function afterSubmit(context) {
        var soRec = context.newRecord;
        var tranid = soRec.getValue("tranid");
        log.debug("Transaction ID Retrieved", tranid);

    }
 
    return {
        afterSubmit: afterSubmit
    };
});