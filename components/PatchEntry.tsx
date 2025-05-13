'use client';

type PatchEntryProps = {
  title: string;
  notes: string[];
  comments: string[];
  summary: string;
  opinions?: string;
};

export default function PatchEntry({
  title,
  notes,
  comments,
  summary,
  opinions,
}: PatchEntryProps) {
  return (
    <div className="mb-20 w-full max-w-5xl mx-auto px-4">
      {/* Patch Title */}
      <div className="bg-[#0d1117] text-blue-200 p-4 rounded-t-md shadow-md border-b border-blue-500 mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* Patch Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Patch Notes */}
        <div className="bg-[#10141c] text-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-md font-bold mb-2 text-blue-300">Patch Notes</h3>
          <ul className="list-disc list-outside text-sm space-y-2 pl-6">
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* My Annotations */}
        <div className="bg-[#10141c] text-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-md font-bold mb-2 text-blue-300">My Annotations</h3>
          <ul className="list-disc list-outside text-sm space-y-2 pl-6">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Developer Comments */}
      <div className="bg-[#181d28] text-gray-200 p-6 rounded mt-6 shadow-md">
        <h4 className="font-semibold mb-2 text-blue-200">Developer Comments</h4>
        <p className="text-sm whitespace-pre-line">{summary}</p>
      </div>

      {/* Thoughts and Opinions */}
      {opinions && (
        <div className="bg-[#181d28] text-gray-200 p-6 rounded mt-4 shadow-md">
          <h4 className="font-semibold mb-2 text-blue-200">Thoughts and Opinions</h4>
          <p className="text-sm whitespace-pre-line">{opinions}</p>
        </div>
      )}
    </div>
  );
}
