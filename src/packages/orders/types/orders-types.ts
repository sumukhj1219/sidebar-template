import z from "zod"

export const schema = z.object({
    orderId: z.number(),
    user: z.string(),
    project: z.string(),
    address: z.string(),
    date: z.string(),
    status:z.string()
})