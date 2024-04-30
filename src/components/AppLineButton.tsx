import React from 'react'
import { StyledText, StyledTouchableOpacity, StyledView } from './StyledComponents'

type AppLineButtonProps = {
    title: string
    onPress: () => void
}

const AppLineButton: React.FunctionComponent<AppLineButtonProps> = ({ onPress, title }) => {
    return (
        <StyledView className='flex items-center drop-shadow-sm'>
            <StyledTouchableOpacity onPress={onPress} className="px-6 w-full items-center">
                <StyledText className='text-black font-barlowCondensed text-[12px] font-normal underline'>
                    {title}
                </StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default AppLineButton
