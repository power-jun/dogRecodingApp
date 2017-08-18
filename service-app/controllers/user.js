exports.signup = async function(ctx) {
  ctx.mongo.db('dogRecordApp').collection('user');
  ctx.body = {'msg': 'success'};
}
