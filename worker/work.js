self.addEventListener('message', function (e) {
    console.log(e)
    self.postMessage('You said: ' + e.data.content);
  }, false);