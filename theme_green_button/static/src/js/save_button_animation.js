odoo.define('theme_green_button.save_button_animation', function (require) {
    'use strict';

    // Use event delegation to handle clicks on save buttons that may be added to the DOM dynamically.
    $(document).on('click', '.o_form_button_save', function () {
        var $button = $(this);

        // Add the blinking class to trigger the animation.
        $button.addClass('btn-blinking');

        // Remove the class after the animation completes (1000ms).
        setTimeout(function () {
            $button.removeClass('btn-blinking');
        }, 1000);
    });
});
