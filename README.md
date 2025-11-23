# Sidebar Template — Next.js 16 + shadcn/ui

A clean, responsive, collapsible sidebar layout built using **Next.js 16**, **shadcn/ui**, and **lucide-react**. Designed for scalability and performance using React Server Components (RSC).

## 🚀 Features

- **Next.js 16 App Router**: Fully compatible with the latest Next.js features.
- **Shadcn/ui Components**: Beautiful, accessible components pre-configured.
- **Dual Sidebar Layout**:
  - **Left Sidebar**: Main navigation, collapsible.
  - **Right Sidebar**: Optional panel for activities, notifications, or contacts.
- **Responsive Design**: Mobile-first approach with collapsible navigation.
- **RSC Compatible**: Optimized structure for Server Components.
- **Lucide Icons**: Lightweight and consistent iconography.

---

## 📂 Project Structure

A clean structure separating UI atoms from feature-specific logic.

```text
src/
 ├─ app/
 │   └─ (dashboard)/
 │       ├─ layout.tsx        # Wraps dashboard with sidebars
 │       └─ page.tsx          # Main dashboard content
 │
 ├─ components/
 │   ├─ layout/               # Layout specific components
 │   │   ├─ app-sidebar.tsx   # Main Left Sidebar
 │   │   └─ header.tsx        # Top Navigation
 │   └─ ui/                   # Reusable shadcn/ui primitives
 │
 ├─ features/                 # Feature-based modules
 │   ├─ analytics/            # Charts and data visualization
 │   └─ sidebar-content/      # Content for right sidebar (activities, etc.)
 │
 ├─ hooks/                    # Custom React hooks
 └─ lib/
     └─ utils.ts              # CN utilities

Navigate to /orders to preview the order table

```
# Clone the repository
git clone <https://github.com/sumukhj1219/sidebar-template>

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run the development server
npm run dev

# Customizations
```
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  // Add new items here
]
```
