/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
import styles from './styles.module.css';
import data from './ListSalons.json';
import logoInst from '../../assets/img/social/instagram.png';
import location from '../../assets/img/social/location.png';

const mod = {
  marginRight: '4px',
};

const CityList = props => {
  return (
    <div>
      <ul className={styles.list}>
        {props.items.map((item, index) => {
          return (
            <li
              className={styles.listItem}
              key={index}
              onClick={e => props.onClick(e, item)}
            >
              <h2 className={styles.title}>{item.name}</h2>
              <div className={styles.locCnt}>
                <img src={location} alt="location" className={styles.img} />
                <p>{item.loc}</p>
              </div>
              <div className={styles.block}>
                <p className={styles.text}>{item.number}</p>
                <p className={styles.text}>{item.numberTwo}</p>
                <a href={item.link} className={styles.link} target="blank">
                  {item.web}
                </a>
                <div className={styles.instCnt}>
                  <img src={logoInst} alt="Inst" className={styles.img} />
                  <a
                    href={item.instLink}
                    style={mod}
                    className={styles.link}
                    target="blank"
                  >
                    {item.inst}
                  </a>
                  <a className={styles.link} href={item.faLink} target="blank">
                    {item.facebook}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class Map extends Component {
  state = {
    selectedItem: { lat: 0, lng: 0 },
  };

  showInfo(e, selectedItem) {
    this.setState({ selectedItem });
    console.log(e);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <CityList items={data} onClick={this.showInfo.bind(this)} />
        <MapContainer
          center={{ lat: 50.466368, lng: 30.53816 }}
          zoom={11}
          data={data}
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  }
}

export default Map;
