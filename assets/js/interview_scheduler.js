var API_KEY = "AIzaSyDrAcICkgcrMg7m5bWQ7cJlunsZSpDHe_Q"
function appendResults(text) {
  var results = document.getElementById('results');
  results.appendChild(document.createElement('P'));
  results.appendChild(document.createTextNode(text));
}

function makeRequest() {

  loadCalendarApi();

  /*
  var request = gapi.client.urlshortener.url.get({
    'shortUrl': 'http://goo.gl/fbsS'
  });
  request.then(function(response) {
    appendResults(response.result.longUrl);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
*/
}

function init() {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
  //gapi.client.load('urlshortener', 'v1').then(makeRequest);
}





function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

 function listUpcomingEvents() {
  var request = gapi.client.calendar.events.list({
    'calendarId': 'getchoice.io_2fgl1h8ur2ddsc31qd799bre5o',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }

  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
