import React from 'react';
import {getJobs} from './networking/API';
import { StyleSheet, Text, View,SafeAreaView,FlatList,Image } from 'react-native';

const img = require ('./assets/images/logo-h-vjobs.png');

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {jobs: []}
  }

  componentDidMount(){
    getJobs()
      .then(jobs => this.setState({jobs})).catch(error =>console.log(error))
  }
   renderHeader() {
    return ( <Image style={{margin:16, alignSelf:'center'}} 
              source={img}/>
    )
  }


  renderList(){
    const vagas = [
      {name: 'Vaga 1',id: '1'},
      {name: 'Vaga 2',id: '2'},
      {name: 'Vaga 3',id: '3'},
      {name: 'Vaga 4',id: '4'},
      {name: 'Vaga 5',id: '5'},
      {name: 'Vaga 6',id: '6'},
      {name: 'Vaga 7',id: '7'},
      {name: 'Vaga 8',id: '8'},
      {name: 'Vaga 9',id: '9'},
      {name: 'Vaga 10',id: '10'}
    ]
    const separatorStyle = {
        flexGrow:1, height:5,backgroundColor:'#fff' 
    }

    return (
      <FlatList 
      data={vagas}
      style= {{ flex:1, backgroundColor: 'white' }}
      renderItem={({item}) => this.renderItem(item)}
      ListHeaderComponent={()=> this.renderHeader()}
      ItemSeparatorComponent={() => <View style={separatorStyle}/>}
      keyExtractor={(item) => `${item.id}`}
      />

    );
  }

  renderItem(vaga) {
    return(
      <Text style={{
        paddingHorizontal:16,
        paddingVertical:8,
        minHeight: 48,
        fontWeight: 'bold',
        borderColor: '#000',
        backgroundColor:'#ccc'
      }}>{vaga.name}</Text> 
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>   
      {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
