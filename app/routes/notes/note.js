import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  model({note_id}) {
    return this.store.findRecord('note', note_id);
  },

  actions: {
    deleteNote() {
      if (!confirm('Are you sure to delete this note?')) {
        return;
      }

      this.modelFor('notes.note').destroyRecord();

      this.get('notify').success('Note deleted.');

      this.transitionTo('notes.index');
    }
  }
});
