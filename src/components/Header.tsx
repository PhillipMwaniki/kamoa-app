import { Image } from 'react-native';
import React from 'react';
import { StyledText, StyledView } from './StyledComponents';

type HeaderProps = {
    header: string;
};

const logo = require('../images/logo.png');

const Header: React.FunctionComponent<HeaderProps> = ({ header }) => {
    return (
        <StyledView className="mx-auto mt-12 flex flex-col items-center">
            <Image source={logo} />
            <StyledText className="mt-6 text-[32px] font-barlowCondensedBold leading-10 font-semibold text-center text-black">
                {header}
            </StyledText>
        </StyledView>
    );
};

export default Header;
