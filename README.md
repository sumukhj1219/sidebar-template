Sidebar Template — Next.js 16 + shadcn/ui

A clean, responsive, collapsible sidebar layout built using Next.js 16, shadcn/ui, and lucide-react.
This template includes:

Left collapsible sidebar

Right optional sidebar

Dashboard layout structure

Responsive behavior

shadcn/ui components

React Server Components (RSC)–compatible structure

Features

Fully Responsive Sidebar

Collapsible Navigation

Simple File Structure

Lucide Icons Integration

Easy to Customize

Works with App Router (Next.js 16)

src/
 ├─ app/
 │   └─ dashboard/
 │       ├─ layout.tsx        → Wraps the dashboard with sidebars
 │       └─ page.tsx          → Main dashboard content
 │
 ├─ components/
 │   ├─ sidebar/
 │   │   ├─ left/
 │   │   │   ├─ left-sidebar.tsx
 │   │   │   ├─ nav-main.tsx
 │   │   │   └─ nav-projects.tsx
 │   │   ├─ right/
 │   │   │   └─ right-sidebar.tsx
 │   │   └─ user.tsx
 │   ├─ layout/
 │   │   └─ dashboard-main.tsx
 │   └─ ui/                   → shadcn components
 │
 └─ lib/
     └─ utils.ts
