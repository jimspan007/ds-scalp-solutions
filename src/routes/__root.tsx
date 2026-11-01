import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaButton } from "@/components/CtaButton";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-2xl px-6 py-32 md:py-44 text-center">
          <p className="eyebrow">{t("notFound.eyebrow")}</p>
          <p className="mt-8 font-display text-[7rem] md:text-[10rem] leading-[0.85] text-balance">
            404
          </p>
          <h1 className="mt-6 font-display text-3xl md:text-4xl text-balance">
            {t("notFound.title")}
          </h1>
          <p className="mt-5 mx-auto max-w-md text-muted-foreground leading-relaxed">
            {t("notFound.body")}
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton to="/" arrow>
              {t("notFound.cta")}
            </CtaButton>
          </div>
        </div>
      </section>
    </SiteLayout>
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
