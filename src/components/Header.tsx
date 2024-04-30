import { View, Text, Image } from 'react-native';
import React from 'react';

type HeaderProps = {
    header: string;
};
const Header: React.FunctionComponent<HeaderProps> = ({ header }) => {
    return (
        <View className="mx-auto mt-12 flex flex-col items-center">
            <Image source={require('../images/logo.png')} />
            <Text className="mt-6 text-[32px] font-barlowCondensedBold leading-10 font-semibold text-center text-black">
                {header}
            </Text>
        </View>
    );
};

export default Header;
