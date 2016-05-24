import Ember from 'ember';

export default Ember.Component.extend({
  notes: null,
  sortProperties: ['createdAt:desc'],
  orderedNotes: Ember.computed.sort('notes', 'sortProperties')
});
