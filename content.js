$(function() {
  var FOCALTYPE_TEMPLATE = '<div class="focaltype-overlay">'+
    '<a href="#" class="close">close</a>'+
    '<textarea></textarea>'+
  '</div>';

  var $document = $(document);
  var $body = $(document.body);

  var $focaltypeOverlay = $(FOCALTYPE_TEMPLATE).appendTo($body);
  var $focaltypeTextarea = $focaltypeOverlay.find('textarea');
  var $targetInput = null;

  $document.on('focus', 'textarea', function() {
    console.log('focus');
    var $input = $(this);
    console.log($input);
    if ($input.parent().hasClass('focaltype-overlay')) {
      console.log('skip');
      return;
    }
    $body.addClass('focaltyped');
    $targetInput = $input
    $focaltypeTextarea.val($input.val()).attr('placeholder', $input.attr('placeholder')).focus();
  });

  $focaltypeTextarea.on('blur', function() {
    console.log('blur');
    $body.removeClass('focaltyped');
    if ($targetInput) {
      $targetInput.val($focaltypeTextarea.val()).focus();
      $targetInput = null;
      $focaltypeTextarea.val('').removeAttr('placeholder');
    }
  });

  console.log("loaded");
});
