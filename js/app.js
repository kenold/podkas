var podcast = {
    "episodes": [
      {
        "id": 1,
        "title": "in libero ut massa volutpat convallis morbi odio odio elementum eu",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "date": "8/11/2019",
        "duration": 47,
        "file_path": 95,
        "status": ""
      }, {
        "id": 2,
        "title": "pede justo eu massa donec dapibus duis at velit eu est congue",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "date": "7/1/2019",
        "duration": 25,
        "file_path": 74,
        "status": "Played"
      }, {
        "id": 3,
        "title": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "date": "7/29/2019",
        "duration": 52,
        "file_path": 85,
        "status": ""
      }, {
        "id": 4,
        "title": "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "date": "9/14/2019",
        "duration": 23,
        "file_path": 64,
        "status": ""
      }, {
        "id": 5,
        "title": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "date": "3/19/2019",
        "duration": 5,
        "file_path": 63,
        "status": "Played"
      }, {
        "id": 6,
        "title": "et tempus semper est quam pharetra magna ac consequat metus",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "date": "6/20/2019",
        "duration": 8,
        "file_path": 60,
        "status": "Played"
      }, {
        "id": 7,
        "title": "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "date": "7/22/2019",
        "duration": 5,
        "file_path": 60,
        "status": "Played"
      }, {
        "id": 8,
        "title": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "date": "2/6/2019",
        "duration": 29,
        "file_path": 75,
        "status": "Played"
      }
    ]
}

$(document).ready(function() {
    // register handlebarsIntl helper
    HandlebarsIntl.registerWith(Handlebars);

    var episodeTemplate = $("#episode-template").html();
    var compliedEpisodeTemplate = Handlebars.compile(episodeTemplate);
    $(".episode-list-container").html(compliedEpisodeTemplate(podcast));

});