// app/api/journal-summaries/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data/journal-summaries.json');

    // ✅ Fallback if file does not exist
    if (!existsSync(filePath)) {
      console.warn('⚠️ journal-summaries.json not found. Returning empty list.');
      return NextResponse.json({ files: [] });
    }

    const jsonData = await fs.readFile(filePath, 'utf-8');
    const summaries = JSON.parse(jsonData);

    return NextResponse.json(summaries);
  } catch (err) {
    console.error('❌ Failed to read journal summaries:', err);
    return NextResponse.json({ files: [] }, { status: 500 });
  }
}
