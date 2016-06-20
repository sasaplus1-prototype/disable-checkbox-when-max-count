(function(){

  'use strict';

  var checkboxes = Array.prototype.slice.call(
    document.querySelectorAll('.js-checkbox')
  );

  function click(event) {
    var checks;
    
    checks =
      checkboxes
        .map(function(checkbox) {
          return checkbox.checked;
        })
        .filter(function(check) {
          return !!check;
        });

    if (checks.length >= 3) {
      checkboxes.forEach(function(checkbox) {
        !checkbox.checked && (checkbox.disabled = true);
      });
    } else {
      checkboxes.forEach(function(checkbox) {
        checkbox.disabled = false;
      });
    }
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function(event) {
      setTimeout(function() {
        click(event);
      }, 0);
    }, false);
  });

}());
