import React from "react";
import {View, Text, StyleSheet, TextInput, Button, Modal, FlatList, SafeAreaView} from "react-native"
import {setName, setAge, setModal, setList, deleteUser, editModal, updateUser} from './action/action'
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {

    const dispatch = useDispatch();
    const visible= useSelector(state=> state.add.visible)
    const name = useSelector(state => state.add.name);
    const age = useSelector(state => state.add.age);
    const Data = useSelector(state=>state.add.Data);
    const edit = useSelector(state => state.add.edit)

    

    const renderitem = ({item}) => {
    return(
    <View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
    
    <View style={styles.button}>
        <View style={styles.btn}>
        <Button title ="Edit" onPress ={() => dispatch(editModal(true))}/>
        </View>
        <View style={styles.btn}>
            <Button title ="Delete" onPress ={() => dispatch(deleteUser(item))}/>
            </View>
            </View>
            <Modal animationType ='fade'
            visible={edit}>
            <TextInput placeholder ="name" defaultValue={name} style={styles.placeholder}  onChangeText={(text)  => {dispatch(setName(text))}}  />
            <TextInput placeholder ="age"  defaultValue={age}  style={styles.placeholder}  onChangeText={(text)  => {dispatch(setAge(text))}}/>
            <View style={styles.button}>
                <View style={styles.btn}>
                    <Button title ="update" onPress={()=> { 
                    dispatch(updateUser(name,age))
                    dispatch(editModal(false))}} /> 
                    {/* }} /> */}
                    </View>
                    <View style={styles.btn}>
                    <Button title="clear" onPress={() => dispatch(editModal(false))}/>
                    </View>
                    </View>
                    </Modal>
            </View>
    )
  }

  
    return (
        <SafeAreaView style={styles.container}>
           <Button title ="click" onPress={()=> {dispatch(setModal(true))}} />
           <Modal animationType='slide' visible={visible} >
                <SafeAreaView>
                <TextInput placeholder ="name" defaultValue={name} style={styles.placeholder}  onChangeText={(text)  => {dispatch(setName(text))}}  />
                <TextInput placeholder ="age"  defaultValue={age}  style={styles.placeholder}  onChangeText={(text)  => {dispatch(setAge(text))}}/>
                <Button title ="close" onPress={()=> { 
                    dispatch(setList(name,age))
                    dispatch(setModal(false))}} />  
                </SafeAreaView>
            </Modal>
            <FlatList
            data={Data}
            renderItem={renderitem}
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
container:{
    flex:1
},
text:{
    padding:20,
    margin:20,
    fontSize:20
}, 
placeholder:{
       borderWidth:1,
       padding:10,
       height:40,
       margin:10,
       width:"60%",
       marginLeft:40
},
button:{
    flexDirection:'row',
    padding:20,
    margin:10
  },
  btn:{
      width:100,
      marginLeft:50,
      marginRight:50
  }
})
export default HomeScreen;