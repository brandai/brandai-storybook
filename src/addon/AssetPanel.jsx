import React, {Component} from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

const styles = {
  panel: {
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    padding: 15,
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    color: 'rgb(68,68,68)'
  },
  imageContainer: { padding: 10 },
  componentImage: { maxWidth: '100%', height: 'auto', display: 'block' },
  infoContainer: { padding: 10 },
  info: {},
  brandaiUrl:{}
};

export default class AssetPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    component: PropTypes.object,
    brandaiUrl: PropTypes.string
  };

  render() {
    var component = this.props.component;
    return (
      <div style={styles.panel}>
        <div style={styles.imageContainer}>
          <img src={component.url} style={styles.componentImage}/>
        </div>
        <div style={styles.infoContainer}>
          <div><em>name: </em>{component.displayName}</div>
          <div><em>description: </em>{component.description}</div>
        </div>
        <div style={styles.brandaiUrl}>
          <a href={this.props.brandaiUrl} target="_blank">Brand.ai</a>
        </div>
      </div>
    )
  };
};
