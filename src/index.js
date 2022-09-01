
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './homeScreen';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
             <HomeScreen/> 


        </Provider>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

export default App;