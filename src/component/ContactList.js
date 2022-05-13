import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

const ContactList = () => {
    const {contactList} = useSelector(state=>state)
    

  return (
    <div>
        <SearchBox />
        num:{contactList.length}
        {contactList.map((item)=>(<ContactItem item={item}/>))}
    </div>
  )
}

export default ContactList