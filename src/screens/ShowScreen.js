import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons';
const ShowScreen = ({navigation}) => {
    const {state}=useContext(Context);

    const blogPost=state.find((blogPost) => blogPost.id ===navigation.getParam('id'))
    
    return <View>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions= ({navigation})=>{
    return {
        headerRight:(<TouchableOpacity onPress = {() => 
        {navigation.navigate('Edit', { id: navigation.getParam('id')})}}>
            <Text>Edit</Text>
            <FontAwesome name='pencil' size={30}/>

        </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({

});
export default ShowScreen;