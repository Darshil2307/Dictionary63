import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component{
    constructor(){
    super();
      this.state = {
         text:'',
         isSearchPressed:false,
         isLoading:false,
         word : "Loading...",
         lexicalCategory :"",
         definition:"" 
      }
    }

    getWord=(word)=>{
      var searchKeyword=word.toLowerCase()
      var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json" 

      return fetch(url)
      .then((data)=>{
         if(data.status===200){
           return data.json()  
         } 
         else{
            return null 
         }
      })
      .then((response)=>{
        var responseObject = response 

        if(responseObject){
          var wordData = responseObject.definitions[0]
          var definition = wordData.description
          var lexicalCategory = wordData.wordtype
          
          this.setState({
            "word" : this.state.text,
            "definition" :definition,
            "lexicalCategory": lexicalCategory  
          })
        }
        else{
          this.setState({
             "word" :this.state.text,
             "definition" : "Not Found" 
        })                      
        } 
      })
    }

    render(){
      return(
        <TextInput
        style={styles.inputBox}
        onChangeText={ text => {
         this.setState({
            text:text,
            isSearchPressed: false,
            word: "Loading...",
            lexicalCategory:'',
            examples : [],
            definition : "" 
         });
        }}
        value={this.state.text}
        />   
        <View>
        <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          this.setState({ isSearchPressed:true});
          this.getWord(this.state.text) 
        }}>
         <Text style={styles.searchText}>Search</Text>            
        </TouchableOpacity>
        </View>
        
    );
}
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 30,
        alignSelf: 'center',
        width: '60%',
        height: 55,
        borderWidth: 3,
        backgroundColor: '#c9c4bb',
        borderRadius:30,
        textAlign: 'center',
      },
      searchButton:{
        width:'40%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        borderWidth:3,
        borderRadius:20,
      },  
        
});