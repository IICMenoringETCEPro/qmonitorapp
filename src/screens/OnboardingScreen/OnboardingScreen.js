import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);


export default function OnboardingScreen({ navigation }) {

    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#FFFFFF',
                    image: <Image style={styles.onboardingImage} source={require('../../../assets/images/onboarding/onboarding-4.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#FFFFFF',
                    image: <Image style={styles.onboardingImage} source={require('../../../assets/images/onboarding/onboarding-1.png')} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: '#FFFFFF',
                    image: <Image style={styles.onboardingImage} source={require('../../../assets/images/onboarding/onboarding-3.png')} />,
                    title: 'Become The Star',
                    subtitle: "Let The Spot Light Capture You",
                },
            ]}
        />

    );

}