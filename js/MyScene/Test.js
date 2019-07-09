'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroMaterials,
    ViroBox,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlane,
    ViroARPlaneSelector,
    ViroQuad,
    ViroNode,
    ViroAnimations,
    ViroConstants
} from 'react-viro';

var createReactClass = require('create-react-class');

var My = createReactClass({
    getInitialState() {
        return {
            hasARInitialized: false,
            text: "Initializing AR...",
        };
    },
    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onTrackingUpdated} onClick={this._onClick}>

  
                <ViroNode position={[.5, -.5, -.5]} width={1} height={0.5}>

                    <ViroText  text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

                </ViroNode>
                <ViroNode position={[0, 1, -1]} scale={[2, 2, 2]}>
                    <ViroText text="Text A" position={[0, -.1, -1]} />

                    <ViroNode position={[1, 0, 0]} scale={[4, 4, 4]}>
                        <ViroText text="Text B" />
                    </ViroNode>
                </ViroNode>
                <ViroBox
                    
                    position={[0, 1, -3]}
                    height={0.1} width={0.1} length={0.1}
                    physicsBody={{
                        type: 'Dynamic', mass: 0.1
                    }}
                    
                />

            </ViroARScene>
        );
    },
    _onTrackingUpdated(state, reason) {

        if (!this.state.hasARInitialized && state == ViroConstants.TRACKING_NORMAL) {
            this.setState({
                hasARInitialized: true,
                text: "Hello World!"
            });
        }
    },
    _onClick(source) {
        <ViroBox

            position={[0, 1, -3]}
            height={0.1} width={0.1} length={0.1}
            physicsBody={{
                type: 'Dynamic', mass: 0.1
            }}
        />
    },
});

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 40,
        color: 'red',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/grid_bg.jpg'),
    },
});


module.exports = My;
