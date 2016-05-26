import Ember from 'ember';

export default Ember.Route.extend({
  didUrlChange: Ember.observer('router.url', function() {
    Ember.run.scheduleOnce('routerTransitions', () => {
      // Use `currentPath` for tracking, reporting or something.
      // let currentPath = this.get('router.url');
    });
  })
});
