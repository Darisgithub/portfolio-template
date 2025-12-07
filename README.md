# Portfolio Website 🚀

A modern, high-performance developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Features a fully responsive design, dark/light mode, and real-time contact form integration with Supabase.

## ✨ Features

- **Modern UI/UX**: Clean, glassmorphic design inspired by premium dark-mode aesthetics.
- **Dark/Light Mode**: Fully supported dynamic theme toggle with persistence (saved to localStorage).
- **Responsive Navigation**:
  - **Desktop**: Sleek vertical side dock.
  - **Mobile**: App-style floating bottom bar for easy reach.
- **Interactive Components**:
  - **Hero**: Typing animation for roles and smooth entrance effects.
  - **Tech Stack**: Infinite auto-scrolling banner with constrained fade edges.
  - **Projects & Certifications**: Hover-reveal cards showing details on interaction.
- **Contact Form**:
  - **Direct Email**: Clickable "Mail me at" card opens Gmail compose directly.
  - **Message Form**: Fully functional form integrated with **Supabase** database.

## 🛠 Tech Stack

- **Frontend**: [React.js](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: `framer-motion`, `react-type-animation`
- **Icons**: `react-icons` (FontAwesome, Bootstrap, SimpleIcons, AntDesign)
- **Backend / DB**: [Supabase](https://supabase.com/)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Darisgithub/portfolio-template.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server
```bash
npm run dev
```

## 🗄️ Supabase Setup (For Contact Form)

To make the contact form work, set up a Supabase project:

1.  **Create a Table** named `messages`.
2.  **Add Columns**:
    - `id` (int8, primary key)
    - `created_at` (timestamptz, default: now())
    - `name` (text)
    - `email` (text)
    - `message` (text)
3.  **Enable RLS (Row Level Security)** and add a policy to allow **INSERT** for anyone (anon role).

## 🎨 Customization

-   **Colors**: Edit `tailwind.config.js` to change the `primary`, `secondary`, or `dark` theme colors.
-   **Content**: Update `src/components/` files to change text, images, and links.
    -   `Hero.jsx`: Name, roles, social links.
    -   `TechStack.jsx`: Icons in the scrolling banner.
    -   `Projects.jsx`: Project details and links.
    -   `Certifications.jsx`: Credentials and years.

## 📱 Responsiveness

The site is built to be 100% responsive:
-   **Desktop**: Full layout with side navigation.
-   **Tablet/Mobile**: Grids adapt to single/double columns, and navbar shifts to the bottom for better accessibility.

---

