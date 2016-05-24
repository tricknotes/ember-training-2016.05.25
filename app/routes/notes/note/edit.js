import Ember from 'ember';

export default Ember.Route.extend({
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
        this.transitionTo('notes.note.index', note);
      });
    }
  }
});
