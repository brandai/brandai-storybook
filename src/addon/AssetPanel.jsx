import React, {Component} from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

const infoTextColor = '#acacac';
const defaultTextSpacing = 10;
const containerSpacing = '0 15px 15px 0';

const styles = {
  panel: {
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 30,
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    color: 'rgb(68,68,68)'
  },
  imageContainer: { margin: containerSpacing },
  componentImage: { maxWidth: '100%', height: 'auto', display: 'block' },
  infoContainer: {
    margin: containerSpacing,
    componentName: { fontWeight: 'bold', marginRight: defaultTextSpacing },
    description: { marginTop: 10 },
    libraryInfo: { fontStyle: 'italic', color: infoTextColor, marginRight: defaultTextSpacing },
    separator: { color: infoTextColor, marginRight: defaultTextSpacing }
  },
  info: {},
  brandaiUrl: { position: 'absolute', bottom: 25, right: 25 }
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

  render() {
    var component = this.props.component;
    return (
      <div style={styles.panel}>
        <div style={styles.imageContainer}>
          <img src={component.url} style={styles.componentImage}/>
        </div>
        <div style={styles.infoContainer}>
          <span style={styles.infoContainer.componentName} title="Component name">{component.displayName}</span>
          <span style={styles.infoContainer.separator}>|</span>
          <span style={styles.infoContainer.libraryInfo} title="Organization">{this.props.organizationName}</span>
          <span style={styles.infoContainer.separator}>|</span>
          <a
            style={styles.infoContainer.libraryInfo}
            href={this.props.brandaiUrl}
            target="_blank"
            title={`Open the ${this.props.libraryName} design library in brand.ai`}
          >
            {this.props.libraryName}
          </a>
          <div style={styles.infoContainer.description} title="Component description">{component.description}</div>
        </div>
        <div style={styles.brandaiUrl}>
          <a href="https://brand.ai" target="_blank" title="Brand.ai">
            <img
              style={{ height: 24 }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABQCAYAAAB7w7tYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIxRDcxNkYzNTgwMTFFNUFFNTFDRjdFQ0VCMURGRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIxRDcxNzAzNTgwMTFFNUFFNTFDRjdFQ0VCMURGRDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjFENzE2RDM1ODAxMUU1QUU1MUNGN0VDRUIxREZEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMjFENzE2RTM1ODAxMUU1QUU1MUNGN0VDRUIxREZEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psvhn+UAAApRSURBVHja7F1pbBVV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"
            />
          </a>
        </div>
      </div>
    )
  };
};
