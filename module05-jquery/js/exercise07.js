const histogram= {};
const badges= {};

function createBadge(genre){
    if (badges.hasOwnProperty(genre)){
        return badges[genre];
    }
    const badge= ' <li role="presentation" class="active"> '
        + genre
        + ' <span class="badge">'
        + histogram[genre]
        + '</span></a></li> ';
    badges[genre]= badge;
    return badge;
}

function extractGenreColumn(tr){
    return $('td:eq(3)',$(tr));
}

function extractGenres(td){
    return td.text().trim().replace(/\s+/g,'').split(',');
}

function computeHistogram(){
    const td= extractGenreColumn(this);
    $.each(extractGenres(td),function(index,genre){
        if(!histogram.hasOwnProperty(genre)){
            histogram[genre] = 0;
        }
        histogram[genre] = histogram[genre] + 1;
    });
}

function badgeHistogram(){
    const td= extractGenreColumn(this);
    const genres= extractGenres(td);
    td.empty();
    const ul= $('<ul class="nav nav-pills" role="tablist">').appendTo(td);
    $.each(genres,function(index,genre){
        ul.append(createBadge(genre));
    });
    $(this).append('</ul>');
}

$(document).ready(function(){
    $('#movies tbody tr').each(computeHistogram);
    $('#movies tbody tr').each(badgeHistogram);
})