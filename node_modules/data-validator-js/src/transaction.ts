// import Customer from "./customer";
import {  Customer, Product } from './index';

export default class Transaction {
  public id: string;
  public products: Product[];
  public totalAmount: number;
  public paidWith: string;
  public dueAmount: number;
  public customerId: string;
  public customer: Customer;
  public transactionDate: Date;
  constructor(
    id: string,
    products: Product[],
    totalAmount: number,
    paidWith: string,
    dueAmount: number,
    customerId: string,
    customer: Customer,
    transactionDate: Date,
  ) {
    this.id = id;
    this.products = products;
    this.totalAmount = totalAmount;
    this.paidWith = paidWith;
    this.dueAmount = dueAmount;
    this.customerId = customerId;
    this.customer = customer;
    this.transactionDate = transactionDate;
  }
}
