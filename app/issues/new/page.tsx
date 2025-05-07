'use client';
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from '@radix-ui/themes'

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-3'>
            <TextField.Root placeholder="Add Title...">
            </TextField.Root>
            <SimpleMDE placeholder='Your description is here...!' />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage
