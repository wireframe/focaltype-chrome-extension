$(function() {
  var FOCALTYPE_TEMPLATE = '<div class="focaltype-overlay">'+
    '<img src="chrome-extension://giicebkehhklkbliaifmmfnjdmlellkb/images/logo.png" />'+
    'Focaltype'+
    '<a href="#" class="close">close</a>'+
    '<textarea></textarea>'+
  '</div>';

  var $document = $(document);
  var $body = $(document.body);

  var $focaltypeOverlay = $(FOCALTYPE_TEMPLATE).appendTo($body);
  var $focaltypeTextarea = $focaltypeOverlay.find('textarea');
  var $targetInput = null;

  $document.on('focus', 'textarea', function() {
    var $input = $(this);
    if ($input.parent().hasClass('focaltype-overlay')) {
      return;
    }
    $body.addClass('focaltyped');
    $targetInput = $input
    $focaltypeTextarea.val($input.val()).attr('placeholder', $input.attr('placeholder')).focus();
  });

  $focaltypeOverlay.on('click', '.close', function(e) {
    e.preventDefault();
  });
  $focaltypeOverlay.on('blur', 'textarea', function() {
    $body.removeClass('focaltyped');
    if ($targetInput) {
      $targetInput.val($focaltypeTextarea.val());
      $targetInput = null;
      $focaltypeTextarea.val('').removeAttr('placeholder');
    }
  });
});
