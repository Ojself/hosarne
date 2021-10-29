import React from 'react'

const ContactInformation = ({name, title, phoneNr, email}) => {
    return (
        <address className='font-bold text-xxs lg:text-xl  uppercase'>
          {name} <br />
          /{title} <br />
          {phoneNr} <br />
          <a href={`mailto:${email}`}>{email}</a>
        </address>
    )
}

export default ContactInformation
