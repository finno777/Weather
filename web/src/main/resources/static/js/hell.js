
function sendToController(newURL, data, methodType) {
    $.ajax({
        url: newURL,
        type: methodType,
        contentType: 'application/json',
        data: data,
        success: (function (data, textStatus, jqXHR) {
            if (textStatus === "Multi-Status" || jqXHR.status === 207 || jqXHR.statusText === "Multi-Status" ||
            data != null ? data.status != null ? data.status === "MATERNITY_LEAVE_DIVIDED" : false : false) {
            }
        })
    });
}
function onApplyPlan() {
    var rejectedMessage = null;
    var data = '[';

    $("#employeeVacations > .vacation-row").each(function (i, elem) {

        var vacationRow = $(elem);
        if ((i == $("#employeeVacations > .vacation-row").length - 1) && vacationRow.hasClass("removed")) {
            data = data.substring(0, data.length - 1);
            return true;
        }
        if (vacationRow.hasClass("removed")) {
            return true;
        }

        var vacationId = vacationRow.attr('data-vacation-id');
        var vacationType = $(vacationRow).find('.vacation-type option:selected').val();

        var vacationStatus = vacationRow.attr('data-vacation-status');
        var vacationComment = commentRow.find('.comment-input').val();
        var vacationDeputy = commentRow.attr('data-vacation-deputy');
        var realVacations = getRealVacationsOfVacationRow(vacationRow, realVacationsRow);

        var realVacationsJson = '';
        if (realVacations != null && realVacations != '' && realVacations.length != 0) {
            realVacationsJson = '[';
            realVacations.forEach(function (elem, i) {
                realVacationsJson += JSON.stringify({
                    'id': elem.id,
                    'vacationStart': moment(elem.vacationStart).format('YYYY-MM-DD'),
                    'vacationEnd': moment(elem.vacationEnd).format('YYYY-MM-DD'),
                    'lengthInDays': elem.lengthInDays
                });
                if (i < realVacations.length - 1)
                    realVacationsJson += ',';
            });
            realVacationsJson += ']';
        } else {
            realVacationsJson = '[]';
        }

        data += JSON.stringify({
            'id': vacationId,
            'vacationStart': startDate.format('YYYY-MM-DD'),
            'vacationEnd': endDate.format('YYYY-MM-DD'),
            'vacationType': vacationType,
            'vacationStatus': vacationStatus,
            'vacationDeputyLogin': vacationDeputy,
            'employeeLoginName': EMPLOYEE_ID,
            'vacationComment': vacationComment,
            'rejectedMessage': rejectedMessage,
            'realVacations': realVacationsJson
        });
        if (i < $("#employeeVacations > .vacation-row").length - 1)
            data += ',';
    });
    data += ']';

    // alert(JSON.stringify(data));
    var methodType = 'POST';
    var newURL = '/api/employees/' + EMPLOYEE_ID + '/addPlan';
    sendToController(newURL, data, methodType);
}
