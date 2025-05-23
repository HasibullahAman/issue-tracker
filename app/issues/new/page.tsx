'use client';
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout, Text } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';

// interface IssueForm {
//     title: string,
//     description: string,
// }

// insted of using code interface in above, we use code bellow, why ? 
//     so, if we want chenges, we should add in validation.ts and here
type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState();
    return (
        <div className='max-w-xl'>
            {error && <Callout.Root color='red' className='mb-5'>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>
            }
            <form className='space-y-3'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/issues ', data);
                        router.push('/issues');
                    } catch (error) {
                        setError("An unexpected error occurred.")
                    }
                })}
            >
                <TextField.Root placeholder="Add Title...!" {...register("title")}>
                </TextField.Root>
                {errors.title && <Text color='red'> {errors.title.message}</Text>}
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder='Your description is here...!' {...field} />}
                />
                {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage
