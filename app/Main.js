define(["require", "exports", 'RectangleModel', 'RectangleView'], function (require, exports, RectangleModel, RectangleView) {
    return {
        start: function(){
            var rectangle = new RectangleModel({
                width: 100,
                height: 60,
                position: {
                    x: 300,
                    y: 150
                },
                color: 'green'
            });

            var rectangleView = new RectangleView({model: rectangle});
            $('div#canvas').append(rectangleView.render().el);

            rectangle.on('invalid', function(model, error) {
               console.log(error);
            });
            // add observer just for color attribute :
            rectangle.on('change:color', function(){
                    rectangleView.render();
            })
            // color is valid, set the new color:
            rectangle.set('color', 'red', {validate : true});
            // color is invalid, will not bet set and will throw and error
            rectangle.set('color', 'mov', {validate : true});

            // add global observer ::
            rectangle.on('change', function(){
                    rectangleView.render();
            })
            rectangle.set('height', 200);
        }
    };
});
