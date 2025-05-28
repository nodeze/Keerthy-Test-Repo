/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
 define(["N/log"], function(log) {


   
    /**
     * Description placeholder
     *
     * @param {*} context
     */
    function beforeLoad(context) {
        try {
            var rec = context.newRecord;

            var memo = rec.getValue('MEMO');
            log.debug('memo----->', memo);

           rec.setValue({
                fieldId : 'custbody_memo_2',
                value : memo
            })
            
        } catch (error) {
            log.error('Error in before load-------->', error);
        }
    }

    return {
        beforeLoad: beforeLoad,
      
    }
});
