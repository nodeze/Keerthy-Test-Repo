const record = require("../../../../../../__mocks__/N/record");

/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
define([], function () {

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
