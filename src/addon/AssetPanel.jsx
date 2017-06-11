import React, {Component} from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

const infoTextColor = '#acacac';
const defaultTextSpacing = 10;
const containerSpacing = '0 15px 15px 0';

const styles = {
  panel: {
    reset: {
      padding: 30,
      fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      color: 'rgb(68,68,68)'
    },
    container: {
      display: 'flex',
      flex: '1 1 auto',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignSelf: 'flex-start'
    }
  },
  image: {
    container: { margin: containerSpacing },
    component: { maxWidth: '100%', height: 'auto', display: 'block' }
  },
  info: {
    container: { margin: containerSpacing, },
    componentName: { fontWeight: 'bold', marginRight: defaultTextSpacing },
    description: { marginTop: 10 },
    libraryInfo: { fontStyle: 'italic', color: infoTextColor, marginRight: defaultTextSpacing },
    separator: { color: infoTextColor, marginRight: defaultTextSpacing }
  },
  brandaiUrl: {
    position: 'absolute', bottom: 0, right: 0, padding: '10px 15px', color: infoTextColor
  }
};

export default class AssetPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    organizationName: PropTypes.string,
    libraryName: PropTypes.string,
    component: PropTypes.object,
    brandaiUrl: PropTypes.string
  };

  renderComponentInfo() {
    var component = this.props.component;
    var infoStyle = styles.info;
    return (
      <div style={styles.panel.container}>
        <div style={styles.image.container}>
          <img src={component.url} style={styles.image.component}/>
        </div>
        <div style={styles.infoContainer}>
          <span style={infoStyle.componentName} title="Component name">{component.displayName}</span>
          <span style={infoStyle.separator}>|</span>
          <span style={infoStyle.libraryInfo} title="Organization">{this.props.organizationName}</span>
          <span style={infoStyle.separator}>|</span>
          <a
            style={infoStyle.libraryInfo}
            href={this.props.brandaiUrl}
            target="_blank"
            title={`Open the ${this.props.libraryName} design library in brand.ai`}
          >
            {this.props.libraryName}
          </a>
          <div style={infoStyle.description}
               title="Component description">{component.description}</div>
        </div>
      </div>);
  }

  render() {
    return (
      <div style={styles.panel.reset}>
        { this.props.component && this.renderComponentInfo()}
        <a
          style={styles.brandaiUrl}
          href={this.props.brandaiUrl || 'https://brand.ai'}
          target="_blank" title="Brand.ai"
        >
          Connect with Brand.ai
        </a>

      </div>
    )
  };
};
