'use client'

import { useTransition } from 'react'
import { useSearchParams } from "next/navigation"
import { useRouter, usePathname } from '@/shared'
import { SearchInput } from "@/shared"

interface GlobalSearchInputProps {
    placeholder?: string;
    className?: string;
}

function GlobalSearchInput({ placeholder, className }: GlobalSearchInputProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [_, startTransition] = useTransition()

    const searchQuery = searchParams.get('search') || ''

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (term) {
            params.set('search', term)
        } else {
            params.delete('search')
        }

        startTransition(() => {
            replace(`${pathname}?${params.toString()}`)
        })
    }

    return (
            <SearchInput
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={placeholder}
                className={className}
            />
    )
}

export default GlobalSearchInput