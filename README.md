# TechFlipp Camera Management System

## Setup Instructions

### Prerequisites

- Node.js 18+ installed on your machine
- bun or yarn package manager


### Installation Steps

1. **Clone the repository**

```shellscript
git clone https://github.com/Techflipp/hiring-task-dashboard-451
cd techflipp-camera-management
```


2. **Install dependencies**

```shellscript
bun install
# or
yarn install
```


3. **Start the development server**

```shellscript
bun run dev
# or
yarn dev
```


4. **Open the application**
Navigate to [http://localhost:3000](http://localhost:3000) in your browser


### Build for Production

```shellscript
bun run build
bun start
```

### Environment Variables

the provided API endpoint in .env file
---

## Overview of Implementation

### Architecture & Technology Stack

**Frontend Framework:**

- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with shadcn/ui components for consistent, responsive design


**State Management & Data Fetching:**

- **TanStack Query (React Query)** for server state management, caching, and optimistic updates
- **React Hook Form** with **Zod** validation for form handling
- **Sonner** for toast notifications


**UI Components:**

- **shadcn/ui** component library built on Radix UI primitives
- **Recharts** for data visualization and analytics charts
- **Lucide React** for consistent iconography


### Key Features Implemented

#### 1. Camera List Page (`/`)

- **Paginated table view** with customizable items per page (5, 10, 20, 50)
- **Search functionality** by camera name with debounced input
- **Responsive design** that works on mobile, tablet, and desktop
- **Loading states** with skeleton components for better UX
- **Error handling** with user-friendly error messages


#### 2. Camera Detail Page (`/cameras/[id]`)

- **Comprehensive camera information** display
- **Demographics configuration** details (if configured)
- **Quick action buttons** for editing camera and configuring demographics
- **Server-side rendering** for better SEO and initial load performance


#### 3. Camera Update Functionality (`/cameras/[id]/edit`)

- **Form validation** using React Hook Form and Zod schemas
- **Tag selection** with checkbox-based multi-select interface
- **Real-time validation feedback** with field-level error messages
- **Optimistic UI updates** for immediate feedback
- **Proper error handling** with toast notifications


#### 4. Demographics Configuration (`/demographics/config/[cameraId]`)

- **Create/Edit forms** for demographics configuration
- **Appropriate input controls** including sliders for decimal values
- **Comprehensive validation** with min/max constraints
- **User-friendly interface** with descriptions for each field


#### 5. Demographics Results & Analytics (`/cameras/[id]`)

- **Interactive filtering** by date range, gender, age, emotion, and ethnicity
- **Multiple chart types** including pie charts and bar charts
- **Tabbed interface** for different analytics views (Overview, Gender, Age, Ethnicity)
- **Responsive charts** that adapt to different screen sizes
- **Data processing** for meaningful insights and visualizations


### File Structure

```plaintext
app/
├── cameras/[id]/
│   ├── page.tsx          # Camera details page
│   └── edit/page.tsx     # Camera edit form
├── demographics/config/[cameraId]/
│   └── page.tsx          # Demographics configuration
├── layout.tsx            # Root layout with providers
├── page.tsx              # Home page (camera list)
├── not-found.tsx         # 404 page
└── globals.css           # Global styles

components/
├── cameras/              # Camera-related components
├── demographics/         # Demographics components
├── layout/               # Layout components
├── skeletons/            # Loading state components
├── ui/                   # Reusable UI components
└── providers.tsx         # React Query and theme providers

lib/
├── api/                  # API functions
├── types.ts              # TypeScript type definitions
└── utils.ts              # Utility functions
```

---

## Assumptions and Design Decisions

### API Assumptions

1. **API Stability**: Assumed the provided API endpoints are stable and follow the documented schema
2. **Error Handling**: Assumed standard HTTP status codes for error responses
3. **Data Consistency**: Assumed that camera IDs remain consistent across API calls
4. **Pagination**: Assumed the API returns total count and page information for proper pagination


### Design Decisions

#### 1. **Next.js App Router over Pages Router**

- **Reasoning**: App Router provides better performance with Server Components, improved routing, and better developer experience
- **Benefits**: Server-side rendering for initial data, better SEO, and modern React patterns


#### 2. **TanStack Query for Data Management**

- **Reasoning**: Provides excellent caching, background refetching, and optimistic updates
- **Benefits**: Reduces API calls, improves user experience, and handles loading/error states automatically


#### 3. **Form Validation Strategy**

- **React Hook Form + Zod**: Chosen for type-safe validation and excellent performance
- **Field-level validation**: Provides immediate feedback to users
- **Schema-based validation**: Ensures consistency between frontend and API expectations


#### 4. **Component Architecture**

- **Separation of concerns**: API logic separated from UI components
- **Reusable components**: Created skeleton loaders and shared UI components
- **Feature-based organization**: Components organized by feature rather than type


#### 5. **Responsive Design Approach**

- **Mobile-first**: Designed for mobile devices first, then enhanced for larger screens
- **Flexible layouts**: Used CSS Grid and Flexbox for adaptive layouts
- **Touch-friendly**: Ensured buttons and interactive elements are appropriately sized


#### 6. **Error Handling Strategy**

- **Graceful degradation**: Application continues to work even when some features fail
- **User-friendly messages**: Error messages are clear and actionable
- **Retry mechanisms**: Built-in retry logic for failed API calls


#### 7. **Performance Optimizations**

- **Server Components**: Used for initial data fetching to reduce client-side work
- **Skeleton loading**: Improves perceived performance during data loading
- **Query caching**: Reduces redundant API calls
- **Code splitting**: Automatic code splitting with Next.js App Router


#### 8. **Accessibility Considerations**

- **Semantic HTML**: Used appropriate HTML elements for better screen reader support
- **ARIA labels**: Added where necessary for complex interactions
- **Keyboard navigation**: Ensured all interactive elements are keyboard accessible
- **Color contrast**: Used shadcn/ui color system for proper contrast ratios


#### 9. **Data Visualization Choices**

- **Recharts library**: Chosen for its React-native approach and customization options
- **Multiple chart types**: Used pie charts for distributions and bar charts for comparisons
- **Responsive charts**: Charts adapt to container size for mobile compatibility


#### 10. **State Management Philosophy**

- **Server state vs Client state**: Used React Query for server state, React state for UI state
- **Optimistic updates**: Implemented for better user experience during mutations
- **Cache invalidation**: Strategic cache invalidation to keep data fresh


### Trade-offs Made

1. **Checkbox vs Dropdown for Tags**: Chose checkboxes over a complex multi-select dropdown for better usability and to avoid registry issues
2. **Client-side filtering vs Server-side**: Implemented client-side chart filtering for better interactivity, assuming reasonable data sizes
3. **Bundle size vs Features**: Included comprehensive charting library despite bundle size impact for better analytics experience


### Future Enhancements Considered

1. **Real-time updates**: WebSocket integration for live data updates
2. **Advanced filtering**: More sophisticated filtering options for analytics
3. **Export functionality**: CSV/PDF export for analytics data
4. **User authentication**: Role-based access control
5. **Offline support**: Service worker for offline functionality
6. **Advanced caching**: Redis or similar for server-side caching

