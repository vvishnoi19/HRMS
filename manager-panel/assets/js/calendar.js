// jQuery: From-date only picker
$(function () {
    const fmt = "dd-mm-yy";       // Display format
    const storeFmt = "yy-mm-dd";  // Hidden input format
    const f = d => $.datepicker.formatDate(fmt, d);
    const fs = d => $.datepicker.formatDate(storeFmt, d);

    $(".calendar-wrapper").each(function () {
        const $wrapper = $(this);
        const $input = $wrapper.find(".fromDatePicker");
        const $fromHidden = $wrapper.find(".fromDate");

        $input.datepicker({
            dateFormat: fmt,
            changeMonth: true,
            changeYear: true,
            onSelect: function () {
                const picked = $input.datepicker("getDate");
                if (picked) {
                    $input.val(f(picked));   // Show formatted date in text input
                    $fromHidden.val(fs(picked)); // Store in hidden input
                }
            }
        });

        // ESC to clear
        $input.on("keydown", function (e) {
            if (e.key === "Escape") {
                $input.val("");
                $fromHidden.val("");
            }
        });
    });
});
