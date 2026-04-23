import { useEffect, useState } from 'react'
import { supabase, type ParfumDB } from '@/lib/supabase'
import { type Product, type Collection } from '@/data/products'

// Convertit une ligne Supabase → format Product utilisé dans le site
function mapParfumToProduct(p: ParfumDB): Product {
  const familleToCollection: Record<string, Collection> = {
    'SACRÆ': 'sacrae',
    'VITÆA': 'vitae',
    'UMBRÆ': 'umbrae',
    'NEROLÆ': 'nerolae',
    'NEROLÆ / HALÆ': 'nerolae',
    'ÆRA': 'aera',
  }

  return {
    id: p.id.toString(),
    name: p.nom,
    collection: familleToCollection[p.famille] ?? 'sacrae',
    tagline: p.description_site ?? p.inspiration ?? '',
    inspiration: p.marque ? `${p.inspiration} — ${p.marque}` : p.inspiration ?? undefined,
    notes: { top: [], heart: [], base: [] }, // à enrichir plus tard
  }
}

export function useParfums() {
  const [parfums, setParfums] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchParfums() {
      setLoading(true)
      const { data, error } = await supabase
        .from('parfums')
        .select('*')
        .order('famille', { ascending: true })
        .order('nom', { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        setParfums((data as ParfumDB[]).map(mapParfumToProduct))
      }
      setLoading(false)
    }

    fetchParfums()
  }, [])

  // Filtre par collection (ex: 'sacrae')
  function getByCollection(collection: Collection) {
    return parfums.filter(p => p.collection === collection)
  }

  return { parfums, loading, error, getByCollection }
}
