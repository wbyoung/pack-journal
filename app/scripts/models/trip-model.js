//Model
App.Trip = DS.Model.extend({
  name: DS.attr('string'),
  waypoints: DS.attr()
});