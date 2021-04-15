import React, { ReactElement, useState } from "react";
import Carousel, {
  ParallaxImage,
  Pagination,
  AdditionalParallaxProps,
} from "react-native-snap-carousel";
import { Dimensions, View, Text } from "react-native";
import { carouselStyle, paginationStyle, parallaxStyle } from "./styles";

interface SliderData {
  imageUri: string;
  title: string;
  description: string;
  redirectSource: string;
}

interface SliderProps {
  data: Array<SliderData>;
}

interface RenderFuncArgs {
  item: SliderData;
  index: number;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Slider = (props: SliderProps): ReactElement => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = (
    { item, index }: RenderFuncArgs,
    parallaxProps: AdditionalParallaxProps,
  ) => {
    return (
      <View style={parallaxStyle.container}>
        <ParallaxImage
          key={`carouselItem${index}`}
          source={{ uri: item.imageUri }}
          containerStyle={carouselStyle.imageContainer}
          style={carouselStyle.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={parallaxStyle.textContainer}>
          <Text style={parallaxStyle.title}>{item.title}</Text>
          <Text style={parallaxStyle.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={activeSlide}
        containerStyle={paginationStyle.container}
        dotContainerStyle={[
          paginationStyle.dotContainer,
          { marginHorizontal: props.data.length > 5 ? 10 : 20 },
        ]}
        dotStyle={[
          paginationStyle.dot,
          {
            width:
              (screenWidth - 44 - 20 * props.data.length) / props.data.length,
          },
        ]}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
      />
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenHeight}
        itemWidth={screenWidth}
        data={props.data}
        renderItem={renderItem}
        hasParallaxImages={true}
        enableSnap={true}
        loop={true}
        loopClonesPerSide={props.data.length}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplay={true}
        autoplayInterval={10000}
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
      />
    </>
  );
};

export default Slider;
