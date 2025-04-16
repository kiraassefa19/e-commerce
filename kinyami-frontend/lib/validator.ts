import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{1,2})?$/.test(formatNumberWithDecimal(value)),
      { message: `${field} must be a valid price` }
    )

export const ProductInputSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  images: z
    .array(z.string())
    .min(1, { message: 'At least one image is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  countInStock: z.coerce
    .number()
    .min(0, { message: 'Count in stock must be a positive number' }),
  listPrice: Price('List price'),
  price: Price('Price'),
  isPublished: z.boolean(),
  tags: z.array(z.string()).default([]).optional(),
  sizes: z.array(z.string()).default([]).optional(),
  colors: z.array(z.string()).default([]).optional(),
  avgRating: z.coerce
    .number()
    .min(0, { message: 'Average rating must be at least 0' })
    .max(5, { message: 'Average rating cannot exceed 5' })
    .default(0)
    .optional(),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative({ message: 'Number of reviews must be a positive number' }),
  ratingDistribution: z
    .array(
      z.object({
        rating: z
          .number()
          .min(0, { message: 'Rating must be at least 0' })
          .max(5, { message: 'Rating cannot exceed 5' }),
        count: z
          .number()
          .int()
          .nonnegative({ message: 'Count must be a positive number' }),
      })
    )
    .max(5, { message: 'Rating distribution can have at most 5 items' }),
  reviews: z.array(z.string()).default([]).optional(),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative({ message: 'Number of sales must be a positive number' }),
})
