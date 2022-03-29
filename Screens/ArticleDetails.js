import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert
  } from 'react-native';
  import {Button} from 'react-native-paper';



function ArticleDetails(props) {
    const data = props.route.params.data;
    const deletedData = (data) => {
        fetch(`http://192.168.68.108:80/articles/${data.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(data => {
            props.navigation.navigate('Home')
        })
        .catch(error => Alert.alert('Error', error))
    }


    return (
        <ScrollView>
        <View style = {styles.viewStyle}>
            <Text style = {{fontSize:25}}>
                {data.title}
            </Text>
            <Text style = {{fontSize: 20, marginTop: 30}}>
                {data.description}
            </Text>
            <View style = {styles.btnStyle}>
                <Button
                    icon = 'update'
                    mode = 'contained'
                    onPress={() => props.navigation.navigate('Edit',{data:data})}
                >Edit</Button>

                <Button
                    icon = 'update'
                    mode = 'contained'
                    onPress={() => deletedData(data)}
                >Delete</Button>
            </View>
        </View>
        </ScrollView>
    )
    }


const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        margin: 10,

    },
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15,
        padding: 10


    }
})

export default ArticleDetails