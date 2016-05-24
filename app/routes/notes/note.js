import Ember from 'ember';

export default Ember.Route.extend({
  model({note_id}) {
    return this.store.findRecord('note', note_id);
  }
});
