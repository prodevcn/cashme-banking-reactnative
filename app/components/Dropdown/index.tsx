import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Text, Icon, View } from "native-base";
import { useTranslation } from "react-i18next";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";

import styles from "./styles";

interface DropdownProps {
  defaultText?: string;
  options: DropdownItem[];
  onChange?: Function;
  label?: string;
}

interface DropdownItem {
  text: string;
  value: string;
}

const Dropdown = ({
  defaultText,
  options = [],
  label,
  onChange = () => {},
  ...rest
}: DropdownProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState({ value: "", text: "" });
  const { t } = useTranslation();

  const snapPoints = useMemo(() => ["0%", "50%"], []);

  useLayoutEffect(() => {
    bottomSheetRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior="collapse"
        appearsOnIndex={1}
        disappearsOnIndex={0}
      />
    ),
    [],
  );

  const ModalBackground = () => (
    <View style={styles.backgroundContainer}></View>
  );

  const openDropdown = () => {
    setOpened(true);
    bottomSheetRef.current?.expand();
  };

  const closeDropdown = () => {
    setOpened(false);
    bottomSheetRef.current?.collapse();
  };

  const selectItem = (item: any, index: number) => {
    setSelected(item);
    closeDropdown();
    onChange(item);
  };

  const isSelected = (item: DropdownItem) => {
    return item.value == selected.value;
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={() => selectItem(item, index)}
        style={[styles.item]}
      >
        <Icon
          type="AntDesign"
          name="check"
          style={[styles.itemIcon, { opacity: isSelected(item) ? 1 : 0 }]}
        />
        <Text
          style={[styles.itemText, isSelected(item) && styles.selectedItemText]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    ),
    [selected],
  );

  return (
    <>
      <Button
        iconRight
        transparent
        full
        style={styles.btn}
        onPress={openDropdown}
        {...rest}
      >
        <Text style={styles.btnText}>
          {selected.text || defaultText || t("dropdown_default")}
        </Text>
        <Icon type="AntDesign" name={opened ? "up" : "down"} />
      </Button>

      <BottomSheetModal
        ref={bottomSheetRef}
        key="Dropdown"
        name="Dropdown"
        index={opened ? 1 : 0}
        snapPoints={snapPoints}
        dismissOnPanDown={false}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundComponent={ModalBackground}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        onAnimate={(fromIndex, toIndex) => setOpened(toIndex === 1)}
        animationDuration={500}
        style={styles.dropdownSheet}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>{label}</Text>
        </View>

        <BottomSheetFlatList
          data={options}
          keyExtractor={i => i.value}
          renderItem={renderItem}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              style={[styles.separator, highlighted && { marginLeft: 0 }]}
            />
          )}
        />
      </BottomSheetModal>
    </>
  );
};

export default Dropdown;
