module.exports = {
    reporter: function (result, config, options) {
        "use strict";
        var len = result.length;
        var str = "";

        result.forEach(function (result) {
            str += "[VsTrxJshRep] " + result.error.reason
            + " [" + result.error.line + "/" + result.error.character + "] "
            + result.file + "\n";
        });

        if (str) {
            process.stdout.write(str + "\n" + len + " error" + ((len === 1) ? "" : "s") + "\n");
        } else {
            process.stdout.write("No errors.\n");
        }
    }
};
