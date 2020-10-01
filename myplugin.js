+function ($) {
    var map;
    $.fn.fmiAlpaca.registerPlugin({
        type: 'dnababan-plugin',
        render: function (self, $element, options) {
            $element.append('<input type="text" class="dnababan-text">');
        },
        setData: function (self, $element, options, data) {
$element.find("dnababan-text").val(data);
        },
        getData: function (self, $element, options) {
return $element.find("dnababan-text").val();
        }
    });

}(jQuery);
