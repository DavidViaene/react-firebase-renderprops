import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {value: null};

    this.query = null;
    this.initQuery = this.initQuery.bind(this);
    this.addListener = this.addListener.bind(this);
  }

  static propTypes = {
    limitToLast: PropTypes.number,
    render: PropTypes.func,
    reference: PropTypes.object.isRequired,
    on: PropTypes.bool,
    onChildAdded: PropTypes.bool,
    once: PropTypes.bool,
    toArray: PropTypes.bool,
    onChange: PropTypes.func,
    wait: PropTypes.bool,
    orderByKey: PropTypes.bool,
    startAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  componentDidMount() {
    this.addListener();
  }

  componentWillUnmount() {
    this.query.off();
  }

  componentDidUpdate(prevProps) {
    const {limitToLast, wait} = this.props;

    // If these properties change, we build the query again
    if (limitToLast !== prevProps.limitToLast || wait !== prevProps.wait) {
      this.query.off();
      this.addListener();
    }
  }

  initQuery() {
    const {reference, limitToLast, orderByKey, startAt} = this.props;
    const query = reference;

    if (limitToLast) {
      query.limitToLast(limitToLast);
    }

    if (orderByKey) {
      query.orderByKey();
    }

    if (startAt) {
      query.startAt(startAt);
    }

    this.query = query;
  }

  addListener() {
    const {on, once, onChildAdded, onChange, wait} = this.props;

    if (wait) {
      return false;
    }

    this.initQuery();

    // Listens to changes
    if (on) {
      this.query.on('value', snapshot => {
        const value = snapshot.val();
        this.setState({value});
        if (onChange) {
          onChange(value);
        }
      });
    }

    // Listens to added children
    if (on) {
      this.query.on('child_added', snapshot => {
        const value = snapshot.val();
        this.setState({value});
        if (onChange) {
          onChange(value);
        }
      });
    }

    // Query once
    if (once) {
      this.query.once('value').then(snapshot => {
        const value = snapshot.val();
        this.setState({value});
        if (onChange) {
          onChange(value);
        }
      });
    }
  }

  render() {
    const {render, toArray} = this.props;
    const {value} = this.state;
    let renderValue = value;

    if (toArray) {
      renderValue = value
        ? Object.keys(value).map(key => ({key, ...value[key]}))
        : [];
    }

    return render ? render(renderValue || null) : null;
  }
}

export default FirebaseQuery;
