import React, { ReactElement, useState } from "react";
import Carousel, {
  ParallaxImage,
  Pagination,
  AdditionalParallaxProps,
} from "react-native-snap-carousel";
import { Dimensions, View, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "native-base";

import { carouselStyle, paginationStyle, parallaxStyle } from "./styles";

interface SliderData {
  image: any;
  title: string;
  description: string;
  redirectScreenName: string;
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
  const { t } = useTranslation();
  const { data } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const { navigate } = useNavigation();

  const renderItem = (
    { item, index }: RenderFuncArgs,
    parallaxProps: AdditionalParallaxProps,
  ) => {
    return (
      <View style={parallaxStyle.container}>
        <ParallaxImage
          key={`carouselItem${index}`}
          source={{}}
          containerStyle={carouselStyle.imageContainer}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Image source={item.image} style={carouselStyle.image} />
        <View style={parallaxStyle.textContainer}>
          <Text style={parallaxStyle.title}>{item.title}</Text>
          <Text style={parallaxStyle.description}>{item.description}</Text>
          <Button
            rounded
            light
            style={parallaxStyle.button}
            onPress={() => navigate(item.redirectScreenName)}
          >
            <Text>{t("learn_more")}</Text>
          </Button>
        </View>
      </View>
    );
  };

  return (
    <>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={paginationStyle.container}
        dotContainerStyle={[
          paginationStyle.dotContainer,
          { marginHorizontal: data.length > 5 ? 10 : 20 },
        ]}
        dotStyle={[
          paginationStyle.dot,
          {
            width: (screenWidth - 44 - 20 * data.length) / data.length,
          },
        ]}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
      />
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenHeight}
        itemWidth={screenWidth}
        data={data}
        renderItem={renderItem}
        hasParallaxImages={true}
        enableSnap={true}
        loop={true}
        loopClonesPerSide={data.length}
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
