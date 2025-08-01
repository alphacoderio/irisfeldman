function checkMail(mailAddress) {
    var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
    var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,4})(\\]?)$";
    if (mailAddress.match(reg1str) == null &&
		    mailAddress.match(reg2str) != null) {
        return true;
    }
    return false;
}

function checkURL(url) {
    var urlPattern = /^(?:(?:ftp|https?):\/\/)?(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+(?:com|edu|biz|org|gov|int|info|mil|net|name|museum|coop|aero|[a-z][a-z])\b(?:\d+)?(?:\/[^;"'<>()\[\]{}\s\x7f-\xff]*(?:[.,?]+[^;"'<>()\[\]{}\s\x7f-\xff]+)*)?/;
    return urlPattern.test(url.toLowerCase());
}