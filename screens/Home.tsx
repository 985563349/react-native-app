import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
        paddingLeft: inset.left,
        paddingRight: inset.right,
      }}
    >
      <Text>Home</Text>
    </View>
  );
}
