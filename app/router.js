import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes', function() {
    this.route('note', {path: ':note_id'}, function() {
      this.route('edit', {path: 'edit'});
    });
  });
});

export default Router;
