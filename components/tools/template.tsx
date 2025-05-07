'use client';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '../ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import apiCall from '@/lib/api-call';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const formSchema = z.object({
  text: z.string({ message: 'Please enter something' }),
});

type DataType = {};
export default function PasswordCracker() {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await apiCall.get('/password-strength', {
        params: {
          pwd: data.text,
        },
      });
      setData(res?.data);
    } catch (err) {
      toast.error('Something went wrong!');
    }
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );

  return (
    <div className="p-3 h-full w-full rounded">
      <ScrollArea className="h-full overflow-y-auto">
        {/* fixed height container */}
        <div className="flex flex-col gap-4 h-full px-1 my-2">
          <div className="w-full md:w-1/3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Type here..." {...field} />
                      </FormControl>
                      {/* <FormDescription></FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          {/* Display data */}
          {!!data && <div className="mt-4 w-full"></div>}
        </div>
      </ScrollArea>
    </div>
  );
}
