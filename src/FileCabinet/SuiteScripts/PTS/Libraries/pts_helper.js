// eslint-disable-next-line no-undef
define(["N/search","N/log"], function (search,log) {

    function groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
    
    function sum(arr, k) {
        if (Array.isArray(arr)) {

            var ar;
            if (k)
                ar = arr.map(function (x) {
                    return toNum(x[k]);
                });
            else ar = arr;

            return ar.reduce(function (a, b) {
                return a + b;
            }, 0);


        } else if (Array.isArray(k) && typeof arr === 'object') {
            var values = k.map(function (c) {
                return arr[c];
            })
            return sum(values)
        }
    }

    function toNum(s) {
        s = parseFloat(s);
        if (isNaN(s))
            return 0
        else
            return s;
    }

    function getSearch(type, filters, columns) {
        try {
            var dynamic_search
            if (typeof type === 'string' || type instanceof String) {
                dynamic_search = search.create({
                    type: type,
                    filters: filters,
                    columns: columns
                });

            } else {
                dynamic_search = type
                columns = JSON.parse(JSON.stringify(dynamic_search)).columns
            }

            var resultOut = [];
            var myPagedData = dynamic_search.runPaged({ pageSize: 1000 });
            myPagedData.pageRanges.forEach(function (pageRange) {
                var myPage = myPagedData.fetch({
                    index: pageRange.index
                });
                myPage.data.forEach(function (res) {
                    var values = {
                        id: res.id

                    };
                    //iterate over the collection of columns for the value
                    columns.forEach(function (c, i) {

                        var keyName = "";

                        if (c.join)
                            keyName = c.join + "_" + c.name
                        else if (c.name.indexOf("formula") > -1)
                            keyName = c.name + "_" + i
                        else
                            keyName = c.name;

                        var value = res.getText(c);

                        if (value == null) {
                            values[keyName] = res.getValue(c);
                        } else {

                            values[keyName] = res.getValue(c);

                            values[keyName + "_txt"] = res.getText(c);
                        }
                    });
                    resultOut.push(values);
                });
            });
            return resultOut;
        }
        catch (e) {
            log.error("getSearch failed due to an exception", e);
        }
    }

    function removeLines(currentRecord, sublist) {
        while (currentRecord.getLineCount(sublist) > 0) {
            currentRecord.removeLine({
                sublistId: sublist,
                line: 0
            });
        }
    }

    function getLines(rec, sublist, cols) {
        var result = [];
        var lineCount = rec.getLineCount(sublist);
        for (var i = 0; i < lineCount; i++) {
            var row = {};
            for (var j = 0; j < cols.length; j++) {
                try {
                    row[cols[j]] = rec.getSublistValue({
                        fieldId: cols[j],
                        sublistId: sublist,
                        line: i
                    })
                } catch (e) {
                    log.error("getLines:getSublistValue failed", e)
                }
                try {
                    row[cols[j] + "_txt"] = rec.getSublistText({
                        fieldId: cols[j],
                        sublistId: sublist,
                        line: i
                    })

                } catch (e) {
                    log.error("getLines:getSublistText failed", e)
                }
            }
            result.push(row)
        }
        return result;
    }

    function pick(arrobj, key) {

        if (Array.isArray(arrobj) && typeof key === 'string') {
            return arrobj.map(function (c) {
                return c[key]
            })
        } else if (Array.isArray(key) && typeof arrobj === 'object') {
            return key.map(function (c) {
                return arrobj[c]
            })
        }
    }

    function unique(arr, key) {
        if (key) {
            return arr.filter(function (c, i, a) {
                var list = a.map(function (x) {
                    return x[key]
                });
                if (list.indexOf(c[key]) == i)
                    return c;
            })
        } else {
            return arr.filter(function (c, i, a) {
                if (a.indexOf(c) == i)
                    return c;
            })
        }
    }

    function removeNullOrDefault(arr) {
        return arr.filter(function (c) {
            if (c != null && c != undefined && c != "")
                return c;
        });
    }

    function isNullorDefault(s) {
        if (s == undefined || s == null || s == "")
            return true;
        else
            return false;
    }

    function isObjectChanged(obj1, obj2) {
        var isChanged = false;
        if (!isNullorDefault(obj1) && !isNullorDefault(obj2)) {
            var keys = Object.keys(obj1);
            var values = keys.map(function (c) {
                return {
                    lhs: obj1[c],
                    rhs: obj2[c]
                }
            });

            var res = values.filter(function (c) {
                if (c.lhs != c.rhs) {
                    return c;
                }
            });

            if (res.length > 0) {
                isChanged = true;
            }
        }
        return isChanged;
    }

    return {
        groupBy: groupBy,
        sum: sum,
        toNum: toNum,
        getSearch: getSearch,
        removeLines: removeLines,
        getLines: getLines,
        isObjectChanged: isObjectChanged,
        isNullorDefault: isNullorDefault,
        removeNullOrDefault: removeNullOrDefault,
        unique: unique,
        pick: pick
    }
})
