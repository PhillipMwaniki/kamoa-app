import React from 'react'
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from 'src/components/StyledComponents';

const UploadFile = () => {
    return (
        <StyledView className='mt-3 border border-solid rounded-2xl border-neutral-300'>
            <StyledImage source={require('src/images/upload.png')} className='mx-auto' />
            <StyledText className='text-black text-center text-sm font-medium'>
                Upload M-pesa Statement
            </StyledText>
            <StyledText className='text-xs text-zinc-600 text-center'>
                select the M-pesa statement from your phone.
            </StyledText>
            <StyledView className='flex items-center p-4 drop-shadow-sm w-40 mx-auto'>
                <StyledTouchableOpacity onPress={() => { }} className="bg-amber-300 px-3 py-2 rounded-md w-full items-center">
                    <StyledText className='text-white font-barlowCondensed text-[16px] font-bold leading-4'>Select</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    )
}

export default UploadFile
