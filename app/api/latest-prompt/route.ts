import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  try {
    const promptsDirectory = path.join(process.cwd(), "content/prompts");
    const files = fs.readdirSync(promptsDirectory);
    
    // Filter markdown files and sort by date (newest first)
    const markdownFiles = files
      .filter((file) => file.endsWith(".md"))
      .sort()
      .reverse();

    if (markdownFiles.length === 0) {
      return NextResponse.json(
        { error: "No prompts found" },
        { status: 404 }
      );
    }

    // Get the latest file
    const latestFile = markdownFiles[0];
    const filePath = path.join(promptsDirectory, latestFile);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse the markdown file with frontmatter
    const { data, content } = matter(fileContents);

    return NextResponse.json({
      title: data.title || "Untitled",
      tags: data.tags || [],
      content: content.trim(),
    });
  } catch (error) {
    console.error("Error reading prompt:", error);
    return NextResponse.json(
      { error: "Failed to read prompt" },
      { status: 500 }
    );
  }
}
