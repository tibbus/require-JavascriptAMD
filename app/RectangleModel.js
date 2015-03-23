define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    return Backbone.Model.extend({
        validate: function(attrs) {
            var validColors = ['white', 'red', 'blue', 'yellow', 'green'];
            var colorIsValid = function (attrs) {
                if (!attrs.color) {
                    return true;
                }
                return _(validColors).include(attrs.color);
            }
            if(!colorIsValid(attrs)){
                return 'color must be one of:' + validColors.join(',');
            }
        }
    });
});