import Invoice, { InvoiceClass } from '../models/invoice.model'

// Mock data.
var invoice_collection: Array<InvoiceClass> = [
  new Invoice({ _id: 0, total: 20.00, to: "peter", from: "john" }),
  new Invoice({ _id: 1, total: 115.00, to: "john", from: "peter" }),
  new Invoice({ _id: 2, total: 120.50, to: "abby", from: "liam" }),
]

/**
 * Returns a list of invoices.
 */
export function listInvoices(): Array<InvoiceClass> {
  return invoice_collection
}

/**
 * Returns a list of invoices.
 */
export function findInvoiceById(id: number): InvoiceClass {
  const invoice = invoice_collection.find((invoice) => invoice._id === id)
  if (invoice) {
    return invoice
  } else {
    throw 'no invoice exists with ID of ' + id
  }
}


/**
 * Create an invoices.
 */
export function createInvoice(total: number, to: string, from: string): InvoiceClass {
  // Define the new object.
  const invoice = new Invoice({ total, to, from })

  // Save the new object.
  invoice_collection.push(invoice)

  // Returns the created object.
  return invoice
}


/**
 * Returns a list of invoices.
 */
export function deleteInvoiceById(id: number): boolean {
  return true
}
