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



export class AppleImageMarker extends Component {
  state = {
    runAnimation: false
  };
  render() {
    return (

      <ViroARImageMarker
      target={'appleLogo2'}
      onAnchorFound={() =>
        this.setState({
          runAnimation: true
        })
      }
    >


      <ViroNode key="apple1">
        <ViroNode
          opacity={0}
          position={[0, -0.02, -0.20]}
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

            <ViroFlexView
              onTouch={() => alert('Redirecting to website')}
              style={styles.subText}
            >




              <ViroImage
                height={0.10}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/iphone11-big.png')}
              />




            </ViroFlexView>
          </ViroFlexView>
          </ViroNode>


          <ViroNode
          opacity={0}
          position={[0, -0.02, -0.07]}
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

            <ViroImage
                height={0.05}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/applearcade.png')}
              />

              </ViroFlexView>


        </ViroNode>



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

            <ViroImage
                height={0.08}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/appletv.png')}
              />

              </ViroFlexView>


        </ViroNode>




        <ViroNode
          opacity={0}
          position={[0, -0.11, 0.09]}
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

            <ViroImage
                height={0.08}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/iphone-range.png')}
              />

              </ViroFlexView>


        </ViroNode>


        <ViroNode
          opacity={0}
          position={[0, -0.21, 0.17]}
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

            <ViroImage
                height={0.05}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/iphone-look.png')}
              />

              </ViroFlexView>


        </ViroNode>


        <ViroNode
          opacity={0}
          position={[0, -0.30, 0.25]}
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

            <ViroImage
                height={0.05}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/iphone-camera.png')}
              />

              </ViroFlexView>


        </ViroNode>


        <ViroNode
          opacity={0}
          position={[0, -0.40, 0.30]}
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

            <ViroImage
                height={0.05}
                width={0.15}
                style={styles.image}
                source={require('./res/apple/iphone-side.png')}
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
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5
  }
});

module.exports = AppleImageMarker;
