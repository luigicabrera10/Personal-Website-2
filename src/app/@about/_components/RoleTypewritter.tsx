'use client'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { roles } from '@/data/roles'

export default function RoleTypewritter() {

   const rolesFixed = roles.map( (role) => role.toUpperCase());

   return (
      <>
         <Typewriter 
            words={rolesFixed}
            loop={0}
            typeSpeed={60}
            deleteSpeed={80}
         />
         <Cursor />
      </>

   )
}