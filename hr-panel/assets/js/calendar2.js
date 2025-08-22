
$(function () {
    const fmt = "dd-mm-yy";
    const storeFmt = "yy-mm-dd";
    const f = d => $.datepicker.formatDate(fmt, d);
    const fs = d => $.datepicker.formatDate(storeFmt, d);

    $(".calendar-wrapper").each(function () {
        const $wrapper = $(this);
        const $i = $wrapper.find(".daterange");
        const $start = $wrapper.find(".startDate");
        const $end = $wrapper.find(".endDate");

        let start = null;
        let end = null;

        $i.datepicker({
            dateFormat: fmt,
            numberOfMonths: 2,
            changeMonth: true,
            changeYear: true,
            beforeShowDay: function (date) {
                if (!start) return [true, ""];
                const t = date.setHours(0,0,0,0);
                const s = start && start.setHours(0,0,0,0);
                const e = end && end.setHours(0,0,0,0);

                if (start && !end) {
                    return [true, t === s ? "ui-datepicker-range-start" : ""];
                }
                if (start && end) {
                    const inRange = t >= s && t <= e;
                    const isStart = t === s;
                    const isEnd = t === e;
                    let cls = inRange ? "ui-datepicker-range" : "";
                    if (isStart) cls += " ui-datepicker-range-start";
                    if (isEnd) cls += " ui-datepicker-range-end";
                    return [true, cls.trim()];
                }
                return [true, ""];
            },
            onSelect: function () {
                const picked = $i.datepicker("getDate");

                // 1st click → set start and keep picker open
                if (!start || (start && end)) {
                    start = new Date(picked);
                    end = null;
                    $i.val(f(start) + " — ");
                    $start.val(fs(start));
                    $end.val("");
                    setTimeout(() => $i.datepicker("show"), 0);
                    return;
                }

                // 2nd click → set end
                if (picked < start) {
                    end = new Date(start);
                    start = new Date(picked);
                } else {
                    end = new Date(picked);
                }

                $i.val(f(start) + " — " + f(end));
                $start.val(fs(start));
                $end.val(fs(end));
            }
        });

        // ESC to clear
        $i.on("keydown", function (e) {
            if (e.key === "Escape") {
                start = end = null;
                $i.val("");
                $start.val("");
                $end.val("");
            }
        });
    });
});
