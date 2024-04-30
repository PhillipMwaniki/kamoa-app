
import React from 'react'
import { StyledText, StyledView } from './StyledComponents';

type ProgressIndicatorProps = {
    step: number,
    length: number
};
const ProgressIndicator: React.FunctionComponent<ProgressIndicatorProps> = ({ step, length }) => {
    return (
        <StyledView className='my-6 mx-auto flex flex-col items-center'>
            <StyledText className='font-barlowCondensedBold leading-4 text-[12px] font-medium text-black mb-2'>Step {step}/{length}</StyledText>
            <StyledView className='w-[100px] bg-amber-300 rounded-full h-2.5 dark:bg-gray-700'>
                <StyledView className='bg-green-400 h-2.5 rounded-full' style={{ width: `${(step / length) * 100}%` }} />
            </StyledView>
        </StyledView>
    )
}

export default ProgressIndicator
