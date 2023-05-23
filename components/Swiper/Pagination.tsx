import { StyleSheet, View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export type PaginationProps = {
  total: number;
  scrollX: Animated.Value;
};

export default function Pagination({ total, scrollX }: PaginationProps) {
  return (
    <View style={styles.container}>
      {Array(total)
        .fill(null)
        .map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.1],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#000', '#ccc'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={i} style={[styles.dot, { width: dotWidth, backgroundColor }]} />
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
});
