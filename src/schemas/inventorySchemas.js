import { z } from "zod";

export const inventoryFormSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  productCode: z.string().min(1, "Product code is required"),
  productSize: z.string(),
  partCode: z.string(),
  itemDescription: z.string(),
  units: z.number().min(0, "Units must be 0 or greater"),
  taxPercentage: z
    .number()
    .min(0, "Tax percentage must be 0 or greater")
    .max(100, "Tax percentage cannot exceed 100"),
  unitCost: z.number().min(0, "Unit cost must be 0 or greater"),
  quantity: z.number().min(0, "Quantity must be 0 or greater"),
  amount: z.number().min(0, "Amount must be 0 or greater"),
  noOfTrans: z.number().min(0, "Number of transactions must be 0 or greater"),
  lastRecvDt: z.date().nullable(),
  ageing: z.number().min(0, "Ageing must be 0 or greater"),
  opStockForTesting: z.number().min(0, "Opening stock must be 0 or greater"),
  remark: z.string(),
}); 