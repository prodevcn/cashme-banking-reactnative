import React from "react";
import { useTranslation } from "react-i18next";
import { View, Label, Text, Button } from "native-base";
import Screen from "../../../../components/Screen";
import Avatar from "../../../../components/Avatar";
import HorizontalSummary from "../../../../components/HorizontalSummary";
import Dropdown from "../../../../components/Dropdown";
import PhoneInput from "../../../../components/PhoneInput";
import { NOTIFICATION_METHODS, DISPUTE_SOLUTION } from "../../../../constants";

import styles from "./styles";

interface IPersonalInfoProps {
  wizard: React.MutableRefObject<any>;
}

const PersonalInfo = ({ wizard }: IPersonalInfoProps) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    wizard.current.next();
  };

  return (
    <Screen isLoading={false} hasHeader={false} isNonScrolling={false}>
      <>
        <View style={styles.avatar}>
          <Avatar
            name="Hayk"
            source={"https://reactnative.dev/img/tiny_logo.png"}
          />
        </View>

        <View style={styles.name}>
          <Text style={styles.nameText}>Հայկ Փիլոսյան</Text>
        </View>

        <HorizontalSummary
          style={styles.horizontalSummary}
          items={["06/05/2000", "560266555599"]}
        />

        <View style={styles.item}>
          <View style={styles.itemLabel}>
            <Label style={styles.label}>
              {t("credit_steps.personal_info.phone")}
            </Label>
          </View>
          <View style={styles.itemValue}>
            <Text>+37491935835</Text>
          </View>
        </View>

        <Label style={styles.label}>
          {t("credit_steps.personal_info.second_phone")}
        </Label>
        <PhoneInput style={styles.phoneInput} />

        <View style={styles.item}>
          <View style={styles.itemLabel}>
            <Label style={styles.label}>
              {t("credit_steps.personal_info.email")}
            </Label>
          </View>
          <View style={styles.itemValue}>
            <Text>example@aobyte.com</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemLabel}>
            <Label style={styles.label}>
              {t("credit_steps.personal_info.country")}
            </Label>
          </View>
          <View style={styles.itemValue}>
            <Text>Armenia, Yerevan</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemLabel}>
            <Label style={styles.label}>
              {t("credit_steps.personal_info.address")}
            </Label>
          </View>
          <View style={styles.itemValue}>
            <Text style={styles.itemValueText}>
              Yerevan, Hakob Hakobyan st. 3, app. 4
            </Text>
          </View>
        </View>

        <Label style={styles.label}>
          {t("credit_steps.personal_info.notification.method")}
        </Label>
        <Dropdown
          onChange={(item: any) => console.log(item)}
          label={t("credit_steps.personal_info.notification.method")}
          options={NOTIFICATION_METHODS}
          style={styles.dropdown}
        ></Dropdown>

        <Label style={styles.label}>
          {t("credit_steps.personal_info.dispute_solution.method")}
        </Label>
        <Dropdown
          onChange={(item: any) => console.log(item)}
          label={t("credit_steps.personal_info.dispute_solution.method")}
          options={DISPUTE_SOLUTION}
          style={styles.dropdown}
        ></Dropdown>

        <Button full rounded onPress={handleSubmit} style={styles.submitBtn}>
          <Text>{t("credit_steps.personal_info.submit")}</Text>
        </Button>
      </>
    </Screen>
  );
};

export default PersonalInfo;
