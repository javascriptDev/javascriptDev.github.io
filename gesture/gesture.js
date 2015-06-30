/**
 * Created by mtime on 15/6/30.
 */


function Gesture(opt) {
    this.el = opt.el;

    this.style = this.el.style;
    this.init();
}

Gesture.prototype = {
    init: function () {
        var style = this.style;

        style.willChange = 'transform';
        style.transform = 'scale(1)';
        style.transition = '0s all linear';

        this.addEve();
    },
    addEve: function () {
        var me = this;
        var touches = [], isScale = 0;

        this.el.addEventListener('touchstart', function (e) {
            var ts = e.touches;
            if (ts.length == 2) {
                touches.concat(ts);
                //取出坐标
                touches.concat([ts[0].pageX, ts[0].pageY, ts[1].pageX, ts[1].pageY]);

                isScale = 1;
            }
        });

        this.el.addEventListener('touchmove', function (e) {
            if (!isScale) return;
            var ts = e.touches, centerPoint = [];

            e.preventDefault();

            var p1x = ts[0].pageX,
                p1y = ts[0].pageY,
                p2x = ts[1].pageX,
                p2y = ts[1].pageY,
                p1xDiff = p1x - touches[2],
                p1yDiff = p1y - touches[3],
                p2xDiff = p2x - touches[4],
                p2yDiff = p2y - touches[5];

            var p1Dis = Math.sqrt(Math.pow(p1xDiff, 2) + Math.pow(p1yDiff, 2)),
                p2Dis = Math.sqrt(Math.pow(p2xDiff, 2) + Math.pow(p2yDiff, 2));

            //calc scale center point
            p1Dis > p2Dis ? centerPoint = [p2x, p2y] : centerPoint = [p1x, p1y];

            this.scale(centerPoint);
        })

        this.el.addEventListener('touchend', function (e) {
            //reset variable
            isScale = 0;
            touches.length = 0;
        })

    },

    scale: function (centerPoint) {
        //set scale center point
        this.setCenterPoint(centerPoint);


    },
    setCenterPoint: function (point) {
        this.style.transformOrigin = (point.join('px ') + 'px');
    },
    destroy: function () {

    }
}