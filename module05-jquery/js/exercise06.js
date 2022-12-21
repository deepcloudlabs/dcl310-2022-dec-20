let colorIndex= 0;

const colors = [
    'Khaki', 'LightSlateGray' , 'Blue',
    'BlueViolet', 'Brown', 'CadetBlue',
    'Chocolate', 'Crimson', 'DarkBlue',
    'DarkGoldenRod', 'DarkMagenta', 'DarkOrange',
    'DeepSkyBlue', 'Gold', 'Green',
    'Maroon', 'MediumAquaMarine', 'Moccasin',
    'Navy', 'OliveDrab', 'PaleVioletRed'
] ;

function getNextColor() {
    return colors[colorIndex++];
}

const colorMap = {} ;

function getColor(genre){
    if (!colorMap.hasOwnProperty(genre))
        colorMap[genre]= getNextColor();
    return colorMap[genre];
}

$(document).ready(function(){
    $('#movies tbody tr').each(function(){
        const td= $('td:eq(3)',$(this));
        const genres= td.text().trim().replace(/\s+/g,'').split(',');
        td.text('');
        $.each(genres,function(index,genre){
            td.append(  '<span class="badge" style="background-color: '
                + getColor(genre)
                + ';">' + genre
                + '</span> ');
        });
    });
});