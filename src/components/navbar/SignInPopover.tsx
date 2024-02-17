import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import SignInButton from '../SignInButton'

type Props = {}

const SignInPopover = (props: Props) => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button>
                Sign In
            </Button>
        </PopoverTrigger>
        <PopoverContent className=''>
            <div className='grid gap-4'>
                <SignInButton provider='google' text='Google'/>
                <SignInButton provider='discord' text='Discord'/>
            </div>
            
        </PopoverContent>
    </Popover>
  )
}

export default SignInPopover