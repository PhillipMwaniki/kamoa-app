import React from 'react'
import { StyledText, StyledView } from 'src/components/StyledComponents';

const UploadInstruction = ({ children }: any) => {
    return (
        <StyledView className='flex flex-row space-x-3 items-center'>
            <StyledText className='text-black text-[5px]'>{'\u2B24'}</StyledText>
            <StyledText className='font-barlowCondensed text-[14px] font-normal leading-6'>{children}</StyledText>
        </StyledView>
    )
}

export default UploadInstruction
