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
                    <button name="submit" type="submit" id="submit" className="rn-btn">
                      <span>{lan.sendMessage}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                  </div>

                </form>
  )
}

export default FormContact