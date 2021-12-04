import React, {useState} from 'react';
import {LOCALES} from '../i18n/locales';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export const I18nSelect = ({onLanguageChange}) => {
    const [lang, setLang] = React.useState(LOCALES.SPANISH);

    const handleLang = (event,
                        language
    ) => {
        console.log(event.target.value)
        setLang(event.target.value);
        onLanguageChange(event.target.value);
    };


    return (
        <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLang}
            aria-label="text alignment"
        >
              <ToggleButton value=  {LOCALES.SPANISH} style={{color: "white"}}>
                {LOCALES.SPANISH}
            </ToggleButton>
            <ToggleButton value= {LOCALES.ENGLISH} style={{color: "white"}}>
                {LOCALES.ENGLISH}
            </ToggleButton>

        </ToggleButtonGroup>
    );

};
