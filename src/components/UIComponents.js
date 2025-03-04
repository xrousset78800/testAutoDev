// src/components/UIComponents.js

import React from 'react';

class StatusDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.statusText}
      </div>
    );
  }
}

export class QualitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuality: props.defaultQuality,
    };
  }

  handleQualityChange = (quality) => {
    this.setState({ selectedQuality: quality });
  };

  render() {
    return (
      <select value={this.state.selectedQuality} onChange={(e) => this.handleQualityChange(e.target.value)}>
        {Object.keys(this.props.qualities).map((quality, index) => (
          <option key={index} value={quality}>{quality}</option>
        ))}
      </select>
    );
  }
}

export class DebugPanel extends React.Component {
  render() {
    return (
      <div>
        {this.props.debugInfo}
      </div>
    );
  }
}

export default [StatusDisplay, QualitySelector, DebugPanel];
