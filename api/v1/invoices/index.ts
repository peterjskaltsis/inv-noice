import { NowRequest, NowResponse } from '@vercel/node'
import { listInvoices, createInvoice } from '../../../controllers/invoice-controller'
import handler from '../../../utils/proto'
/**
 * 
 */

const router = handler()

router.post((req: NowRequest, res: NowResponse) => {
  if (!req.body) return res.status(400).send({ success: false })

  // Save invoice.
  const { total, to, from } = req?.body
  const invoice = createInvoice(total, to, from)

  return res.status(200).json({ success: true, invoice })
})


router.get((req: NowRequest, res: NowResponse) => {

  // Find invoices.
  const invoices = listInvoices()

  return res.status(200).json({ success: true, invoices })

})



export default router



  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  // const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "users" collection from the database
  // const collection = await db.collection('users')

  // Select the users collection from the database
  // const users = await collection.find({}).toArray()
  // const invoice = invoice_collection.find(invoice => invoice.id =)
