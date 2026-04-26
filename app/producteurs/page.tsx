import { getProducers } from '@/lib/getProducers'
import ProducteursClient from './ProducteursClient'

export default async function Page() {
  const PRODUCERS = await getProducers()
  return <ProducteursClient PRODUCERS={PRODUCERS} />
}
