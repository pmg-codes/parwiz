import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert
  } from 'react-native';
import {TextInput, Button} from 'react-native-paper';


function Create(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const InsertData = () => {
      fetch('http://192.168.68.108:80/articles/', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        
        },
        body: JSON.stringify({title:title, description:description})
      })
      .then (resp => resp.json())
      .then(data => {
        props.navigation.navigate('Home')
      })
      .catch(error => console.log('Error'))


    }


  return (
    <View>
        <TextInput style = {styles.inputStyle}
            label='Title'
            value={title}
            mode = 'outlined'

            onChangeText = {text => setTitle(text)}
        />
        <TextInput style = {styles.inputStyle}
            label='Description'
            value={description}
            mode = 'outlined'
            multiline
            numberOfLines={10}
            onChangeText = {text => setDescription(text)}
        />

        <Button style = {{marginLeft: 10, marginRight:10, marginTop:30}}
        icon='pencil'
        mode = 'contained'
        onPress = {() => InsertData()}


        >Insert Article</Button>
    </View>
  )
}


const styles = StyleSheet.create({
    inputStyle: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30

    }
})

export default Create