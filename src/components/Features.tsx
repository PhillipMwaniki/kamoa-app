import React from 'react'
import Feature from './Feature'
import { StyledView } from './StyledComponents'

const Features = () => {
    return (
        <StyledView className='mt-6 px-6'>
            <Feature title="Unlock the power of Kamoa with your M-Pesa">
                Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement
            </Feature>
            <StyledView className='h-1 border-b border-neutral-300 mx-6 mb-3' />
            <Feature title="Get insights on your spending habits">
                Kamoa helps you understand your spending  and track your finances every time you upload a statement
            </Feature>
            <StyledView className='h-1 border-b border-neutral-300 mx-6 mb-3' />
            <Feature title="Secure a higher loan limit">
                Users that share more information get access to higher loan limits with flexible payments and low interest rates
            </Feature>
        </StyledView>
    )
}

export default Features
