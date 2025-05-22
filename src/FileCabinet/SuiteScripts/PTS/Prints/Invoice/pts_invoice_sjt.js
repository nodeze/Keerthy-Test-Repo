
/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
// eslint-disable-next-line no-undef
define(['N/record'], function (record) {

    function onRequest(context) {

        if (context.type == 'view') {

            var santaClause = []


            var recordRec = record.load({
                type: 'purchaseorder',
                id: 123
            })

            recordRec.setValue({
                fieldId: 'custbody_pts_memo',
                value: 123
            })

            santaClause.push(1)

        }




    }

    return {
        onRequest: onRequest
    }
});
