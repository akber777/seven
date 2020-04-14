$(document).ready(function(){


    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [42.442574,19.268646],
            zoom: 8,
            controls:[]
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark1 = new ymaps.Placemark([42.285610,18.836531], {
            balloonContent: 'Large icon'
        }, {
            iconLayout: 'default#image',
            // iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'img/placemarker.png',
            iconImageSize: [70, 76],
            iconImageOffset: [-35, -63]
        });

        myMap.geoObjects
        .add(myPlacemark1);
    }














})