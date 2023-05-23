import { StyleSheet, View, Text, FlatList, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Swiper from '../components/Swiper';

const data = [
  {
    id: 1,
    image: require('../assets/images/watch7.jpeg'),
    title: 'Apple Watch Series 7',
    description: 'The future of health is on your wrist',
    price: '$399',
  },
  {
    id: 2,
    image: require('../assets/images/airpod.jpeg'),
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    image: require('../assets/images/airpodmax.jpeg'),
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },
  {
    id: 4,
    image: require('../assets/images/charger.png'),
    title: 'Charger',
    description: "It's not magic, it's just science",
    price: '$49',
  },
  {
    id: 5,
    image: require('../assets/images/lock.jpeg'),
    title: 'Smart Lock',
    description: 'Unlock your door with your phone',
    price: '$199',
  },
];

export default function Carousel() {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
        paddingLeft: inset.left,
        paddingRight: inset.right,
        backgroundColor: '#fff',
      }}
    >
      <Swiper
        data={data}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image style={styles.image} source={item.image} resizeMode="contain" />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.6,
    width: '100%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});
