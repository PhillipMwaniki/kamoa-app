import React from 'react'
import { StyledView } from 'src/components/StyledComponents';
import Feature from 'src/components/Feature';
import SeparatorLine from 'src/components/SeparatorLine';
import AppLineButton from './AppLineButton';

const PermissionList = () => {
    return (
        <StyledView className='flex place-items-start mt-6 px-6'>
            <Feature title="Personal info">
                We collect personal info to prevent fraud and also protect you from it. ie Phone number, email, name
            </Feature>
            <SeparatorLine />
            <Feature title="Approximate location">
                We look at the approximate location to help us show you relevant infomation.
            </Feature>
            <SeparatorLine />
            <Feature title="App info and performance">
                Our app runs in many devices and this help us optimise for every type of device.
            </Feature>
            <StyledView className='w-full items-start'>
                <AppLineButton title='Get more info from Google Play' onPress={() => console.log('continue here')} />
            </StyledView>
        </StyledView>
    )
}

export default PermissionList
