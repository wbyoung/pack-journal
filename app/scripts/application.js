'use strict';

window.App = Ember.Application.create();
Ember.AdmitOne.setup();

// Set config params for the mapbox component
Ember.config = {
  MAPKEY: 'athorak.ile4f80n',
  center: [45.46, -122.7],
  zoom: 8
};

require('./components/map-display.js');
require('./models/trip-model');
require('./models/user-model');
require('./router');
require('./routes/signup-route');
require('./routes/login-route');
require('./routes/logout-route');
require('./routes/trips-route');
require('./routes/trip-route');
require('./routes/add-route');
require('./routes/trip-edit-route');
require('./routes/trip-delete-route');
require('./controllers/login-controller');
require('./adapters');
