import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AssetPanel from './AssetPanel';

import fetchLibrary from '../library-fetcher';

import _kebabCase from 'lodash/kebabCase';

import flatMap from 'lodash/fp/flatMap';
import filter from 'lodash/fp/filter';
import reduce from 'lodash/fp/reduce';
import flow from 'lodash/fp/flow';

export default class AssetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { kind: null, storyName: null, componentLookup: {} };
    if (props.dataUrl) {
      this.brandaiUrl = props.dataUrl.replace(/assets\./, '').replace(':3002', ':3000').replace(/\/style-data.*/i, '');
    }
  }

  static propTypes = {
    channel: PropTypes.object,
    api: PropTypes.object,
    dataUrl: PropTypes.string
  };

  componentDidMount() {
    this.getLibrary();

    this.props.api.onStory((kind, story) => {
      this.setState(() => {return { kind: kind, storyName: story }})
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.kind !== nextState.kind) {
      console.log('fetch:' + nextState.kind);
    }
  }

  getLibrary() {
    fetchLibrary(this.props, (error, library) => {
      if (!error) {
        this.setState({
          componentLookup: this.createComponentLookup(library),
          organizationName: library.organization,
          libraryName: library.name
        });
      }
    });
  }

  getComponentKey(kind, storyName) {
    var key = null;
    if (kind) {
      key = _kebabCase(kind);
    }
    if (key && storyName) {
      key = `__${_kebabCase(storyName)}`;
    }
    return key;
  }

  getComponent() {
    var componentKey = this.getComponentKey(this.state.kind, this.state.storyName);
    var component = this.state.componentLookup[componentKey];
    if (!component) {
      componentKey = this.getComponentKey(this.state.kind);
      component = this.state.componentLookup[componentKey];
    }

    return component;
  }

  createComponentLookup(library) {
    var result = {};
    if (!library || !library.componentImageSections || library.componentImageSections.length === 0) {
      return result;
    }

    var allComponents = flatMap(section => section.components);
    var withStorybook = filter(component => component.storybook);
    var toLookup = reduce((res, component) => {
      var key = this.getComponentKey(component.storybook.kind, component.storybook.storyName);
      if (key) {
        result[key] = component;
      }
      return res;
    }, result);

    flow(allComponents, withStorybook, toLookup)(library.componentImageSections);

    return result;
  }

  render() {
    if (!this.state.kind || !this.state.organizationName) {
      return null;
    }
    var component = this.getComponent();

    return (
      <AssetPanel
        organizationName={this.state.organizationName}
        libraryName={this.state.libraryName}
        component={component}
        brandaiUrl={this.brandaiUrl}/>
    )
  };
};
