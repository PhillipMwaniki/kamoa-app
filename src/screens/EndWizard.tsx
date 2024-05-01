import React from 'react'
import { Image } from 'react-native';
import { StyledText, StyledView } from 'src/components/StyledComponents'
import Header from 'src/components/Header'
import AppButton from 'src/components/AppButton';

const EndWizard = ({ route, navigation }: any) => {
    const { accepted } = route.params;
    const imageToUse = accepted ? require('src/images/success.png') : require('src/images/failure.png');
    const successText = 'Wait while we process your document and crunch the numbers';
    const failureText = 'We will not be able to proceed with your application since the permissions are necessary to proceed';
    const headerText = accepted ? 'Congratulations!' : 'Denied!';
    return (
        <StyledView className="bg-orange-50 flex flex-col flex-1 items-center">
            <Header header={headerText} />
            <Image source={imageToUse} style={{ width: 200, height: 250 }} />
            <StyledText className='text-black text-center text-sm font-medium my-5'>{accepted ? successText : failureText}</StyledText>
            <StyledView className='w-full mt-10'>
                <AppButton title='Start Again' onPress={() => [navigation.popToTop()]} />
            </StyledView>
        </StyledView>
    )
}

export default EndWizard
