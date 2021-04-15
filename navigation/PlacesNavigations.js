import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import { Platform } from 'react-native';
import colors from './../utils/colors'
// screens
import PlacesListScreen from './../screen/PlacesListScreen'
import PlaceDetailsScreen from './../screen/PlaceDetailsScreen'
import NewPlaceScreen from './../screen/NewPlaceScreen'
import MapScreen from './../screen/MapScreen'


const PlaceNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetails: PlaceDetailsScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: Platform.OS === 'android' ? colors.primary : '' },
        headerTintColor: Platform.OS === 'android' ? 'black' : colors.primary
    },
})


export default createAppContainer(PlaceNavigator)