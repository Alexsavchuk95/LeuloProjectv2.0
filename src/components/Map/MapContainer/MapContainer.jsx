/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import styles from './styles.module.css';
import logo from '../leulo.png';
import logoInst from '../../../assets/img/social/instagram.png';
import location from '../../../assets/img/social/location.png';

export class MapContainer extends Component {
  render() {
    const { google } = window.google;
    const { data } = this.props;
    const { center } = this.props;

    return (
      <div className={styles.container}>
        <Map
          google={this.props.google}
          className={styles.mapStl}
          zoom={this.props.zoom}
          initialCenter={this.props.center}
        >
          {data.map(item => (
            <Marker
              key={item.id}
              icon={logo}
              position={{ lat: item.lat, lng: item.lng }}
            />
          ))}
          <InfoWindow
            visible
            options={{ paddingRight: 0 }}
            style={{ backgroundColor: 'red' }}
            position={{
              lat: this.props.selectedItem.lat,
              lng: this.props.selectedItem.lng,
            }}
          >
            <div>
              <h3 className={styles.title}>{this.props.selectedItem.title}</h3>
              <div className={styles.locCnt}>
                <img src={location} alt="location" className={styles.img} />
                <p>{this.props.selectedItem.loc}</p>
              </div>
              <div className={styles.instCnt}>
                <img src={logoInst} alt="Inst" className={styles.img} />
                <a
                  href={this.props.selectedItem.instLink}
                  className={styles.link}
                  target="blank"
                >
                  {this.props.selectedItem.inst}
                </a>
              </div>
              <a
                href={this.props.selectedItem.link}
                className={styles.link}
                target="blank"
              >
                {this.props.selectedItem.web}
              </a>
              <p className={styles.text}>{this.props.selectedItem.number}</p>
              <p className={styles.text}>{this.props.selectedItem.numberTwo}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAMcCBLw6A7034Co7zMb53st841InyUa-w',
})(MapContainer);
