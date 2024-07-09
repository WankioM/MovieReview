import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName]=useState('Tracy');
  const [quote, setQuote]=useState({index:0 , snippet: 'Deciding that you deserve better is radical as hell, because you are actively going against centuries of social brainwashing and oppression; you are telling the world that you see through its bullshit. That you acknowledge it wants you to exist in one way (marry the first man to “sweep you off your feet” and have his kids…), but instead choosing to go your own way and make up your own damn rules.'})
  const [themes, setThemes] = useState([
    { theme: "Don't overinvest in those who don't reciprocate your energy.", key: '1' },
    { theme: 'Cuddle cravings stem from unproductive weeks and unmet achievements.', key: '2' },
    { theme: 'Avoid putting people on unrealistic pedestals; it skews perspectives.', key: '3' },
    { theme: 'Acknowledge personal growth requires accountability for your boundaries.', key: '4' },
    { theme: 'Recognize love accepted reflects your self-perceived worth.', key: '5' },
    { theme: "Unpack desirability bias by respecting those you're not attracted to.", key: '6' },
    { theme: 'Embrace self-love and reject societal expectations for genuine happiness.', key: '7' },
    { theme: 'Beware falling for projections rather than true multifaceted individuals.', key: '8' },
    { theme: 'Challenge normalized abuse to seek partners you truly deserve.', key: '9' },
    { theme: 'Maintain journaling to avoid feeling lost and reignite your inner fire.', key: '10' }
]);


  

  


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
      

      <Text> Enter Name</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g John Doe'
      onChangeText={(val)=> setName(val)} />
      <View style={styles.header}>
        <Text style={styles.boldText}>Hi {name}</Text>
      </View>

      <View style={styles.body}>
        <Text >{quote.snippet}
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
  },
  input: {
    borderWidth:1,
    borderColor:'#7A4419',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius:2,
  },
  listContainer: {
    flex: 1,
    padding:0,
  }
});


// Colors
// parchment: #F6EFE0
// russet: #7A4419
//eccru: #D7BE82
// thulian: #E06C9F
// myrtle green: 538083