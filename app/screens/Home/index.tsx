import React, { Component, ComponentType } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";
import { View } from "native-base";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";
import withLoginSheet from "../../hocs/withLoginSheet";
import Slider from "../../components/Slider";

import styles from "./styles";

interface HomeProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class Home extends Component<HomeProps> {
  render() {
    const data = [
      {
        imageUri:
          "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:02d1ba05-73d0-4f9f-873c-2e7361815ea4;revision=0?component_id=0247dad2-03a6-41a6-ad04-b606076bc43a&api_key=CometServer1&access_token=1618269852_urn%3Aaaid%3Asc%3AUS%3A02d1ba05-73d0-4f9f-873c-2e7361815ea4%3Bpublic_4dbc9d6d9a180add6fc293ec610893bd33a93760",
        title: "Cash me",
        description: "Receive money in your account in as little as 5 min",
        redirectSource: "",
      },
      {
        imageUri:
          "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:02d1ba05-73d0-4f9f-873c-2e7361815ea4;revision=0?component_id=cb1b2c3e-e05f-40b1-91d2-be5fc78778d8&api_key=CometServer1&access_token=1618269852_urn%3Aaaid%3Asc%3AUS%3A02d1ba05-73d0-4f9f-873c-2e7361815ea4%3Bpublic_4dbc9d6d9a180add6fc293ec610893bd33a93760",
        title: "Arpi Solar",
        description: "Receive money in your account in as little as 5 min",
        redirectSource: "",
      },
      {
        imageUri:
          "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:02d1ba05-73d0-4f9f-873c-2e7361815ea4;revision=0?component_id=aa97d46d-bc89-445d-95c5-8e12f3a860d3&api_key=CometServer1&access_token=1618269852_urn%3Aaaid%3Asc%3AUS%3A02d1ba05-73d0-4f9f-873c-2e7361815ea4%3Bpublic_4dbc9d6d9a180add6fc293ec610893bd33a93760",
        title: "Pay for me",
        description: "Receive money in your account in as little as 5 min",
        redirectSource: "",
      },
    ];

    return (
      <View style={styles.container}>
        <Slider data={data} />
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation(), withLoginSheet)(Home);
