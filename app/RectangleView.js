define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'rectangle',
        events: {
            'click': 'move'
        },
        render: function(){
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },
        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') + 'px'
            })
        },
        setPosition: function() {
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y,
                position: 'relative'
            })
        },
        setColor: function(){
            this.$el.css('background-color', this.model.get('color'));
        },
        move: function(){
            console.log('click'); 
            this.$el.css('left', this.$el.position().left + 10);
        }
    });
});