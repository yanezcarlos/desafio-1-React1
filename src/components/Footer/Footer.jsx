import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./Footer.css"

const Footer = ({text}) => {
  return (
    <Badge className='footer' bg="light">{text}</Badge>
  )
}

export default Footer