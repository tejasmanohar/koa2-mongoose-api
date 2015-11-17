
/**
 * dependencies
 */

import { isEmail } from 'validator'

import Account from '../model'

/**
 * definitions
 */

export default async function upsert (ctx) {
  if (!isEmail(ctx.request.body.email)) ctx.throw('Invalid email', 400)
  const { created, data } = await Account.upsert(ctx.request.body)
  ctx.status = created ? 201 : 200
  ctx.body = { data }
}
