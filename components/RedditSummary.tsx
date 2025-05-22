// components/RedditSummary.tsx
'use client';

type RedditSummaryProps = {
  title: string;
  summary: string;
};

export default function RedditSummary({ title, summary }: RedditSummaryProps) {
  return (
    <div className="mb-20 w-full max-w-5xl mx-auto px-4">
      <div className="bg-[#0d1117] text-blue-200 p-4 rounded-t-md shadow-md border-b border-blue-500 mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="bg-[#181d28] text-gray-200 p-6 rounded shadow-md">
        <h4 className="font-semibold mb-2 text-blue-200">GPT Summary</h4>
        <p className="text-sm whitespace-pre-line">{summary}</p>
      </div>
    </div>
  );
}
