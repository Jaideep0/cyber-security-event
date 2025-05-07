import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { tools, categories } from '@/lib/data';
import Sherlock from '@/components/tools/sherlock';

interface ToolPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return tools.map(tool => ({
    id: tool.id,
  }));
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = tools.find(t => t.id === params.id);

  if (!tool) {
    notFound();
  }

  const category = categories.find(c => c.id === tool.categoryId);

  return (
    <div className="container mx-auto py-12 px-4 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href={`/category/${tool.categoryId}`}>
            <Button
              variant="outline"
              className="pl-0 border-2 border-black bg-white hover:bg-primary cartoon-shadow"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to {category?.name}
            </Button>
          </Link>
        </div>

        <div className="blob-primary p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-comic">
            {tool.name}
          </h1>
        </div>

        <div className="blob-secondary p-6 mb-8">
          <p className="text-xl font-comic">{tool.description}</p>
        </div>

        <div className="blob-secondary p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 font-comic">
            COOL THINGS YOU'LL LEARN:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {tool.learningOutcomes.map((outcome, index) => (
              <li key={index} className="text-lg font-comic">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className="blob-primary p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 font-comic">TRY IT OUT!</h2>
          <div className="aspect-video bg-white rounded-lg border-4 border-black cartoon-shadow">
            {/* Placeholder for iframe - will be replaced with actual game iframe */}
            {!!tool?.component && <tool.component />}
            {tool?.link && (
              <iframe
                src={tool.link}
                title={tool.name}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {false && !!tool?.setupInstructions && (
          <div className="blob-secondary p-6">
            <h2 className="text-2xl font-bold mb-4 font-comic">
              HOW IT WORKS:
            </h2>
            <div className="prose max-w-none">
              <pre className="bg-white p-4 rounded-lg border-2 border-black cartoon-shadow overflow-x-auto">
                <code className="font-mono">{tool?.setupInstructions}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
