var podcast = {
    "episodes": [
        {
        "id": 1,
        "title": "Samantha Colas Miss Haiti Univers 2018 nan Chokarella",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "date": "11/4/2018",
        "duration": 28,
        "file_path": 68
        }, {
        "id": 2,
        "title": "MechansT ap prezante premye albòm li nan chokarella",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "date": "1/21/2018",
        "duration": 21,
        "file_path": 65
        }, {
        "id": 3,
        "title": "Wanito reyaktive. L’ap rakonte rezon absans li sou sèn nan",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "date": "8/23/2018",
        "duration": 20,
        "file_path": 92
        }, {
        "id": 4,
        "title": "Trouble Boy ap prezante nouvo albòm li nan The Morning Show",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "date": "9/30/2018",
        "duration": 18,
        "file_path": 53
        }, {
        "id": 5,
        "title": "Atis brezilyen Amaral TiBlan nan Chokarella",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
        "date": "6/30/2018",
        "duration": 9,
        "file_path": 68
        }, {
        "id": 6,
        "title": "Carel Pedre x Pascal Milien",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "date": "7/1/2018",
        "duration": 16,
        "file_path": 89
        }, {
        "id": 7,
        "title": "Buteur haitien",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "date": "3/25/2019",
        "duration": 27,
        "file_path": 56
        }, {
        "id": 8,
        "title": " Chokarella Interview",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "date": "6/2/2019",
        "duration": 9,
        "file_path": 53
        }, {
        "id": 9,
        "title": "Riva Precil & Monvelyno nan Chokarella pou pale de patisipasyon yo nan Carifesta",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "date": "6/1/2018",
        "duration": 20,
        "file_path": 81
        }, {
        "id": 10,
        "title": "Ti Joe Zenny ap Prezante Albòm Invictus Kreyol la Nan Chokarella",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "date": "8/17/2018",
        "duration": 15,
        "file_path": 93
        }
    ]
}

$(document).ready(function() {
    var episodeTemplate = $("#episode-template").html();
    var compliedEpisodeTemplate = Handlebars.compile(episodeTemplate);
    $(".episode-list-container").html(compliedEpisodeTemplate(podcast));
});