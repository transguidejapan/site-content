/**
 * Converts uppercase title to file slug.
 * @param {*} msg 
 * @returns Lowercase string separated by dashes.
 */
module.exports = function (msg) {
    return msg.replace(/\W+/g, '-').toLowerCase();
}