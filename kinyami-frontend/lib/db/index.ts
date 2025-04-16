import mongoose from 'mongoose'

interface MongooseCache {
  conn: mongoose.Connection | null
  promise: Promise<mongoose.Connection> | null
}

const globalWithMongoose = global as typeof global & {
  mongoose?: MongooseCache
}

const cached: MongooseCache = globalWithMongoose.mongoose || {
  conn: null,
  promise: null,
}

export const dbConnect = async (MONGODB_URI = process.env.MONGODB_URI) => {
  if (cached.conn) {
    return cached.conn
  }

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => mongooseInstance.connection)
  }

  cached.conn = await cached.promise

  return cached.conn
}
