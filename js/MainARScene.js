'use strict';

import React, { Component } from 'react';

import { StyleSheet, Linking } from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro';


import FSAImageMarker from './FSAImageMarker.js'
import RobCardMarker from './RobCardMarker.js'
import JamesCardMarker from './JamesCardMarker.js'
import EFImageMarker from './EFImageMarker.js'

export class MainARScene extends Component {
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false
  };

  initializeAndCheckTracking() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  getARScene() {
    return (
      <ViroNode>

        <JamesCardMarker />

        <EFImageMarker />

        <RobCardMarker />

        <FSAImageMarker />

      </ViroNode>


    );
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.isTracking ? this.initializeAndCheckTracking() : this.getARScene()}
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true;
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false;
    }
  };
}

let styles = StyleSheet.create({
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: 0.5
  },
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'left',
    paddingTop: 0.005,
    fontWeight: 'bold'
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5
  },
  iconBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5
  },
  image: {
    height: 0.01,
    width: 0.01,
    marginTop: 0.005,
    marginLeft: 0.002,
    marginRight: 0.002
  },
});

ViroARTrackingTargets.createTargets({
  businessCard: {
    source: require('./res/businesscard.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05 // real world width in meters
  },
  robCard: {
    source: require('./res/rob-card.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  efLogoCard: {
    source: require('./res/ef/ef-logos/ef-logo-card.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  fsaLogo1: {
    source: require('./res/fsa/fsa-logos/fsa-basic-logo.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  fsaLogo2: {
    source: require('./res/fsa/fsa-logos/fsa-logo2.png'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  fsaLogo3: {
    source: require('./res/fsa/fsa-logos/fsa-logo3.png'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  appleLogo1: {
    source: require('./res/apple/apple-logos/apple_logo_black.png'),
    orientation: 'Up',
    physicalWidth: 0.05
  },
  appleLogo2: {
    source: require('./res/apple/apple-logos/apple_logo_silver.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: 'rgba(255,255,255,1)'
  },
  quad: {
    diffuseColor: 'rgba(0,0,0,0.5)'
  }
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0
    },
    easing: 'Bounce',
    duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0
    },
    easing: 'Bounce',
    duration: 500
  }
});

module.exports = MainARScene;
