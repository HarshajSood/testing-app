export enum PayRecieve {
  Pay = 1,
  Recieve = 2,
}

export interface Device {
  paymentid: number;
  type: PayRecieve;
  amount: number;
  currency: string;
  bankaccountid: number;
}
