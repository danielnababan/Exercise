+function ($) {
    var map;
    $.fn.fmiAlpaca.registerPlugin({
        type: 'my-maps',
        render: function (self, $element, options) {
            map = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: -34.397,
                    lng: 150.644,
                },
                zoom: 8,
            });
        },
        setData: function (self, $element, options, data) {

        },
        getData: function (self, $element, options) {

        }
    });

}(jQuery);
