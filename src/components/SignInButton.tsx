'use client'

import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
// import { DiscordLogoIcon } from '@radix-ui/react-icons'

type Props = {
    provider: string,
    text: string
}

const SignInButton = ({provider, text}: Props) => {

  return (
    <Button onClick={() =>{
        signIn(provider).catch(console.error);
    }}>
        {text}
    </Button>
  )
}

export default SignInButton