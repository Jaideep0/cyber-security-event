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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '../ui/scroll-area';

const formSchema = z.object({
  name: z.string({ message: 'Please enter something' }),
});

export default function Sherlock() {
  const [list, setList] = useState<{ site: string; url: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await apiCall.get('/osint/sherlock', {
        params: {
          username: data.name,
        },
      });
      setList(res?.data);
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
    <div className="w-full p-4 h-[600px]">
      {/* fixed height container */}
      <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
        {/* Left: Table Section */}
        <div className="flex-1 h-full overflow-hidden">
          <ScrollArea className="h-full overflow-y-auto">
            <Table className="border">
              <TableCaption>No data</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Site</TableHead>
                  <TableHead>Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((data, i) => (
                  <TableRow key={data.site + i}>
                    <TableCell className="font-semibold capitalize">
                      {data.site}
                    </TableCell>
                    <TableCell className="truncate max-w-96">
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant={'link'}>{data.url}</Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        {/* Right: Form Section */}
        <div className="w-full md:w-1/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sherlock Holmes" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a name you want to find.
                    </FormDescription>
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
      </div>
    </div>
  );
}
