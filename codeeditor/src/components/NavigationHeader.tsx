
import { SignedOut } from "@clerk/nextjs";
import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF"/><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6"/><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF"/><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF"/><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF"/><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF"/><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF"/><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF"/><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF"/></svg>


              <div className="relative">
                <span
                  className="block text-lg font-semibold bg-gradient-to-r
                 from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
                >
                  Phoenix
                </span>
                <span className="block text-xs text-blue-400/60 font-medium">
                  IDE
                </span>
              </div>
            </Link>
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
              to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <SignedOut>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20
                 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all 
                duration-300"
              >
                <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
                <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                  Pro
                </span>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
