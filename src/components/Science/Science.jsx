import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import vita1 from '../../assets/img/science/1.png';
import vita2 from '../../assets/img/science/2.png';
import vita3 from '../../assets/img/science/3.png';
import vita4 from '../../assets/img/science/4.png';
import vita5 from '../../assets/img/science/5.png';
import vita6 from '../../assets/img/science/6.png';
import vita7 from '../../assets/img/science/7.png';
import vita8 from '../../assets/img/science/8.png';
import vita9 from '../../assets/img/science/9.png';
import vita10 from '../../assets/img/science/10.png';
import vita11 from '../../assets/img/science/11.png';
import vita12 from '../../assets/img/science/12.png';
import vita13 from '../../assets/img/science/13.png';
import vita14 from '../../assets/img/science/14.png';
import vita15 from '../../assets/img/science/15.png';
import vita16 from '../../assets/img/science/16.png';
import vita17 from '../../assets/img/science/17.png';
import vita18 from '../../assets/img/science/18.png';
import vita19 from '../../assets/img/science/19.png';
import vita20 from '../../assets/img/science/20.png';
import Bounce from '../../assets/img/Bouncebackblend.png';
import Dew from '../../assets/img/dewelixir.png';
import styles from './styles.module.css';

const dew = {
  background:
    'linear-gradient(145deg, rgba(188,163,123,1) 12%, rgba(223,205,195,1) 55%, rgba(228,210,200,1) 100%)',
};

class Science extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
    modalIsOpen3: false,
    modalIsOpen4: false,
    modalIsOpen5: false,
    modalIsOpen6: false,
    modalIsOpen7: false,
    modalIsOpen8: false,
    modalIsOpen9: false,
    modalIsOpen10: false,
    modalIsOpen11: false,
    modalIsOpen12: false,
    modalIsOpen13: false,
    modalIsOpen14: false,
    modalIsOpen15: false,
    modalIsOpen16: false,
    modalIsOpen17: false,
    modalIsOpen19: false,
    modalIsOpen21: false,
    modalIsOpen22: false,
    modalIsOpen23: false,
    modalIsOpen24: false,
    modalBottleBounce: false,
    modalBottleDew: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  openModal3 = () => {
    this.setState({ modalIsOpen3: true });
  };

  closeModal3 = () => {
    this.setState({ modalIsOpen3: false });
  };

  openModal4 = () => {
    this.setState({ modalIsOpen4: true });
  };

  closeModal4 = () => {
    this.setState({ modalIsOpen4: false });
  };

  openModal5 = () => {
    this.setState({ modalIsOpen5: true });
  };

  closeModal5 = () => {
    this.setState({ modalIsOpen5: false });
  };

  openModal6 = () => {
    this.setState({ modalIsOpen6: true });
  };

  closeModal6 = () => {
    this.setState({ modalIsOpen6: false });
  };

  openModal7 = () => {
    this.setState({ modalIsOpen7: true });
  };

  closeModal7 = () => {
    this.setState({ modalIsOpen7: false });
  };

  openModal8 = () => {
    this.setState({ modalIsOpen8: true });
  };

  closeModal8 = () => {
    this.setState({ modalIsOpen8: false });
  };

  openModal9 = () => {
    this.setState({ modalIsOpen9: true });
  };

  closeModal9 = () => {
    this.setState({ modalIsOpen9: false });
  };

  openModal10 = () => {
    this.setState({ modalIsOpen10: true });
  };

  closeModal10 = () => {
    this.setState({ modalIsOpen10: false });
  };

  openModal11 = () => {
    this.setState({ modalIsOpen11: true });
  };

  closeModal11 = () => {
    this.setState({ modalIsOpen11: false });
  };

  openModal12 = () => {
    this.setState({ modalIsOpen12: true });
  };

  closeModal12 = () => {
    this.setState({ modalIsOpen12: false });
  };

  openModal13 = () => {
    this.setState({ modalIsOpen13: true });
  };

  closeModal13 = () => {
    this.setState({ modalIsOpen13: false });
  };

  openModal14 = () => {
    this.setState({ modalIsOpen14: true });
  };

  closeModal14 = () => {
    this.setState({ modalIsOpen14: false });
  };

  openModal15 = () => {
    this.setState({ modalIsOpen15: true });
  };

  closeModal15 = () => {
    this.setState({ modalIsOpen15: false });
  };

  openModal16 = () => {
    this.setState({ modalIsOpen16: true });
  };

  closeModal16 = () => {
    this.setState({ modalIsOpen16: false });
  };

  openModal17 = () => {
    this.setState({ modalIsOpen17: true });
  };

  closeModal17 = () => {
    this.setState({ modalIsOpen17: false });
  };

  openModal19 = () => {
    this.setState({ modalIsOpen19: true });
  };

  closeModal19 = () => {
    this.setState({ modalIsOpen19: false });
  };

  openModal21 = () => {
    this.setState({ modalIsOpen21: true });
  };

  closeModal21 = () => {
    this.setState({ modalIsOpen21: false });
  };

  openModal22 = () => {
    this.setState({ modalIsOpen22: true });
  };

  closeModal22 = () => {
    this.setState({ modalIsOpen22: false });
  };

  openModal23 = () => {
    this.setState({ modalIsOpen23: true });
  };

  closeModal23 = () => {
    this.setState({ modalIsOpen23: false });
  };

  openModal24 = () => {
    this.setState({ modalIsOpen24: true });
  };

  closeModal24 = () => {
    this.setState({ modalIsOpen24: false });
  };

  openModalBottleBounce = () => {
    this.setState({ modalBottleBounce: true });
  };

  closeModalBottleBounce = () => {
    this.setState({ modalBottleBounce: false });
  };

  openModalDew = () => {
    this.setState({ modalBottleDew: true });
  };

  closeModalDew = () => {
    this.setState({ modalBottleDew: false });
  };

  render() {
    const { t } = this.props;
    const {
      modalIsOpen,
      secondModalIsOpen,
      modalIsOpen3,
      modalIsOpen4,
      modalIsOpen5,
      modalIsOpen6,
      modalIsOpen7,
      modalIsOpen8,
      modalIsOpen9,
      modalIsOpen10,
      modalIsOpen11,
      modalIsOpen12,
      modalIsOpen13,
      modalIsOpen14,
      modalIsOpen15,
      modalIsOpen16,
      modalIsOpen17,
      modalIsOpen19,
      modalIsOpen21,
      modalIsOpen22,
      modalIsOpen23,
      modalIsOpen24,
      modalBottleBounce,
      modalBottleDew,
    } = this.state;
    return (
      <>
        <section className={styles.wrapper}>
          <h2 className={styles.titleSc}>Bounce Back Blend</h2>
          <div className={styles.containerVit}>
            <div className={styles.bottleCont}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.1')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.2')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.3')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.4')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.5')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.6')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.7')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.8')}</p>
                </li>
              </ul>
              <div className={styles.bottle}>
                <button onClick={this.openModalBottleBounce} type="button">
                  <img className={styles.bottleImg} src={Bounce} alt="" />
                </button>
                <Modal
                  ariaHideApp={false}
                  isOpen={modalBottleBounce}
                  onRequestClose={this.closeModalBottleBounce}
                  className={styles.mod}
                  contentLabel="Vitamin"
                >
                  <div className={styles.modCont}>
                    <button
                      className={styles.btn}
                      type="button"
                      onClick={this.closeModalBottleBounce}
                    >
                      <span className={styles.close} />
                    </button>
                  </div>
                  <div className={styles.modCon}>
                    <h3 className={styles.modTitle}>{t('Bottle.1')}</h3>
                    <h4 className={styles.modText}>{t('Bottle.2')}</h4>
                    <p className={styles.modText}>{t('Bottle.3')}</p>
                    <p className={styles.modText}>{t('Bottle.4')}</p>
                    <h4 className={styles.modText}>{t('Bottle.5')}</h4>
                    <p className={styles.modText}>{t('Bottle.6')}</p>
                    <p className={styles.modText}>{t('Bottle.7')}</p>
                  </div>
                </Modal>
              </div>
            </div>
            <div>
              <ul className={styles.vitList}>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.1')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita1}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      onRequestClose={this.closeModal}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.1')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.1')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.2')}</span>
                  <div className={styles.opendModal}>
                    {/* DOING MODAL */}
                    <button onClick={this.openSecondModal} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita2}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={secondModalIsOpen}
                      onRequestClose={this.closeSecondModal}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeSecondModal}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.2')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.2')}</p>
                      </div>
                    </Modal>
                    {/* -------------------- */}
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.3')}</span>
                  <div className={styles.openModal}>
                    <button
                      onClick={this.openModal3}
                      className={styles.opendModal}
                      type="button"
                    >
                      <img
                        className={styles.vitaImg}
                        src={vita3}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen3}
                      onRequestClose={this.closeModal3}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal3}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.3')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.3')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.4')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal4} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita4}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen4}
                      onRequestClose={this.closeModal4}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal4}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.4')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.4')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.5')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal5} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita5}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen5}
                      onRequestClose={this.closeModal5}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal5}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.5')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.5')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.6')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal6} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita6}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen6}
                      onRequestClose={this.closeModal6}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal6}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.6')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.6')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.7')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal7} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita7}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen7}
                      onRequestClose={this.closeModal7}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal7}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.7')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.7')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.8')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal8} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita8}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen8}
                      onRequestClose={this.closeModal8}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal8}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.8')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.8')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.9')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal9} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita9}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen9}
                      onRequestClose={this.closeModal9}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal9}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.9')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.9')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.10')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal10} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita10}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen10}
                      onRequestClose={this.closeModal10}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal10}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.10')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.10')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.11')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal11} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita11}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen11}
                      onRequestClose={this.closeModal11}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal11}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.11')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.11')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.12')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal12} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita12}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen12}
                      onRequestClose={this.closeModal12}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal12}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.12')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.12')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.13')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal13} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita13}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen13}
                      onRequestClose={this.closeModal13}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal13}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.13')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.13')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.14')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal14} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita14}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen14}
                      onRequestClose={this.closeModal14}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal14}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.14')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.14')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.15')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal15} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita15}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen15}
                      onRequestClose={this.closeModal15}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal15}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.15')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.15')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li id={styles.vitL} className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.16')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal16} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita16}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen16}
                      onRequestClose={this.closeModal16}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal16}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.16')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.16')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.pos}>
            <h2 id={styles.titleD} className={styles.titleSc}>
              Dew Elixir
            </h2>
            <div className={styles.containerVit}>
              <div className={styles.bottleCont} style={dew}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.1')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.2')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.3')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.4')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.5')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.6')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.7')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.8')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.9')}</p>
                  </li>
                </ul>
                <div className={styles.bottle}>
                  <button onClick={this.openModalDew} type="button">
                    <img
                      id={styles.Up}
                      className={styles.bottleImg}
                      src={Dew}
                      alt="Elixir"
                    />
                  </button>
                  <Modal
                    ariaHideApp={false}
                    isOpen={modalBottleDew}
                    onRequestClose={this.closeModalDew}
                    className={styles.mod}
                    contentLabel="Vitamin"
                  >
                    <div className={styles.modCont}>
                      <button
                        className={styles.btn}
                        type="button"
                        onClick={this.closeModalDew}
                      >
                        <span className={styles.close} />
                      </button>
                    </div>
                    <div className={styles.modCon}>
                      <h3 className={styles.modTitle}>{t('BottleDew.1')}</h3>
                      <h4 className={styles.modText}>{t('Bottle.2')}</h4>
                      <p className={styles.modText}>{t('BottleDew.2')}</p>
                      <p className={styles.modText}>{t('BottleDew.3')}</p>
                      <h4 className={styles.modText}>{t('Bottle.5')}</h4>
                      <p className={styles.modText}>{t('Bottle.6')}</p>
                      <p className={styles.modText}>{t('BottleDew.4')}</p>
                    </div>
                  </Modal>
                </div>
              </div>
              <ul className={styles.vitList} id={styles.viList}>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.17')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal17} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita17}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen17}
                      onRequestClose={this.closeModal17}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal17}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.17')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.17')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.18')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal23} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita1}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen23}
                      onRequestClose={this.closeModal23}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal23}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.1')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.1')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.19')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal19} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita18}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen19}
                      onRequestClose={this.closeModal19}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal19}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.19')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.19')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.20')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal24} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita8}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen24}
                      onRequestClose={this.closeModal24}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal24}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.8')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.8')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.22')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal21} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita19}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen21}
                      onRequestClose={this.closeModal21}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal21}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.22')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.22')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.21')}</span>
                  <div className={styles.opendModal}>
                    <button onClick={this.openModal22} type="button">
                      <img
                        className={styles.vitaImg}
                        src={vita20}
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen22}
                      onRequestClose={this.closeModal22}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal22}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.21')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.22')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withTranslation()(Science);

Science.propTypes = {
  t: PropTypes.func.isRequired,
};
