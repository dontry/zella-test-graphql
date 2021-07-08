import { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";

const ListZellerCustomers = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`;

interface IProps {
  userRole?: string;
  customers: any;
}

class Checklist extends Component<IProps> {
  render() {
    const { customers } = this.props;
    return (
      <List>
        {customers.map(({ id, name, role }: any) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <h1></h1>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={role} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default graphql(ListZellerCustomers, {
  options: {
    fetchPolicy: "cache-and-network"
  },
  props: (props) => ({
    customers: props.data.listZellerCustomers
      ? props.data.listZellerCustomers.items
      : []
  })
})(Checklist);
