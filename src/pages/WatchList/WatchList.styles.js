import { Dimensions } from 'react-native';

const {width, height } = Dimensions.get('window');

const styles = {
    container: {
      flex:1,
      paddingTop: height/100 ,
      paddingHorizontal: width/100,

    },
    
  };
  
  export default styles;