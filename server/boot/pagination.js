// /**
//  * Sets headers used for client-side pagination
//  */
// 'use strict';
// module.exports = function(app) {
//   var remotes = app.remotes();

//   // Set X-Total-Count for all find requests
//   remotes.after('*.find', function(ctx, next) {
//     var filter;
//     if (ctx.args && ctx.args.filter) {
//       try {
//         filter = JSON.parse(ctx.args.filter).where;
//       } catch (e) {
//         filter = ctx.args.filter.where;
//       }
//     }

//     if (!ctx.res._headerSent) {
//       this.count(filter, function(err, count) {
//         ctx.res.set('X-Total-Count', count);
//         next();
//       });
//     } else {
//       next();
//     }
//   });
// };
