export default (options, callback) => {
  var url = options.host + '/'+ options.organizationName + '/' + options.libraryName + '/style-data.json?exportFormat=list';
  if (options.libraryKey) {
    url += '&key=' + options.libraryKey;
  }

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      if (xhr.response) {
        var response = JSON.parse(xhr.response);
        if (response.list) {
          return callback(null, response.list);
        }
      }
    } else {
      return callback('Error fetching design library. http status: ' + xhr.status);
    }
  }.bind(this);

  xhr.onerror = function() {
    return callback('could not send request to the server');
  };

  xhr.open('GET', url, true);

  xhr.setRequestHeader("Content-Type", 'application/json');
  xhr.send();
};
