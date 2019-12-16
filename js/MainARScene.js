'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

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

export class MainARScene extends Component {
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false
  };

  getNoTrackingUI() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker
          target={'businessCard'}
          onAnchorFound={() =>
            this.setState({
              runAnimation: true
            })
          }
        >
          <ViroNode key="card">
            <ViroNode
              opacity={0}
              position={[0, -0.02, 0]}
              animation={{
                name: 'animateImage',
                run: this.state.runAnimation
              }}
            >
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}
              >
                <ViroFlexView style={styles.cardWrapper}>
                  <ViroImage
                    height={0.015}
                    width={0.015}
                    style={styles.image}
                    source={require('./res/avatar.jpeg')}
                  />
                  <ViroText
                    textClipMode="None"
                    text="James Fuller"
                    scale={[0.015, 0.015, 0.015]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
                <ViroFlexView
                  onTouch={() => alert('linkedin')}
                  style={styles.subText}
                >
                  <ViroText
                    width={0.01}
                    height={0.01}
                    textAlign="left"
                    textClipMode="None"
                    text="@jfuller957"
                    scale={[0.01, 0.01, 0.01]}
                    style={styles.textStyle}
                  />
                  <ViroAnimatedImage
                    height={0.01}
                    width={0.01}
                    loop={true}
                    source={require('./res/linkedin.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0}
              position={[0, 0, 0]}
              animation={{
                name: 'animateViro',
                run: this.state.runAnimation
              }}
            >
              <ViroText
                text="www.jfuller957.com"
                rotation={[-90, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
                style={styles.textStyle}
              />
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    );
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.isTracking ? this.getNoTrackingUI() : this.getARScene()}
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
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: 0.5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5
  }
});

ViroARTrackingTargets.createTargets({
  businessCard: {
    source: require('./res/businesscard.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05 // real world width in meters
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

// module.exports = BusinessCard;

module.exports = MainARScene;
