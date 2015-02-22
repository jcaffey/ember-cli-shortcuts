import Ember from 'ember';

export default Ember.Mixin.create({
  init: function () {
    this._super()

    var self = this;
    Ember.$(document).on('keydown', function (e) {
      var routeName = self.get('container').lookup('controller:application').get('currentRouteName');
      switch (e.which) {
        case 187: // on a cop
          self.send(("new-" + routeName.split('.')[0]).camelize());
          break; 
      }
    });
  }
});
