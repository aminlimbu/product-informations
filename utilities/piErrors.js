// Defining custom errors class
module.exports = class piErrors extends Error() {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
};
