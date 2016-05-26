import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  setupController: function(controller, model) {
    this._super(...arguments);

    controller.set('params', {
      title: model.get('title'),
      body: model.get('body')
    });
  },

  actions: {
    updateNote() {
      let params = this.controller.get('params');
      let note = this.modelFor('notes.note');

      note.setProperties(params);
      note.save().then(() => {
        this.get('notify').success('Note updated.');

        this.transitionTo('notes.note.index', note);
      });
    }
  }
});
