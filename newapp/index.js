/**
 * Created by a2014 on 14-8-13.
 */
function Page(o) {
    this.opt = o;
    this.fill = o.fill;
    this.c = o.c;
    this.init(o.height || document.documentElement.clientHeight);
    this.frame = o.frame;
}
Page.prototype = {
    init: function (height) {
        this.el = util.createEl('div', {
            className: 'page',
            style: {
                height: height + 'px',
                backgroundColor: randomColor()
            }
        })
        this.c.appendChild(this.el);
        this.fill && this.fill.call(this);
    },
    animate: function () {
        this.frame && this.frame.call(this);
    }
}
function randomColor() {
    return 'rgb(' + Math.ceil(Math.random() * 10000 % 255) + ',' + Math.ceil(Math.random() * 10000 % 255) + ',' + Math.ceil(Math.random() * 10000 % 255) + ')';
}
