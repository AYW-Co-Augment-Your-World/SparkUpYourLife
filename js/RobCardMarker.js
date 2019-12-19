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



export class RobCardMarker extends Component {
  state = {
    runAnimation: false
  };
  render() {
    return (

      <ViroARImageMarker
      target={'robCard'}
      onAnchorFound={() =>
        this.setState({
          runAnimation: true
        })
      }
    >
      <ViroNode key="rob-card">
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
                text="Rob Wise"
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
            text="www.empireflippers.com"
            rotation={[-90, 0, 0]}
            scale={[0.01, 0.01, 0.01]}
            style={styles.textStyle}
          />
        </ViroNode>
      </ViroNode>
    </ViroARImageMarker>





    );
  }



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

module.exports = RobCardMarker;
