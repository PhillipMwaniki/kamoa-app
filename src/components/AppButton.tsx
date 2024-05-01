
import React from 'react'
import { StyledText, StyledTouchableOpacity, StyledView } from './StyledComponents'
import { GestureResponderEvent } from 'react-native'

type AppButtonProps = {
    title: string
    onPress: (event: GestureResponderEvent) => void
}

const AppButton: React.FunctionComponent<AppButtonProps> = ({ onPress, title }) => {
    return (
        <StyledView className='flex items-center p-4 drop-shadow-sm'>
            <StyledTouchableOpacity onPress={onPress} className="bg-amber-300 px-6 py-4 rounded-md w-full items-center">
                <StyledText className='text-black font-barlowCondensedBold text-[16px] font-bold'>{title}</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default AppButton
