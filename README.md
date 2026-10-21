# velectico.com — Next.js site

## Run locally
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out

## Edit content
All copy, products, case studies, clients and team live in lib/content.ts.
Screens: public/images/products and public/images/work (WebP, sample data only).

## Team photos
Drop square JPGs into public/team/ named sarmistha-gupta.jpg, amrita-roy.jpg
and aryadev-chatterjee.jpg (Tech Lead). Initials show until a photo exists.
People are set in team in lib/content.ts.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo. Framework: Next.js. No settings to change.
3. Project > Settings > Domains > add velectico.com and www.velectico.com.
4. At the DNS for velectico.com (cPanel Zone Editor or the registrar), change ONLY:
   A     @    76.76.21.21
   CNAME www  cname.vercel-dns.com
   Leave the MX, mail, SPF/DKIM records alone so email keeps working.

## Or host on cPanel
npm run build, then upload the contents of ./out to public_html.
