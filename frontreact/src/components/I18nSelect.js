import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = () => {



    return (
      <div className = "i18n-selector" onChange={this.onChangeValue}>
        <input type="radio" value="en" name="en" /> en
        <input type="radio" value="es" name="es" /> es

      </div>
  )
};
