$(function() {
  $(document).on('focus', 'textarea', function() {
    console.log('here');
    $(this).addClass('focaltyped');
  });

  $(document).on('blur', 'textarea.focaltyped', function() {
    console.log('here');
    $(this).removeClass('focaltyped');
  });
});
