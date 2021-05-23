import React, { useState } from "react";
import { Button, Text, View } from "native-base";

import ArrowUp from "../../../../assets/images/chevron-up.svg";
import ArrowDown from "../../../../assets/images/chevron-down.svg";
import customColor from "../../../../theme/customColor";
import styles from "./styles";

interface QuestionProps {
  question?: any;
}

const QuestionListItem = (props: QuestionProps) => {
  const { question = {} } = props;
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={[styles.questionBox, showMore && styles.extendedBox]}>
      {!showMore ? (
        <View style={styles.minimizedBox}>
          <View style={styles.descriptionSection}>
            <Text style={styles.questionTxt}>{question.question}</Text>
          </View>
          <View style={styles.buttonSection}>
            <Button
              transparent
              style={styles.shapedBtn}
              onPress={() => {
                setShowMore(true);
              }}
            >
              <ArrowDown />
            </Button>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.question}>{question.question}</Text>
          <Text style={styles.answer}>{question.answer}</Text>
          <Button
            transparent
            style={styles.centerPosition}
            onPress={() => {
              setShowMore(false);
            }}
          >
            <ArrowUp width={16} height={16} color={customColor.brandDark} />
          </Button>
        </View>
      )}
    </View>
  );
};

export default QuestionListItem;
