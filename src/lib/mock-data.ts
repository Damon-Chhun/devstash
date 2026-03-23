// Mock data for dashboard UI development
// Replace with real data once database is implemented

export const mockUser = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.io",
  image: null,
  isPro: false,
};

export const mockItemTypes = [
  {
    id: "type_snippet",
    name: "snippet",
    icon: "Code",
    color: "#3b82f6",
    isSystem: true,
  },
  {
    id: "type_prompt",
    name: "prompt",
    icon: "Sparkles",
    color: "#8b5cf6",
    isSystem: true,
  },
  {
    id: "type_command",
    name: "command",
    icon: "Terminal",
    color: "#f97316",
    isSystem: true,
  },
  {
    id: "type_note",
    name: "note",
    icon: "StickyNote",
    color: "#fde047",
    isSystem: true,
  },
  {
    id: "type_file",
    name: "file",
    icon: "File",
    color: "#6b7280",
    isSystem: true,
  },
  {
    id: "type_image",
    name: "image",
    icon: "Image",
    color: "#ec4899",
    isSystem: true,
  },
  {
    id: "type_link",
    name: "link",
    icon: "Link",
    color: "#10b981",
    isSystem: true,
  },
];

export const mockCollections = [
  {
    id: "col_1",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
    defaultTypeId: "type_snippet",
  },
  {
    id: "col_2",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
    defaultTypeId: "type_snippet",
  },
  {
    id: "col_3",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
    defaultTypeId: "type_file",
  },
  {
    id: "col_4",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
    defaultTypeId: "type_note",
  },
  {
    id: "col_5",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
    defaultTypeId: "type_command",
  },
  {
    id: "col_6",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
    defaultTypeId: "type_prompt",
  },
];

export const mockItems = [
  {
    id: "item_1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "TEXT" as const,
    content: `import { useSession } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()
  return {
    user: session?.user,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
  }
}`,
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    tags: ["react", "auth", "hooks"],
    itemTypeId: "type_snippet",
    createdAt: new Date("2026-01-15"),
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "TEXT" as const,
    content: `async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
      return res
    } catch (err) {
      if (i === retries - 1) throw err
      await new Promise(r => setTimeout(r, 2 ** i * 1000))
    }
  }
  throw new Error('Max retries reached')
}`,
    language: "typescript",
    isFavorite: false,
    isPinned: true,
    tags: ["fetch", "error-handling", "typescript"],
    itemTypeId: "type_snippet",
    createdAt: new Date("2026-01-15"),
  },
  {
    id: "item_3",
    title: "Code Review Prompt",
    description: "Prompt for thorough code reviews",
    contentType: "TEXT" as const,
    content:
      "Review this code for: 1) bugs and edge cases, 2) performance issues, 3) security vulnerabilities, 4) readability improvements. Be specific and actionable.",
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["code-review", "ai"],
    itemTypeId: "type_prompt",
    createdAt: new Date("2026-01-14"),
  },
  {
    id: "item_4",
    title: "git reset --hard HEAD~1",
    description: "Undo the last commit and discard changes",
    contentType: "TEXT" as const,
    content: "git reset --hard HEAD~1",
    language: "bash",
    isFavorite: false,
    isPinned: false,
    tags: ["git", "reset"],
    itemTypeId: "type_command",
    createdAt: new Date("2026-01-13"),
  },
  {
    id: "item_5",
    title: "Prisma Query Cheatsheet",
    description: "Common Prisma ORM query patterns",
    contentType: "TEXT" as const,
    content:
      "# Prisma Queries\n\n## Find many with filter\n```ts\nconst users = await prisma.user.findMany({ where: { isPro: true } })\n```",
    language: null,
    isFavorite: true,
    isPinned: false,
    tags: ["prisma", "database"],
    itemTypeId: "type_note",
    createdAt: new Date("2026-01-12"),
  },
  {
    id: "item_6",
    title: "Next.js Docs",
    description: "Official Next.js documentation",
    contentType: "URL" as const,
    content: null,
    url: "https://nextjs.org/docs",
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["nextjs", "docs"],
    itemTypeId: "type_link",
    createdAt: new Date("2026-01-11"),
  },
];

// Counts by type for sidebar
export const mockTypeCounts = {
  snippet: 24,
  prompt: 18,
  command: 15,
  note: 12,
  file: 5,
  image: 3,
  link: 8,
};
