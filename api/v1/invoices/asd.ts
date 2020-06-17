import { NowRequest, NowResponse, NowRequestBody } from '@vercel/node'
import { listInvoices, createInvoice } from '../../../controllers/invoice-controller'
// import Router, { withRouterRequests, route } from '../../../utils/router';
import handler from '../../../utils/proto'
import { NativeMethodsMixin } from 'react-native';

/**
 * 
 */
const router = handler()


const counter = (function () {
  if (process && process.hrtime) {
    var getNanoSeconds = function () {
      var hr = process.hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    var loadTime = getNanoSeconds();
    return function (from: any) {
      var v = (getNanoSeconds() - loadTime) / 1e6;
      return from ? v - from : v;
    };
  }
  return function (from?: any) {
    var v = (new Date()).getTime();
    return from ? v - from : v;
  };
})();


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

// router.get(function asd(req: NowRequest, res: NowResponse) {
//   console.log("ppopopopopopopopp")
//   // if (!req.body) return res.status(400).send({ success: false })

//   // // Save invoice.
//   // const { total, to, from } = req?.body
//   // const invoice = createInvoice(total, to, from)

//   // return res.status(200).json({ success: true, invoice })
//   res.send("MAMAMAMAM")
// })

// inv.get((req: NowRequest, res: NowResponse) => {
//   // Find invoices.
//   const invoices = listInvoices()

//   return res.status(200).json({ success: true, invoices })
// })

console.log(router)

export default withLogger(router)









  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  // const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "users" collection from the database
  // const collection = await db.collection('users')

  // Select the users collection from the database
  // const users = await collection.find({}).toArray()
  // const invoice = invoice_collection.find(invoice => invoice.id =)
