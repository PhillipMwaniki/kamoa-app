import { View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { StyledImage } from '../components/StyledComponents';
import Features from '../components/Features';
import ProgressIndicator from '../components/ProgressIndicator';
import AppButton from '../components/AppButton';
import AppLineButton from '../components/AppLineButton';

const wallet = require('../images/wallet.png');
const HomeScreen = () => {
    return (
        <View>
            <Header header="Upload a 6 month M-Pesa Statement" />
            <StyledImage
                source={wallet}
                className="mx-auto mt-12"
            />
            <Features />
            <ProgressIndicator step={1} length={3} />
            <AppButton title='Continue' onPress={() => console.log('continue here')} />
            <AppLineButton title='Back to Login' onPress={() => console.log('continue here')} />
        </View>
    )
}

export default HomeScreen
