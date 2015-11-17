
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function upsert (ctx) {
  const { created, data } = await Account.upsert(ctx.request.body)
  created ? ctx.status = 201 : ctx.status = 200
  ctx.body = { data }
}
