import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

/**
 * @module InvoiceClass
 * Defines the Invoice Schema and Model.
 */

@modelOptions({ schemaOptions: { collection: 'Invoice' } })
export class InvoiceClass extends TimeStamps {
  // id defined for testing purposes
  @prop({ required: true })
  public _id!: number

  @prop({ required: true })
  public total!: number


  @prop({ required: true })
  public to!: string


  @prop({ required: true })
  public from!: string
}

// Invoice is a regular Mongoose Model with correct types
const Invoice = getModelForClass(InvoiceClass)

export default Invoice
