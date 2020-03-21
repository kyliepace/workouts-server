const Wod = require('../models/wod');


exports.add = async ctx => {
  console.log('add')
  const { body } = ctx.request;
  if (!body){
    ctx.status = 400;
    ctx.body = {
      error: 'Missing body'
    }
    return ctx;
  }
  const newWod = new Wod(body);
  await newWod.save();
  ctx.status = 200;
  ctx.body = newWod._doc;
  return ctx;
};

exports.update = async ctx => {
  console.log('update')
  const { body } = ctx.request;
  if (!body){
    ctx.status = 400;
    ctx.body = {
      error: 'Missing body'
    }
    return ctx;
  }
  const updated = await Wod.findByIdAndUpdate(
    body._id, 
    body, 
    {
      new: true
    }
  );
  ctx.status = 200;
  ctx.body = updated;
  return ctx;
};

exports.get = async ctx => {
  const { limit, ...query } = ctx.query;
  // console.log(queryString)
  // const { query, limit } = JSON.parse(queryString);
  const wods = await Wod.find(query).limit(parseInt(limit)).lean();
  ctx.status = 200;
  ctx.body = wods;
  console.log('wods returned: ', wods.length);
  return ctx;
};

exports.delete = async (ctx, next) => {
  console.log(ctx)
  const { id } = ctx.params;
  await Wod.findByIdAndDelete(id);
  ctx.status = 200;
  return ctx;
}
