import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-full min-h-full">
        <Navbar />
        <div className="p-8">
          <Component {...pageProps} />
        </div>
      </div>
    </QueryClientProvider>
  );
}
