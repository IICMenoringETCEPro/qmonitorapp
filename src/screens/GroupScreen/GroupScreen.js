import React, { Component } from 'react';
import { View } from 'react-native';

import GroupsList from '../../components/GroupsList';
import styles from './styles';
import FormButton from '../../components/FormButton';

export default function GroupScreen({ navigation }) {



        return (
            <View style={styles.container}>
                <GroupsList />
                <FormButton
                buttonTitle="Chat with Friends"
                onPress={() => navigation.navigate('Chat')}
                />

            </View>
        );

}