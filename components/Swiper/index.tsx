import { useRef, useState } from 'react';
import { StyleSheet, FlatList, View, Animated } from 'react-native';
import type { ListRenderItem, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import Pagination from './Pagination';

export type SwiperProps<ItemT> = {
  data?: ArrayLike<ItemT> | null | undefined;
  renderItem?: ListRenderItem<ItemT> | null | undefined;
};

export default function Swiper<ItemT = any>({ data, renderItem }: SwiperProps<ItemT>) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false }
    )(event);
  };

  return (
    <View
      style={styles.swiper}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setLayout({ width, height });
      }}
    >
      <FlatList
        data={data}
        renderItem={(info) => (
          <View key={info.index} style={layout}>
            {renderItem?.(info)}
          </View>
        )}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />

      {data?.length ? <Pagination total={data.length} scrollX={scrollX} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  swiper: {
    flex: 1,
    position: 'relative',
  },
});
