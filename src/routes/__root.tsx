import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getAnalyticsConfig } from "@/lib/analytics.functions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const GTM_ID = "GTM-5VT2S74H";

export const Route = createRootRoute({
  loader: () => getAnalyticsConfig(),
  staleTime: Infinity,
  head: ({ loaderData }) => {
    const gaId = loaderData?.gaId ?? null;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "DS Scalp Micropigmentation - Premium SMP για άνδρες" },
        {
          name: "description",
          content:
            "Ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation από πιστοποιημένο ειδικό. Επανάφερε τη γραμμή των μαλλιών σου. Κλείσε ιδιωτική συνεδρία γνωριμίας σήμερα.",
        },
        { name: "author", content: "DS Scalp Micropigmentation" },
        { property: "og:title", content: "DS Scalp Micropigmentation" },
        { property: "og:description", content: "Premium SMP για άνδρες. Ρεαλιστικά, μόνιμα αποτελέσματα." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [
        { rel: "preconnect", href: "https://www.googletagmanager.com" },
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
      scripts: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
        },
        ...(gaId
          ? [
              { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
              {
                children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              },
            ]
          : []),
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VT2S74H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
}
