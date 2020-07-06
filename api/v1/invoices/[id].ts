import { NowRequest, NowResponse } from '@vercel/node'
import { findInvoiceById } from '../../../controllers/invoice-controller'
import handler from '../../../utils/proto'

const router = handler()

router.get((req: NowRequest, res: NowResponse) => {
  try {
    const id = Number(req.query?.id)
    if (id == NaN || id == null) throw "invoice ID is a number"

    const invoice = findInvoiceById(id)

    return res.status(200).json({ success: true, invoice })
  } catch (e) {
    res.status(400).json({ success: false, invoice: {}, message: e.toString() })
  }
})

export default router
