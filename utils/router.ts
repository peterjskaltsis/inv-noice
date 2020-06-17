import { NowRequest, NowResponse } from '@vercel/node'
import { Func } from '@typegoose/typegoose/lib/types'

/**
 * @module Router
 * @summary The proto router, designed for request type serverless routing.
 */

/**
 * Return 405 status for unallowed method.
 * @param req 
 * @param res 
 */
export function unallowedMethod(req: NowRequest, res: NowResponse) {
  return res.status(405).send(`Not found - ${req.method} ${req.url}`)
}

/**
 * Stores methods for each request method type.
 */
abstract class Router {
  constructor(req: NowRequest, res: NowResponse) {
    this.handle(req, res)
  }

  get(req: NowRequest, res: NowResponse) { unallowedMethod(req, res) }
  post(req: NowRequest, res: NowResponse) { unallowedMethod(req, res) }
  patch(req: NowRequest, res: NowResponse) { unallowedMethod(req, res) }
  delete(req: NowRequest, res: NowResponse) { unallowedMethod(req, res) }
  put(req: NowRequest, res: NowResponse) { unallowedMethod(req, res) }

  handle(req: NowRequest, res: NowResponse) {
    console.log("method:", req.method)

    switch (req.method) {
      case "GET":
        return this.get.apply(this, [req, res])
      case "POST":
        return this.post.apply(this, [req, res])
      case "PATCH":
        return this.patch.apply(this, [req, res])
      case "DELETE":
        return this.delete.apply(this, [req, res])
      default:
        return unallowedMethod(req, res)
    }
  }
}

/**
 * Execute a route simply (same native behaviour)
 * @param f 
 */
export function withRouter(f: Function) {
  return function (req: NowRequest, res: NowResponse) {
    return f(req, res)
  }
}

/**
 * Define routes for each type.
 * @param Router 
 */
export function withRouterRequests(Router: new (req: NowRequest, res: NowResponse) => Router) {
  return function (req: NowRequest, res: NowResponse) {
    new Router(req, res)
  }
}


export default Router

  // Default requests.
  // get: (req: NowRequest, res: NowResponse) => {
  //   unallowedMethod(req, res)
  // },
  //   post: (req: NowRequest, res: NowResponse) => {
  //     unallowedMethod(req, res)
  //   },
  //     head: (req: NowRequest, res: NowResponse) => {
  //       unallowedMethod(req, res)
  //     },
  //       put: (req: NowRequest, res: NowResponse) => {
  //         unallowedMethod(req, res)
  //       },
  //         delete: (req: NowRequest, res: NowResponse) => {
  //           unallowedMethod(req, res)
  //         },
  //           options: (req: NowRequest, res: NowResponse) => {
  //             unallowedMethod(req, res)
  //           },
  //             trace: (req: NowRequest, res: NowResponse) => {
  //               unallowedMethod(req, res)
  //             },
  //               patch: (req: NowRequest, res: NowResponse) => {
  //                 unallowedMethod(req, res)
  //               },

  //                 handle: function (req: NowRequest, res: NowResponse) {
  //                   console.log("method:", req.method)

  //                   switch (req.method) {
  //                     case "GET":
  //                       return this.get
  //                     case "POST":
  //                       return this.post
  //                     case "PATCH":
  //                       return this.patch
  //                     case "DELETE":
  //                       return this.delete
  //                     default:
  //                       return unallowedMethod(req, res)
  //                   }
  // }
