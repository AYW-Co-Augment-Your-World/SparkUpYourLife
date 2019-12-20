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

export class JamesCardMarker extends Component {
  state = {
    runAnimation: false
  };
  render() {
    return (
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
                  onClick={() => alert('Contact Saved')}
                />
                <ViroText
                  textClipMode="None"
                  text="James Fuller"
                  scale={[0.015, 0.015, 0.015]}
                  style={styles.textStyle}
                />
              </ViroFlexView>
              <ViroFlexView style={styles.subText}>
                <ViroText
                  textClipMode="None"
                  text="@jfuller957"
                  scale={[0.01, 0.01, 0.01]}
                  style={styles.textStyle}
                />
                <ViroText
                  textClipMode="None"
                  text="#jfuller957"
                  scale={[0.01, 0.01, 0.01]}
                  style={styles.textStyle}
                />
                <ViroFlexView style={styles.iconBar}>
                  <ViroAnimatedImage
                    style={styles.image}
                    loop={true}
                    source={require('./res/linkedin.gif')}
                    onClick={() =>
                      Linking.openURL(
                        'https://www.linkedin.com/in/arthursandro/'
                      )
                    }
                  />
                  <ViroImage
                    style={styles.image}
                    source={require('./res/github.png')}
                    onClick={() =>
                      Linking.openURL('https://github.com/arthurs14')
                    }
                  />
                  <ViroImage
                    style={styles.image}
                    source={require('./res/message.png')}
                    onClick={() => alert('message redirection')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroFlexView>
          </ViroNode>
          <ViroNode
            opacity={0}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            animation={{
              name: 'animateViro',
              run: this.state.runAnimation
            }}
          >
            <ViroFlexView flexDirection={'column'}>
              <ViroText
                text="www.jfuller957.com"
                scale={[0.01, 0.01, 0.01]}
                padding={0.001}
              />
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
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5
  }
});

module.exports = JamesCardMarker;
