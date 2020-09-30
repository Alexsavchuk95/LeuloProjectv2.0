/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styles from './styles.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, subject, message } = this.state;
    const templateParams = {
      from_name: email,
      to_name: 'leulo.ukraine@gmail.com',
      subject_html: subject,
      name_html: name,
      phone_html: phone,
      message_html: message,
    };
    emailjs
      .send(
        'leulo.ukraine@gmail.com',
        'template_hTgycSwb',
        templateParams,
        'user_quDrUEs1QR5AXR6slpVv2',
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
        },
        err => {
          console.log('FAILED...', err);
        },
      );
    this.resetForm();
  }

  render() {
    const { t } = this.props;
    const { email, name, phone, subject, message } = this.state;
    return (
      <div className={styles.container}>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={email}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'email')}
              placeholder={t('ContuctUs.12')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={name}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'name')}
              placeholder={t('ContuctUs.6')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="phone"
              value={phone}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'phone')}
              placeholder={t('ContuctUs.7')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="subject"
              className="text-primary"
              value={subject}
              onChange={this.handleChange.bind(this, 'subject')}
              placeholder={t('ContuctUs.8')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className={styles.mess}
              placeholder={t('ContuctUs.10')}
              type="textarea"
              name="message"
              value={message}
              onChange={this.handleChange.bind(this, 'message')}
            />
          </FormGroup>
          <div className={styles.contBtn}>
            <Button className={styles.btn} variant="primary" type="submit">
              {t('ContuctUs.11')}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default withTranslation()(ContactForm);

ContactForm.propTypes = {
  t: PropTypes.func.isRequired,
};
