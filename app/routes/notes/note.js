import Ember from 'ember';

export default Ember.Route.extend({
  model({note_id}) {
    return this.store.findRecord('note', note_id);
  },

  actions: {
    deleteNote() {
      if (!confirm('Are you sure to delete this note?')) {
        return;
      }

      this.modelFor('notes.note').destroyRecord();

      this.transitionTo('notes.index');
    }
  }
});
