import React, { PropsWithChildren } from 'react'
import { StyledView, StyledText } from './StyledComponents';

type FeatureProps = PropsWithChildren<{
    title: string
}>;
const Feature: React.FunctionComponent<FeatureProps> = ({ children, title }) => {
    return (
        <StyledView className='flex flex-col px-6 mb-2'>
            <StyledText className='font-barlowCondensedBold leading-4 text-[14px] text-black'>{title}</StyledText>
            <StyledText className='font-barlowCondensed leading-[14px] text-[12px] text-neutral-600 mt-1'>
                {children}
            </StyledText>
        </StyledView>
    )
}

export default Feature
