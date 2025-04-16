import { Schema, model, models, Document } from 'mongoose'
import { IProductInput } from '@/types'

export interface IProduct extends IProductInput, Document {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
      validate: {
        validator: (value: string[]) => value.length > 0,
        message: 'At least one image is required',
      },
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    countInStock: {
      type: Number,
      required: [true, 'Count in stock is required'],
      min: [0, 'Count in stock must be a positive number'],
    },
    listPrice: {
      type: Number,
      required: [true, 'List price is required'],
      validate: {
        validator: (value: number) =>
          /^\d+(\.\d{1,2})?$/.test(value.toString()),
        message: 'List price must be a valid price',
      },
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      validate: {
        validator: (value: number) =>
          /^\d+(\.\d{1,2})?$/.test(value.toString()),
        message: 'Price must be a valid price',
      },
    },
    isPublished: {
      type: Boolean,
      required: [true, 'Publication status is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    sizes: {
      type: [String],
      default: [],
    },
    colors: {
      type: [String],
      default: [],
    },
    avgRating: {
      type: Number,
      default: 0,
      min: [0, 'Average rating must be at least 0'],
      max: [5, 'Average rating cannot exceed 5'],
    },
    numReviews: {
      type: Number,
      required: [true, 'Number of reviews is required'],
      default: 0,
      min: [0, 'Number of reviews must be a positive number'],
    },
    ratingDistribution: {
      type: [
        {
          rating: {
            type: Number,
            min: [0, 'Rating must be at least 0'],
            max: [5, 'Rating cannot exceed 5'],
          },
          count: {
            type: Number,
            min: [0, 'Count must be a positive number'],
          },
        },
      ],
      validate: {
        validator: (value: Array<{ rating: number; count: number }>) =>
          value.length <= 5,
        message: 'Rating distribution can have at most 5 items',
      },
    },
    reviews: {
      type: [String],
      default: [],
    },
    numSales: {
      type: Number,
      required: [true, 'Number of sales is required'],
      default: 0,
      min: [0, 'Number of sales must be a positive number'],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
)

export default models.Product || model<IProduct>('Product', ProductSchema)
