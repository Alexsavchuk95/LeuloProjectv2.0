import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styles from './styles.module.css';
import model from '../../assets/img/model.png';
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    className={styles.sl}
    fillParent={false}
    play
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    timerHeight="0px"
  >
    <div data-src={model} />
    <div data-src={slide2} />
    <div data-src={slide1} />
  </AutoplaySlider>
);

export default Slider;
