import { NowRequest, NowResponse, NowRequestBody } from '@vercel/node'
import handler from '../../../utils/proto'

/**
 * 
 */

const router = handler()

const counter = (function () {
  if (process && process.hrtime) {
    var getNanoSeconds = function () {
      var hr = process.hrtime()
      return hr[0] * 1e9 + hr[1]
    }
    var loadTime = getNanoSeconds()
    return function (from: any) {
      var v = (getNanoSeconds() - loadTime) / 1e6
      return from ? v - from : v
    }
  }
  return function (from?: any) {
    var v = (new Date()).getTime()
    return from ? v - from : v;
  }
})()

const withLogger = (fn: Function) => async (req: NowRequest, res: NowResponse) => {
  const start = counter();
  await fn(req, res)

  const statusColor = res.statusCode === 200 ? "\x1b[32m" : "\x1b[31m\x1b[5m"
  console.log("\x1b[36m" + "router" + "\x1b[0m", "-", `${req.method} ${req.url} \x1b[1m${statusColor + res.statusCode}\x1b[0m in ${counter(start).toPrecision(2)} ms`);
  return
}

router.get(function cool(req: NowRequest, res: NowResponse) {
  res.send("POPOPOPOPO")
})

router.post(function (req: NowRequest, res: NowResponse) {
  res.send("THANKS FOR OPSTING")
})

export default withLogger(router)
