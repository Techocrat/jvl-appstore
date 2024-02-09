'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const FormSchema = z
  .object({
    appname: z.string().min(1, 'Appname is required').max(100),
    appurl: z.string().min(1, 'App url is required'),
    organization: z.string().min(1, 'Organization is required'),
    description: z.string().min(1, 'Description is required'),
  });

const NewAppForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      appname: '',
      appurl: '',
      organization: '',
      description: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    //  const response = await fetch('/api/user', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: values.username,
    //       email: values.email,
    //       password: values.password,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   if (response.ok) {
    //     router.push('/sign-in');
    //   } else {
    //     console.error('Failed to sign up');
    //   }
  };

  return (
    <div className='w-96'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='appname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>App name</FormLabel>
                <FormControl>
                  <Input placeholder='Meta' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='appurl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>App url</FormLabel>
                <FormControl>
                  <Input placeholder='https://about.meta.com/' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='organization'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization name</FormLabel>
                <FormControl>
                <Input placeholder='Meta' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>App description</FormLabel>
                <FormControl>
                <Input placeholder='A cool social network' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='w-full mt-6' type='submit'>
          Submit
        </Button>
      </form>
      {/* <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <p className='text-center text-sm text-gray-600 mt-2'>
        If you already have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-in'>
          Sign in
        </Link>
      </p> */}
    </Form>
    </div>
  );
};

export default NewAppForm;