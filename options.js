$(function() {
  var $host = $('input[name=host]');
  var $reachToken = $('input[name=reach_token]');

  $host.val(localStorage['host']);
  $reachToken.val(localStorage['reach_token']);

  $('form').submit(function(e) {
    localStorage['host'] = $host.val();
    localStorage['reach_token'] = $reachToken.val();
    return false;
  });
});
