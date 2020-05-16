import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import hexToRgba from 'hex-to-rgba';
import Icon from "react-native-vector-icons/FontAwesome";
import Block from "../Block/Block";
import Badge from "../Badge/Badge";
import Card from "../Card/Card";
import Text from '../Text/Text';
import { styles as cardStyles } from "../Card/Card";
import { colors, sizes, fonts } from "../../constants/theme";
import { SearchBar, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const transaction = [
  {
    id: 1,
    date: 'Yesterday',
    score: 7.2,
    distance: '45.6 mi',
    from: 'Midtown, San Jose, CA',
    to: 'Downtown, San Francisco, CA',
  },
  {
    id: 2,
    date: 'Oct 12',
    score: 8.3,
    distance: '837.9 mi',
    from: 'Burbank Avenue, San Martin, CA',
    to: 'Llagas Avenue, Los Angeles, CA',
  },
];
export default class Transactions extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  renderTransaction = (transaction) => {
    return (
      <Card shadow key={transaction.id}>
        <Block row space="between" style={{ marginBottom: sizes.base }}>
          <Text spacing={0.5} caption>
            {transaction.date}
          </Text>
          <Text spacing={0.5} caption medium primary>
            {transaction.score}
          </Text>
          <Text spacing={0.5} caption>
            {transaction.distance}
          </Text>
        </Block>
        <Block row center>
          <Badge
            color={hexToRgba(colors.accent, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={colors.accent} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {transaction.from}
          </Text>
        </Block>

        <Block row center style={{ paddingVertical: 4 }}>
          <Badge color="gray2" size={4} style={{ marginLeft: 4.5 }} />
        </Block>

        <Block row center>
          <Badge
            color={hexToRgba(colors.primary, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={colors.primary} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {transaction.to}
          </Text>
        </Block>
      </Card>
    );
  };

  renderTransactions() {
    return (
      <React.Fragment>
        {/* <Block style={{ marginBottom: sizes.base }}>
          <Text spacing={0.4} transform="uppercase">
            Transactions
          </Text>
        </Block> */}

        {transaction.map((transaction) => this.renderTransaction(transaction))}
       </React.Fragment>
    );
  }

  renderTransactionsButton() {
    const { navigation } = this.props;

    return (
      <Block center middle style={styles.startTrip}>
        <Badge color={hexToRgba(colors.primary, "0.1")} size={144}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Trip")}
          >
            <Badge color={colors.primary} size={62}>
              <Icon
                name="automobile"
                size={62 / 2.5}
                color="white"
              />
            </Badge>
          </TouchableOpacity>
        </Badge>
      </Block>
    );
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      bottomDivider
      chevron
    />
  )

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <ScrollView >
        <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={word => this.SearchFilterFunction(word)}
          onClear={word=> this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
        {this.renderTransactions()}
        {/* <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem} */}
    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 0 : 0,
  },
  textStyle: {
    padding: 10,
  },
});