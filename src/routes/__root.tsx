import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="grid min-h-screen place-items-center bg-background px-6"><div className="text-center"><p className="font-mono text-sm text-primary">404</p><h1 className="mt-3 font-display text-4xl font-bold">Page not found</h1><a href="/" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Return home</a></div></div>;
}
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]);
  return <div className="grid min-h-screen place-items-center bg-background px-6"><div className="max-w-md text-center"><h1 className="font-display text-3xl font-bold">This page didn’t load</h1><p className="mt-3 text-muted-foreground">Please try again or return to MediConnect.</p><button className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" onClick={reset}>Try again</button></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MediConnect AI — Healthcare, connected" },
      { name: "description", content: "MediConnect AI connects patients with doctors, hospitals, labs and pharmacies through one intelligent healthcare platform." },
      { property: "og:title", content: "MediConnect AI — Healthcare, connected" },
      { property: "og:description", content: "Find care, track reports and manage your health network in one calm, intelligent platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /><Toaster position="top-right" /></QueryClientProvider>; }
