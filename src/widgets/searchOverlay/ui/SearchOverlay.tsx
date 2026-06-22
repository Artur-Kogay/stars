'use client'

import styles from './SearchOverlay.module.scss'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import {SearchInput, Container, Spinner} from "@/shared"
import {useTransition, useState, useEffect, useRef} from 'react'
import clsx from "clsx"
import { useAtom } from "jotai"
import { isSearchOverlayOpenAtom } from "@/shared"
import { useDebounce } from "@/shared"
import {ContentSection} from "@/widgets";
import OverlayProductsSection from "@/widgets/searchOverlay/ui/overlayProductsSection/OverlayProductsSection";

function SearchOverlay() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [pending, startTransition] = useTransition()
    const [isActiveOverlay, setIsActiveOverlay] = useAtom(isSearchOverlayOpenAtom)
    const searchQuery = searchParams.get('search') || ''
    const [inputValue, setInputValue] = useState(searchQuery)
    const debouncedValue = useDebounce(inputValue, 300)

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())

        if (debouncedValue) {
            params.set('search', debouncedValue)
        } else {
            params.delete('search')
        }

        startTransition(() => {
            replace(`?${params.toString()}`)
        })
    }, [debouncedValue])


    const handleCloseOverlay = () => {
        const params = new URLSearchParams(searchParams.toString());

        params.delete('search');

        setInputValue('');
        setIsActiveOverlay(false);

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className={clsx(styles.overlay, isActiveOverlay && styles.activeOverlay)}>
            {
                pending && <Spinner className={styles.spinner}/>
            }
            <Container>
                <header className={styles.overlayHeader}>
                    <SearchInput
                        value={inputValue}
                        autoFocus
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleCloseOverlay}>Отмена</button>
                </header>
                {
                    searchQuery.trim() === ''
                        ? null
                        :
                        <div
                            className={styles.productsWrapper}
                        >
                            <OverlayProductsSection onClick={handleCloseOverlay} searchQuery={searchQuery}/>
                        </div>
                }
            </Container>
        </div>
    )
}

export default SearchOverlay