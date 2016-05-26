import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  model() {
    return this.store.findAll('note');
  },

  actions: {
    createNote() {
      let note = this.store.createRecord('note', {
        title: '(no title)'
      });

      note.save().then(() => {
        this.get('notify').success('Note created.');

        this.transitionTo('notes.note', note);
      });
    }
  }
});
