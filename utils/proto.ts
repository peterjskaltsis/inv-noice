
/**
 * @module Router
 * @summary The proto router, designed for request type serverless routing.
 */

import { NowRequest, NowResponse } from "@vercel/node"

/**
 * Return 405 status for unallowed method.
 * @param req 
 * @param res 
 */
export function unallowedMethod(req: NowRequest, res: NowResponse) {
  return res.status(405).send(`Not found - ${req.method} ${req.url}`)
}

interface Handler {
  method: string
  fn: Function
}

export default function () {

  var handlers: Handler[] = []

  function callFunc(f: Function) {
    // console.log("f")
    // console.log(f.toString())
    return function (req: NowRequest, res: NowResponse) {
      // console.log("asdasd")
      // console.log(f)
      // return f.apply(routeeee, [req, res])
      const fnc = handlers.find(handler => handler.method === req.method)
      if (fnc) {
        return fnc.fn.apply(router, [req, res])
      } else {
        unallowedMethod(req, res)
      }
      // return (routeeee.unallowed.apply(routeeee, [(req: string, res: string) => f(c, d)]))
    }
  }

  function add(method: string, fn: Function) {
    return handlers.push({ method, fn })
  }

  router.get = (f: Function) => add("GET", f)
  router.post = (f: Function) => add("POST", f)
  router.unallowed = (f: Function) => add("UNALLOWED", f)

  function router(req: NowRequest, res: NowResponse) {
    return callFunc(router.unallowed).apply(router, [req, res])
  }

  return router
}
