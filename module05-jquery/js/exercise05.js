$(document).ready(function () {
    function numeric(val1, val2) {
        return Number(val1) - Number(val2);
    }

    function dictionary(val1, val2) {
        return val1.localeCompare(val2);
    }

    function sortTableByColumn(table, index, compareFunction) {
        let tbody = table.find('tbody');
        tbody.find('tr').sort(
            function (p, q) {
                const pval = $('td:eq(' + index + ')', p).text().trim();
                const qval = $('td:eq(' + index + ')', q).text().trim();
                return compareFunction(pval, qval);
            }
        ).appendTo(tbody);
    }

    let columns = {
        'No': {index: 0, sort: sortTableByColumn, compareBy: numeric},
        'Title': {index: 1, sort: sortTableByColumn, compareBy: dictionary},
        'Directors': {index: 2, sort: sortTableByColumn, compareBy: dictionary},
        'Genres': {index: 3, sort: sortTableByColumn, compareBy: dictionary},
        'Year': {index: 4, sort: sortTableByColumn, compareBy: numeric}
    };

    function createButton(column) {
        return '<button class="btn btn-success" id="' + column.toLowerCase() + '">'
            + column
            + '</button>';
    }

    for (let column in columns) {
        let th = $('table thead th:eq(' + columns[column].index + ')');
        th.text('');
        th.append(createButton(column));
        $('#' + column.toLowerCase()).click(function () {
            let selectedColumn = columns[$(this).text()];
            selectedColumn.sort($('#movies'), selectedColumn.index, selectedColumn.compareBy
            );
        });
    }
});