import React from 'react'
import { Stack, Skeleton } from '@chakra-ui/react'

export default function Loding() {
    return (
        <div>
            <Stack>
                <Skeleton height='60px' />
                <Skeleton height='60px' />
                <Skeleton height='60px' />
                <Skeleton height='60px' />
            </Stack>
        </div>
    )
}
