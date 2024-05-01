import React from 'react'
import { StyledText, StyledTextInput, StyledView } from 'src/components/StyledComponents';
import UploadInstruction from './UploadInstruction';
import UploadFile from './UploadFile';

const UploadInstructions = () => {
    return (
        <StyledView className='w-80 border border-solid rounded-2xl border-amber-300 mt-3 py-6 px-4'>
            <UploadInstruction>Dial *334#</UploadInstruction>
            <UploadInstruction>Select 7 - My Account</UploadInstruction>
            <UploadInstruction>Select 3 - M-PESA Statement</UploadInstruction>
            <UploadInstruction>Select 1 - M-PESA Statement</UploadInstruction>
            <UploadInstruction>Select 1 - Request Statement</UploadInstruction>
            <UploadInstruction>Select 1 - Full Statement</UploadInstruction>
            <UploadInstruction>Select 4 - 6 Months Statement</UploadInstruction>
            <UploadInstruction>Select 1 - Enter e-mail address</UploadInstruction>
            <UploadInstruction>Enter your M-PESA Pin to receive your statement</UploadInstruction>
            <UploadFile />
            <StyledView>
                <StyledText className='text-xs font-barlowCondensed font-semibold text-black'>
                    Enter the code you received
                </StyledText>
                <StyledTextInput className='text-xs font-barlowCondensed font-semibold border-b border-zinc-400 p-0 placeholder:text-zinc-400' placeholder='243456' />
            </StyledView>
        </StyledView>
    )
}

export default UploadInstructions
