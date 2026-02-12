'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'audio', label: 'Audio / PA' },
  { value: 'dj', label: 'DJ Hardware' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'laser', label: 'Laser' },
  { value: 'atmospherics', label: 'Atmospherics' },
  { value: 'video', label: 'Video' },
  { value: 'structure', label: 'Structure / Truss' },
  { value: 'cases', label: 'Cases' },
  { value: 'accessories', label: 'Accessories' },
]

const statuses = [
  { value: 'all', label: 'All Status' },
  { value: 'available', label: 'Available' },
  { value: 'reserved', label: 'Reserved' },
]

interface EquipmentFilterProps {
  totalCount: number
}

export function EquipmentFilter({ totalCount }: EquipmentFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category') || 'all'
  const currentStatus = searchParams.get('status') || 'all'
  const currentSearch = searchParams.get('search') || ''

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    router.push(`/equipment?${params.toString()}`)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateFilter('search', value)
  }

  const clearFilters = () => {
    router.push('/equipment')
  }

  const hasActiveFilters = currentCategory !== 'all' || currentStatus !== 'all' || currentSearch !== ''

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          {/* Search Input */}
          <Input
            type="search"
            placeholder="Search equipment..."
            value={currentSearch}
            onChange={handleSearchChange}
            className="w-full sm:max-w-xs"
          />

          {/* Category Filter */}
          <Select value={currentCategory} onValueChange={(value) => updateFilter('category', value)}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={currentStatus} onValueChange={(value) => updateFilter('status', value)}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {totalCount} {totalCount === 1 ? 'item' : 'items'}
          </Badge>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
