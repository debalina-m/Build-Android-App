import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

// Added by D
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

// other imports
import { listTodos } from './src/graphql/queries';
// Added by D


const Stack = createStackNavigator();

//export default function App(props) {  /// chaned by D
type props = {};
export default class App extends React.Component<props> {

  //Added by D
  takePic(){
    ImagePicker.showImagePicker({}, (response)=>{
      console.log(response);
    })
  }
  //Added by D

  render() {
  //  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const { getInitialState } = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
      async function loadResourcesAndDataAsync() {
        try {
          SplashScreen.preventAutoHide();

          // Load our initial navigation state
          setInitialNavigationState(await getInitialState());

          // Load fonts
          await Font.loadAsync({
            ...Ionicons.font,
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          });
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          setLoadingComplete(true);
          SplashScreen.hide();
        }
      }

      loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
          //Added by D
          <TouchableOpacity onPress={this.takePic.bind(this)}>
            <Text>Take Picture</Text>
          </TouchableOpacity>
          //Added by D
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
