import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName]=useState('Tracy');
  const [quote, setQuote]=useState({index:0 , snippet: 'Deciding that you deserve better is radical as hell, because you are actively going against centuries of social brainwashing and oppression; you are telling the world that you see through its bullshit. That you acknowledge it wants you to exist in one way (marry the first man to “sweep you off your feet” and have his kids…), but instead choosing to go your own way and make up your own damn rules.'})
  

  

  


  const items = ['More and more, we locate the self in the body—not just our actual, flawed bodies but our transforming and imagined ones. Nobody is firm enough, thin enough, smooth enough, or buff enough—not without significant effort and cosmetic intervention. And as more demanding practices become the norm, more will be required of us, and the beauty ideal will be harder and harder to resist.', 
    'The notion of beauty is not a single concept; it is a language that tells a story about who we are. When we strip away the layers imposed by the fashion and beauty industries, we reveal the raw and authentic self—a self that defies conventional standards.', 
    'Fat phobia is not about health; it is about the fear of the black body. Historically, fatness was associated with blackness, and thinness became a means of distancing oneself from racial otherness. This racial bias continues to influence our perception of body size today.',
     'A culture fixated on female thinness is not an obsession about female beauty, but an obsession about female obedience. Dieting is the most potent political sedative in womens history; a quietly mad population is a tractable one.', 
     'When you are beauty sick, you cannot engage with the world, because between you and the world is a mirror. A funhouse mirror, distorting your vision, making you think that your reflection is the most important part of you.'];

  const clickHandler =() =>{
    setName('Juniper');
    const randomIndex = Math.floor(Math.random() * items.length);
    setQuote({index:randomIndex, snippet: items[randomIndex]})

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hi {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>{quote.snippet}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
         <Button title="Change Name" onPress={clickHandler}/> 
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
  
    backgroundColor: '#D7BE82',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#7A4419'
  },
  body: {
    backgroundColor: '#F5F0E0',
    padding: 20 ,
  },
  buttonContainer: {
    marginTop: 20,
  }
});


// Colors
// parchment: #F6EFE0
// russet: #7A4419
//eccru: #D7BE82
// thulian: #E06C9F
// myrtle green: 538083