import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('note');
  },

  actions: {
    createNote() {
      let note = this.store.createRecord('note', {
        title: '(no title)'
      });

      note.save().then(() => {
        this.transitionTo('notes.note', note);
      });
    }
  }
});
