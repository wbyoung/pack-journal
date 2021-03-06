'use strict';

App.TripAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.UserAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.TripSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    payload.trips.forEach(function(trip) {
      trip.waypoints = trip.features.waypoints;
      delete trip.features;
    });

    return this._super(store, type, payload);
  },

  serialize: function(trip) {
    var json = {
      name: trip.get('name'),
      features: {
        waypoints: trip.get('waypoints')
      }
    };

    return json;
  }
});
