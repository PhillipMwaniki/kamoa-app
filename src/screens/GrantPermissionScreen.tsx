
import React from 'react'
import { StyledImage, StyledView } from 'src/components/StyledComponents'
import Header from 'src/components/Header'
import ProgressIndicator from 'src/components/ProgressIndicator'
import AppButton from 'src/components/AppButton'
import AppLineButton from 'src/components/AppLineButton'
import PermissionList from 'src/components/PermissionList'

const GrantPermissionScreen = ({ navigation }: any) => {
    return (
        <StyledView className="bg-orange-50 flex flex-col flex-1 items-center">
            <Header header="Accept Permissions" />
            <StyledImage
                source={require('src/images/phone.png')}
                className="mx-auto mt-12"
            />
            <PermissionList />
            <StyledView className='w-full'>
                <ProgressIndicator step={3} length={3} />
                <AppButton title='Accept & Continue' onPress={() => [navigation.navigate("EndWizard", { accepted: true })]} />
                <AppLineButton title='Deny Access' onPress={() => [navigation.navigate("EndWizard", { accepted: false })]} />
            </StyledView>
        </StyledView>
    )
}

export default GrantPermissionScreen
