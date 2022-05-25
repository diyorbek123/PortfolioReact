import React from 'react'
import { useSelector } from 'react-redux'

const FormContact = () => {
  const lan = useSelector((state) => state.languageReducer)
  return (
    <form className="row" >

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-name">{lan.name}</label>
                      <input name="contact-name" id="contact-name" type="text" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-phone">{lan.number}</label>
                      <input name="contact-phone" id="contact-phone" type="text" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-email">{lan.emailContact}</label>
                      <input id="contact-email" name="contact-email" type="email" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="subject">{lan.subject}</label>
                      <input id="subject" name="subject" type="text" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-message">{lan.message}</label>
                      <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button  className="rn-btn">
                      <span>{lan.sendMessage}</span>
                    </button>
                  </div>

                </form>
  )
}

export default FormContact