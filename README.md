# Open Numeric — Frontend

Next.js 15 (App Router) + React 19 + TS + Tailwind + Framer Motion + @dnd-kit.

## Démarrage

    npm install
    npm run dev

`.env.local` :
    NEXT_PUBLIC_API_URL=http://localhost:5000

## Structure

    src/
    ├── app/(site)/          # Vitrine
    ├── app/(auth)/auth/     # Login
    ├── app/(dashboard)/     # Dashboard admin
    ├── components/ui/       # Design system
    ├── components/dashboard/# Nav, Admins, Profile, Contacts
    ├── contexts/AuthContext # Session cookies httpOnly
    ├── hooks/               # useAuth, useCrud, useStats, useNav
    ├── services/core/       # http, crud, interceptor
    ├── services/*/          # Par module
    ├── endpoints/           # Chemins API
    └── types/               # Types TS

## Auth

- Cookies httpOnly (`on.accessToken`, `on.refreshToken`, `on.user`)
- `AuthContext` charge `/api/auth/me` au boot
- `<RequireAuth>` protège `/dashboard/*`
- `<RequireAdmin>` protège `/dashboard/admins`
- Redirect auto `/auth` sur 401

## Pages dashboard

    /dashboard              Stats
    /dashboard/projects     CRUD
    /dashboard/services     CRUD
    /dashboard/team         CRUD
    /dashboard/clients      CRUD
    /dashboard/testimonials CRUD
    /dashboard/socials      CRUD
    /dashboard/navigation   Arbre + DnD
    /dashboard/contacts     Messages
    /dashboard/quotes       Devis
    /dashboard/uploads      Médias
    /dashboard/profile      Mon profil
    /dashboard/admins       ADMIN only

## Pattern CRUD

    class XService extends CrudService<X, XCreateInput, XUpdateInput> {}
    const { items, loading, create, update, remove } = useCrud(xService);

## Docs liées

- `README_API.md` — Backend
- `README_ADMIN.md` — Guide dashboard

License : UNLICENSED