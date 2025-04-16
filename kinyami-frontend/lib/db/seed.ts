import { loadEnvConfig } from '@next/env'
import { cwd } from 'process'
import { dbConnect } from '.'
import data from '../data'
import productModel from './models/product.model'

loadEnvConfig(cwd())
const main = async () => {
  try {
    const { products } = data
    await dbConnect(process.env.MONGODB_URI)

    await productModel.deleteMany()
    const createdProducts = await productModel.insertMany(products)

    console.log(`Inserted ${createdProducts.length} products`)

    process.exit(0)
  } catch (error) {
    console.error('Error seeding the database:', error)
    throw new Error('Database seeding failed')
  }
}
main()
