window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');
// Pusher.logToConsole = true;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key:'d6d0e765f0a66298cf30',
    cluster: 'us3',
    forceTLS: true,
   //wsHost: 'ws-your-pusher-app-cluster',
    // wsPort: 6001,
  //  disableStats: true,
   enabledTransports: ['ws', 'http'], // <-- only use ws and wss as valid transports

});
var pusher = new Pusher('d6d0e765f0a66298cf30', {
    cluster: 'us3'
});

// var channel = pusher.subscribe('Invite-channel');
// channel.bind('InviteEvent', function(data) {
//     app.messages.push(JSON.stringify(data));
// });
