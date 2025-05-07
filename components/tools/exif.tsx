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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const formSchema = z.object({
  file: z.any(),
});

const preUploadedImages = new Array(4)
  .fill({ name: '', url: '' })
  .map((item, index) => ({
    name: `Sample ${index + 1}`,
    url: `/images/sample-${index + 1}.jpg`,
  }));

export default function ExIf() {
  const [list, setList] = useState<{ key: string; value: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [preSelectedImage, setPreSelectedImage] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreSelectedImage(null); // reset if switching from pre-uploaded
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handlePreSelect = (url: string) => {
    setPreSelectedImage(url);
    setSelectedFile(null); // reset custom file
    setPreviewUrl(url);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append('file', selectedFile);
      } else if (preSelectedImage) {
        const response = await fetch(preSelectedImage);
        const blob = await response.blob();
        const file = new File([blob], 'preselected.jpg', { type: blob.type });
        formData.append('file', file);
      } else {
        toast.error('Please select an image');
        setIsLoading(false);
        return;
      }

      const res = await apiCall.postForm('/exif', formData);
      setList(
        Object.entries(res.data).map(([key, value]) => ({
          key,
          value: String(value),
        }))
      );
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
      <ScrollArea className="h-full overflow-y-auto">
        <div className="flex flex-col gap-4 h-full">
          <div className="w-full flex flex-col">
            <p className="text-sm font-semibold">Select a sample image:</p>
            <div className="px-12">
              <Carousel
                opts={{
                  align: 'start',
                }}
                className="w-full"
              >
                <CarouselContent>
                  {preUploadedImages.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/3  md:basis-1/4"
                    >
                      <a
                        type="button"
                        key={img.name}
                        onClick={() => handlePreSelect(img.url)}
                        className="p-1 cursor-pointer "
                      >
                        <img
                          src={img.url}
                          alt={`Sample ${index + 1}`}
                          className="rounded w-full h-[75%] object-cover"
                        />
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Select an image file to extract EXIF data.
                  </FormDescription>
                  <FormMessage />
                </FormItem>

                {previewUrl && (
                  <div>
                    <p className="text-sm font-medium">Preview:</p>
                    <img
                      src={previewUrl}
                      alt="Selected"
                      className="max-h-40 rounded mt-2"
                    />
                  </div>
                )}

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>

          {!!list.length && (
            <Table className="border">
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((data, i) => (
                  <TableRow key={data.key + i}>
                    <TableCell className="font-semibold capitalize max-w-28">
                      {data.key}
                    </TableCell>
                    <TableCell className="truncate max-w-96">
                      {data.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
