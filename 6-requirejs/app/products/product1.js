define(["./product2"], function(product2) {
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                product2.add(this);
                $('#aaa').text("hello world");
            }
        }
    }
);