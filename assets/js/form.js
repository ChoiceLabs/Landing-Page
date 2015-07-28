$(document).ready(function() {

  $(".toggle-button").click(function() {

    $(this).children(".checkbox--unchecked").toggle();
    $(this).children(".checkbox--checked").toggle();

    if ($(this).hasClass(".toggle-button--on")) {
      $(this).removeClass(".toggle-button--on");
    }

    else {
      $(this).addClass(".toggle-button--on");
    }
  });


  $("#submit-button").click(function() {
    number_of_selected_locations = $("#desired-locations").find("button.active").length;
    if (number_of_selected_locations == 0) {
      console.log('hi');
      $("#desired-locations-error").css("display", "auto");
    }
  });

  $("button.radio").click(function() {
    /* disable all other clicked items. There needs to be a better way to simulate radio buttons" */
    var group = "button[name='" + $(this).attr("name") + "']";
    $(group).not(this).each(function() {
      $(this).addClass("btn-default");
      $(this).removeClass("btn-primary")
      $(this).removeClass("active");
      $(this).find("i").removeClass("glyphicon-check");
      $(this).find("i").addClass("glyphicon-unchecked");
    });
  });


});





$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});
