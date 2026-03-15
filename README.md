# Made Local Co.

**THE search engine for locally made and grown goods.**

Connecting passionate makers with conscious consumers through a zip-code-based directory of local artisans, craftsmen, and farmers.

🌐 **Website:** [madelocalco.com](https://madelocalco.com)  
📸 **Instagram:** [@madelocalco](https://instagram.com/madelocalco)

---

## What is Made Local Co.?

Made Local Co. is a local-first directory that helps people discover makers, artisans, and farmers within driving distance of their location. Think: Google for local makers.

**For Consumers:**
- Search by zip code + category to find local makers
- - Discover artisans you never knew existed nearby
  - - Support your local maker economy
   
    - **For Makers:**
    - - Free listing with full visibility (no paywall, ever)
      - - Connect with customers actively seeking local goods
        - - Optional sponsored placement for premium visibility
         
          - ---

          ## Tech Stack

          | Layer | Technology |
          |-------|------------|
          | **Framework** | Next.js 14 (App Router) |
          | **Language** | TypeScript |
          | **Styling** | Tailwind CSS |
          | **Database** | Supabase (PostgreSQL + PostGIS) |
          | **Auth** | Supabase Auth |
          | **Images** | Cloudinary |
          | **Payments** | Stripe |
          | **Email** | Resend |
          | **Hosting** | Vercel |
          | **Analytics** | Vercel Analytics + PostHog |

          ---

          ## Core Features

          ### Search Engine
          - Zip code-based location search with configurable radius
          - - Full-text search across maker names, bios, and products
            - - Category filtering and faceted search
              - - PostGIS-powered geo queries for "nearest" sorting
               
                - ### Maker Profiles
                - - Rich profiles with photos, story, and product listings
                  - - Multiple category assignments
                    - - Farmers market presence tracking
                      - - Contact information and social links
                       
                        - ### Sponsored Placement
                        - - Homepage banner after zip code entry
                          - - Top-of-search sponsored results (labeled)
                            - - Category page spotlights
                              - - Maker Spotlight articles
                               
                                - ---

                                ## Project Structure

                                ```
                                /
                                ├── app/                  # Next.js App Router
                                │   ├── (public)/        # Public pages (home, search, profiles)
                                │   ├── (auth)/          # Auth pages (login, register)
                                │   ├── dashboard/       # Maker dashboard
                                │   └── api/             # API routes
                                ├── components/          # React components
                                ├── lib/                 # Utilities and configs
                                ├── supabase/            # Database migrations and types
                                ├── docs/                # Product documentation
                                └── public/              # Static assets
                                ```

                                ---

                                ## Getting Started

                                ### Prerequisites
                                - Node.js 18+
                                - - pnpm (recommended) or npm
                                  - - Supabase account
                                    - - Vercel account (for deployment)
                                     
                                      - ### Local Development
                                     
                                      - ```bash
                                        # Clone the repo
                                        git clone https://github.com/simpli-fi-os/madelocalco.git
                                        cd madelocalco

                                        # Install dependencies
                                        pnpm install

                                        # Set up environment variables
                                        cp .env.example .env.local
                                        # Edit .env.local with your Supabase and other API keys

                                        # Run database migrations
                                        pnpm supabase:migrate

                                        # Start dev server
                                        pnpm dev
                                        ```

                                        ### Environment Variables

                                        ```
                                        NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
                                        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
                                        SUPABASE_S#E RMVaIdCeE _LRoOcLaEl_ KCEoY.=
                                        y
                                        o*u*rT_HsEe rsveiacrec_hk eeyn
                                        gNiEnXeT _fPoUrB LlIoCc_aClLlOyU DmIaNdAeR Ya_nCdL OgUrDo_wNnA MgEo=oydosu.r*_*c
                                        l
                                        oCuodn
                                        nSeTcRtIiPnEg_ SpEaCsRsEiTo_nKaEtYe= ymoaukre_rsst rwiipteh_ kceoyn
                                        sRcEiSoEuNsD _cAoPnIs_uKmEeYr=sy otuhrr_oruegshe nad _zkiepy-
                                        c`o`d`e
                                        -
                                        b-a-s-e
                                        d
                                         #d#i rDeocctuomreyn toaft iloonc
                                        a
                                        lS eaer ttihsea n`s/,d occrsa`f tfsomledne,r  afnodr  fcaormmpelrest.e

                                        p🌐r o*d*uWcetb sdiotceu:m*e*n t[amtaidoenl:o
                                        c
                                        a-l c*o*.PcRoOmD]U(ChTt_tOpVsE:R/V/ImEaWd.emldo*c*a l-c oV.icsoimo)n ,
                                        t📸 a*r*gIents tuasgerrasm,: *v*a l[u@em apdreolpoocsailtcioo]n(
                                        h-t t*p*sB:R/A/NiDn_sGtUaIgDrEaLmI.NcEoSm./mmda*d*e l-o cCaollcoor)s
                                        ,
                                         -t-y-p
                                        o
                                        g#r#a pWhhya,t  viosi cMea,d ep hLootcoaglr aCpoh.y?

                                        -
                                         M*a*dTeE CLHoNcIaClA LC_oA.R CiHsI TaE ClToUcRaEl.-mfdi*r*s t-  dDiarteacbtaosrey  stchhaetm ah,e lApPsI sp,e oipnlfer adsitsrcuocvteurr em
                                        a-k e*r*sS,E AaRrCtHi_sEaNnGsI,N Ea.nmdd *f*a r-m eSresa rwciht hUiXn,  drrainvkiinngg  dailsgtoarnicteh mo,f  mtohbeiilre  leoxcpaetriioenn.c eT
                                        h-i n*k*:M OGNoEoTgIlZeA TfIoOrN _lSoTcRaAlT EmGaYk.emrds*.*

                                        -* *FFroere -Cfoinrssutm emrosd:e*l*,
                                         -s pSoenasrocrhe db yp lzaicpe mceondte
                                         -+  *c*aGtReOgWoTrHy_ PtLoA YfBiOnOdK .lmodc*a*l  -m aLkaeurnsc
                                        h-  sDtirsactoevgeyr,  aSrEtOi,s avnisr aylo ul onoepvse
                                        r-  k*n*eMwV Pe_xRiOsAtDeMdA Pn.emadr*b*y
                                        --  8S-uwpepeokr tb uyioludr  tliomcealli nmea
                                        k
                                        e-r- -e
                                        c
                                        o#n#o mFyr
                                        e
                                        e*-*FFiorrs tM aPkheirlso:s*o*p
                                        h-y
                                        F
                                        r*e*eE vleirsyt imnagk ewri tlhi sftuilnlg  viiss ifbrielei.t yF o(rneov epra.y*w*a
                                        l
                                        lW,e  ebveelri)e
                                        v-e  Cionn nreecmto vwiintgh  bcaursrtioemresr st oa cvtiisviebliyl isteye kfionrg  llooccaall  mgaokoedrss
                                        .-  ROepvteinounea lc osmpeosn sforroemd  oppltaicoenmaeln ts pfoonrs oprreedm ipulma cveimseinbti laintdy
                                        p
                                        r-e-m-i
                                        u
                                        m# #s eTrevcihc eSst,a cnko
                                        t
                                         |p aLyawyaelrl s|.
                                        T
                                        eWchhanto leovgeyr y|
                                        m|a-k-e-r- -g-e-t|s- -f-o-r- -f-r-e-e-:-
                                        --|
                                        F|u l*l* Fprraomfeiwloer k(*n*a m|e ,N ebxito.,j ss t1o4r y(,A plpo cRaotuitoenr))
                                         -|
                                        U|n l*i*mLiatnegdu apgheo*t*o s|
                                         -T yAplelS ccroinptta c|t
                                         |m e*t*hSotdysl
                                        i-n gM*u*l t|i pTlaei lcwaitnedg oCrSyS  l|i
                                        s|t i*n*gDsa
                                        t-a bFauslel* *s e|a rScuhp avbiassieb i(lPiotsyt
                                        g-r ePSrQoLf i+l eP oasntaGlIySt)i c|s

                                        |-  *C*uAsuttohm* *U R|L
                                        S
                                        u-p-a-b
                                        a
                                        s#e#  ACuotnht r|i
                                        b|u t*i*nIgm
                                        a
                                        gTehsi*s*  i|s  Cal opurdiivnaatrey  p|r
                                        o|j e*c*tP auynmdeenrt sS*i*m p|l iS-tFrIi pOeS .|
                                        F|o r* *iEnmtaeirln*a*l  |c oRnetsreinbdu t|o
                                        r|s :*
                                        *
                                        H1o.s tCirnega*t*e  |a  Vfeeracteulr e|
                                        b|r a*n*cAhn aflryotmi c`sm*a*i n|`
                                        V2e.r cMealk eA nyaoluyrt icchsa n+g ePso
                                        s3t.H oSgu b|m
                                        i
                                        t- -a-
                                        P
                                        R# #w iCtohr ed eFsecartiuprteiso
                                        n

                                        #4#.#  WSaeiatr cfho rE nrgeivniee
                                        w-

                                        Z-i-p-
                                        c
                                        o#d#e -Lbiacseends el
                                        o
                                        cPartiivoant es.e aArlclh  rwiigthht sc ornefsiegruvreadb.l
                                        e
                                         -r-a-d
                                        i
                                        uBsu
                                        i-l tF uwlilt-ht e❤️x ti ns eTaerxcahs  abcyr oSsism pmlaik-eFrI  nOaSmes, bios, and products
                                        - Category filtering and faceted search
                                        - PostGIS-powered geo queries for "nearest" sorting

                                        ### Maker Profiles
                                        - Rich profiles with photos, story, and product listings
                                        - Multiple category assignments
                                        - Farmers market presence tracking
                                        - Contact information and social links

                                        ### Sponsored Placement
                                        - Homepage banner after zip code entry
                                        - Top-of-search sponsored results (labeled)
                                        - Category page spotlights
                                        - Maker Spotlight articles

                                        ---

                                        ## Project Structure

                                        ```
                                        /
                                        ├── app/                  # Next.js App Router
                                        │   ├── (public)/        # Public pages (home, search, profiles)
                                        │   ├── (auth)/          # Auth pages (login, register)
                                        │   ├── dashboard/       # Maker dashboard
                                        │   └── api/             # API routes
                                        ├── components/          # React components
                                        ├── lib/                 # Utilities and configs
                                        ├── supabase/            # Database migrations and types
                                        ├── docs/                # Product documentation
                                        └── public/              # Static assets
                                        ```

                                        ---

                                        ## Getting Started

                                        ### Prerequisites
                                        - Node.js 18+
                                        - pnpm (recommended) or npm
                                        - Supabase account
                                        - Vercel account (for deployment)

                                        ### Local Development

                                        ```bash
                                        # Clone the repo
                                        git clone https://github.com/simpli-fi-os/madelocalco.git
                                        cd madelocalco

                                        # Install dependencies
                                        pnpm install

                                        # Set up environment variables
                                        cp .env.example .env.local
                                        # Edit .env.local with your Supabase and other API keys

                                        # Run database migrations
                                        pnpm supabase:migrate

                                        # Start dev server
                                        pnpm dev
                                        ```

                                        ### Environment Variables

                                        ```
                                        NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
                                        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
                                        SUPABASE_SERVICE_ROLE_KEY=your_service_key
                                        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud
                                        STRIPE_SECRET_KEY=your_stripe_key
                                        RESEND_API_KEY=your_resend_key
                                        ```

                                        ---

                                        ## Documentation

                                        See the `/docs` folder for complete product documentation:

                                        - **PRODUCT_OVERVIEW.md** - Vision, target users, value proposition
                                        - - **BRAND_GUIDELINES.md** - Colors, typography, voice, photography
                                          - - **TECHNICAL_ARCHITECTURE.md** - Database schema, APIs, infrastructure
                                            - - **SEARCH_ENGINE.md** - Search UX, ranking algorithm, mobile experience
                                              - - **MONETIZATION_STRATEGY.md** - Free-first model, sponsored placement
                                                - - **GROWTH_PLAYBOOK.md** - Launch strategy, SEO, viral loops
                                                  - - **MVP_ROADMAP.md** - 8-week build timeline
                                                   
                                                    - ---

                                                    ## Free-First Philosophy

                                                    **Every maker listing is free. Forever.**

                                                    We believe in removing barriers to visibility for local makers. Revenue comes from optional sponsored placement and premium services, not paywalls.

                                                    What every maker gets for free:
                                                    - Full profile (name, bio, story, location)
                                                    - - Unlimited photos
                                                      - - All contact methods
                                                        - - Multiple category listings
                                                          - - Full search visibility
                                                            - - Profile analytics
                                                              - - Custom URL
                                                               
                                                                - ---

                                                                ## Contributing

                                                                This is a private project under Simpli-FI OS. For internal contributors:

                                                                1. Create a feature branch from `main`
                                                                2. 2. Make your changes
                                                                   3. 3. Submit a PR with description
                                                                      4. 4. Wait for review
                                                                        
                                                                         5. ---
                                                                        
                                                                         6. ## License
                                                                        
                                                                         7. Private. All rights reserved.
                                                                        
                                                                         8. ---
                                                                         9. 
                                                                         Built with ❤️ in Texas by Simpli-FI OS
