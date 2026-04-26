import { getProducers } from '@/lib/getProducers'
import ProduitsClient from './ProduitsClient'

export default async function Page() {
  const PRODUCERS = await getProducers()
  return <ProduitsClient PRODUCERS={PRODUCERS} />
}
