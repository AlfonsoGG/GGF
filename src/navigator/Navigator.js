import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import PreLoader from '../Components/PreLoader';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Preloader:{screen:PreLoader},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);