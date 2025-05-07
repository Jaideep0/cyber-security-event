'use client';
import { useForm } from 'react-hook-form';
import {
  FormControl,
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

const embedSchema = z.object({
  message: z.string().min(1, 'Please enter a message'),
  file: z
    .any()
    .refine(file => file instanceof File, { message: 'File is required' }),
});

const extractSchema = z.object({
  file: z
    .any()
    .refine(file => file instanceof File, { message: 'File is required' }),
});

type EmbedForm = z.infer<typeof embedSchema>;
type ExtractForm = z.infer<typeof extractSchema>;

export default function Steghide() {
  const [embedResult, setEmbedResult] = useState<string | null>(null);
  const [extractResult, setExtractResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [stegoPreview, setStegoPreview] = useState<string | null>(null);

  const embedForm = useForm<EmbedForm>({
    resolver: zodResolver(embedSchema),
    defaultValues: { message: '', file: undefined },
  });

  const extractForm = useForm<ExtractForm>({
    resolver: zodResolver(extractSchema),
    defaultValues: { file: undefined },
  });

  const handleEmbed = async (data: EmbedForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('message', data.message);

      const res = await apiCall.post('/steg/embed', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setEmbedResult(URL.createObjectURL(new Blob([res.data])));
      toast.success('Message embedded successfully!');
    } catch (err) {
      toast.error('Failed to embed message.');
    }
    setLoading(false);
  };

  const handleExtract = async (data: ExtractForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', data.file);

      const res = await apiCall.post('/steg/extract', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setExtractResult(res.data?.message || 'No hidden message found.');
      toast.success('Message extracted!');
    } catch (err) {
      toast.error('Failed to extract message.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 w-full h-full">
      <ScrollArea className="h-full overflow-y-auto">
        {loading && (
          <div className="w-full flex items-center justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Embed Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Embed Message</h2>
            <Form {...embedForm}>
              <form
                onSubmit={embedForm.handleSubmit(handleEmbed)}
                className="space-y-4"
              >
                <FormField
                  control={embedForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter secret message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={embedForm.control}
                  name="file"
                  render={({ field: { onChange } }) => (
                    <FormItem>
                      <FormLabel>Cover Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setCoverPreview(URL.createObjectURL(file));
                              onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      {coverPreview && (
                        <img
                          src={coverPreview}
                          alt="Cover Preview"
                          className="mt-2 rounded border max-w-xs"
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Embed
                </Button>
              </form>
            </Form>

            {embedResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Result Image:</h3>
                <img
                  src={embedResult}
                  alt="Embedded Result"
                  className="rounded shadow border w-full max-w-sm"
                />
                <a
                  href={embedResult}
                  download="stego-image.png"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Download Image
                </a>
              </div>
            )}
          </div>

          {/* Extract Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Extract Message</h2>
            <Form {...extractForm}>
              <form
                onSubmit={extractForm.handleSubmit(handleExtract)}
                className="space-y-4"
              >
                <FormField
                  control={extractForm.control}
                  name="file"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Stego Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setStegoPreview(URL.createObjectURL(file));
                              onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                      {stegoPreview && (
                        <img
                          src={stegoPreview}
                          alt="Stego Preview"
                          className="mt-2 rounded border max-w-xs"
                        />
                      )}
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Extract
                </Button>
              </form>
            </Form>

            {extractResult && (
              <div className="mt-4">
                <h3 className="font-semibold">Hidden Message:</h3>
                <p className="bg-gray-100 p-2 rounded mt-2">{extractResult}</p>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
