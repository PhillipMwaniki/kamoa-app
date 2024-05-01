import React from 'react'
import AppButton from 'src/components/AppButton'
import AppLineButton from 'src/components/AppLineButton'
import Header from 'src/components/Header'
import ProgressIndicator from 'src/components/ProgressIndicator'
import { StyledView } from 'src/components/StyledComponents'
import UploadInstructions from 'src/components/UploadInstructions'

const UploadMpesaStatementScreen = ({ navigation }: any) => {
    return (
        <StyledView className="bg-orange-50 flex flex-col flex-1 items-center">
            <Header header="How to upload your M-Pesa Statment" />
            <UploadInstructions />
            <StyledView className='w-full'>
                <ProgressIndicator step={2} length={3} />
                <AppButton title='Continue' onPress={() => [navigation.navigate("GrantPermissionScreen")]} />
                <AppLineButton title='Back to Login' onPress={() => console.log('continue here')} />
            </StyledView>
        </StyledView>
    )
}

export default UploadMpesaStatementScreen
