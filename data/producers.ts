// Compat shim — historical default export of mocked producers replaced by
// runtime fetch via @/lib/getProducers. Only TAGLINES is still consumed
// directly (by components/Marquee).
export { TAGLINES, type Producer, type Product } from './types'
