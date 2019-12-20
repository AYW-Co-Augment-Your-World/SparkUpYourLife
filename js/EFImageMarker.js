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



export class EFImageMarker extends Component {
  state = {
    runAnimation: false
  };
  render() {
    return (
      <ViroARImageMarker
      target={'efLogoCard'}
      onAnchorFound={() =>
        this.setState({
          runAnimation: true
        })
      }
    >
      <ViroNode key="ef-logo-card">
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
            <ViroFlexView style={styles.cardWrapper} onClick={()=> Linking.openURL('https://empireflippers.com')} >
              <ViroImage
                height={0.05}
                width={0.05}
                style={styles.image}
                source={require('./res/ef/ef-website.jpg')}
              />

            </ViroFlexView>




          </ViroFlexView>

        </ViroNode>

        <ViroNode
          opacity={0}
          position={[0, 0.02, 0]}
          animation={{
            name: 'animateImage',
            run: this.state.runAnimation
          }}
        >
          <ViroFlexView
            rotation={[90, 0, 0]}
            height={0.03}
            width={0.05}
            style={styles.card}
          >
            <ViroFlexView style={styles.cardWrapper} onClick={()=> Linking.openURL('https://empireflippers.com')} >
              <ViroImage
                height={0.05}
                width={0.05}
                style={styles.image}
                source={require('./res/ef/ef-website.jpg')}
              />

            </ViroFlexView>




          </ViroFlexView>


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

module.exports = EFImageMarker;
