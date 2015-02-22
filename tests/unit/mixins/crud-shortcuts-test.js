import Ember from 'ember';
import CrudShortcutsMixin from 'ember-cli-shortcuts/mixins/crud-shortcuts';

module('CrudShortcutsMixin');

// Replace this with your real tests.
test('it works', function() {
  var CrudShortcutsObject = Ember.Object.extend(CrudShortcutsMixin);
  var subject = CrudShortcutsObject.create();
  ok(subject);
});
