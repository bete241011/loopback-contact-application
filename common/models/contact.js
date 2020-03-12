'use strict';

module.exports = function(Contact) {
  Contact.beforeRemote('create', function(context, user, next) {
    // context.args.data.date = Date.now();
    context.args.data.personId = context.req.accessToken.userId;
    next();
  });
};
