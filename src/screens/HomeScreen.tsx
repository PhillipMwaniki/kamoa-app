import React from 'react'
import Header from 'src/components/Header';
import { StyledImage, StyledView } from 'src/components/StyledComponents';
import Features from 'src/components/Features';
import ProgressIndicator from 'src/components/ProgressIndicator';
import AppButton from 'src/components/AppButton';
import AppLineButton from 'src/components/AppLineButton';

const wallet = require('src/images/wallet.png');
const HomeScreen = ({ navigation }: any) => {

    return (
        <StyledView className="bg-orange-50 flex flex-col flex-1 items-center">
            <Header header="Upload a 6 month M-Pesa Statement" />
            <StyledImage
                source={wallet}
                className="mx-auto mt-12"
            />
            <Features />
            <StyledView className='w-full'>
                <ProgressIndicator step={1} length={3} />
                <AppButton title='Continue' onPress={() => [navigation.navigate("UploadMpesaStatementScreen")]} />
                <AppLineButton title='Back to Login' onPress={() => console.log('continue here')} />
            </StyledView>
        </StyledView>
    )
}

export default HomeScreen
