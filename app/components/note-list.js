import Ember from 'ember';

const compareIdAsNumber = (a, b) => {
  let compareKey = 'id';
  let aKey = Number(a.get(compareKey));
  let bKey = Number(b.get(compareKey));

  if (aKey > bKey) {
    return -1;
  } else if (aKey < bKey) {
    return 1;
  } else {
    return 0;
  }
};

export default Ember.Component.extend({
  notes: null,
  orderedNotes: Ember.computed('notes.@each.id', {
    get() {
      return this.get('notes').toArray().sort(compareIdAsNumber);
    }
  })
});
