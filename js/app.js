var podcast = {
    "episodes": [
        {
            "id": 1,
            "title": "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
            "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "date": "4/27/2019",
            "duration": 37,
            "file_path": 51
          }, {
            "id": 2,
            "title": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
            "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "date": "5/29/2019",
            "duration": 31,
            "file_path": 60
          }, {
            "id": 3,
            "title": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
            "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "date": "8/21/2019",
            "duration": 41,
            "file_path": 84
          }, {
            "id": 4,
            "title": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit",
            "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            "date": "7/15/2019",
            "duration": 5,
            "file_path": 54
          }, {
            "id": 5,
            "title": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
            "date": "9/12/2019",
            "duration": 33,
            "file_path": 75
          }, {
            "id": 6,
            "title": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "date": "4/3/2019",
            "duration": 13,
            "file_path": 88
          }, {
            "id": 7,
            "title": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "date": "2/18/2019",
            "duration": 10,
            "file_path": 61
          }, {
            "id": 8,
            "title": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
            "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "date": "9/9/2019",
            "duration": 54,
            "file_path": 58
          }, {
            "id": 9,
            "title": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
            "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "date": "2/21/2019",
            "duration": 38,
            "file_path": 96
          }, {
            "id": 10,
            "title": "potenti in eleifend quam a odio in hac habitasse platea dictumst",
            "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "date": "6/8/2019",
            "duration": 23,
            "file_path": 64
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