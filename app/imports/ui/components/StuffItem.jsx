import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const StuffItem = (props) => (
    <Table.Row>
      <Table.Cell>{props.stuff.name}</Table.Cell>
      <Table.Cell>{props.stuff.quantity}</Table.Cell>
      <Table.Cell>{props.stuff.condition}</Table.Cell>
      <Table.Cell>
        <Link to={`/edit/${props.stuff._id}`}>Edit</Link>
      </Table.Cell>
    </Table.Row>
);

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
