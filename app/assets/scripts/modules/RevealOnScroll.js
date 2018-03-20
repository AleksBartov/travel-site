import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var itIsThis = this;
    this.itemsToReveal.each(function() {
      var that = this;
      new Waypoint({
        element: that,
        handler: function() {
          $(that).addClass('reveal-item--is-visible');
        },
        offset: itIsThis.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
