$(function() {
  console.log('here');
  var host = localStorage['host'];

  chrome.tabs.getSelected(null, function(tab) {
    var url = tab.url;
    var title = tab.title;

    console.log('loaded into: ' + url);
  });
});
