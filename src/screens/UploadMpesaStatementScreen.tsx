import React from 'react'
import Header from 'src/components/Header'
import { StyledView } from 'src/components/StyledComponents'

const UploadMpesaStatementScreen = () => {
    return (
        <StyledView className="bg-orange-50 flex flex-col flex-1 items-center">
            <Header header="How to upload your M-Pesa Statment" />
        </StyledView>
    )
}

export default UploadMpesaStatementScreen
