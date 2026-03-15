# Made Local Co.

**Connecting Passionate Makers with Conscious Consumers**

Type your zip code. Find what you're looking for. Meet the person who made it.

## About

Made Local Co. is a searchable directory of local makers organized by location and category. Consumers enter their zip code and find artisans, craftsmen, and farmers nearby.

## Tech Stack

- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Database:** Supabase (PostgreSQL + PostGIS)
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Email:** Resend
- **Hosting:** Vercel
- **Images:** Cloudinary

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
```

## License

Private — All rights reserved.
