suZyte
suzyte
Listening to Spotify
Party Orgnaizer — 26-09-2024 05:05
https://richup.io/room/vje9x
Richup.io: Play Monopoly Alternative 🎲 - Free Online Game
A free online alternative to the board game Monopoly. Play with friends, strangers, or bots. No sign up or download is required!
Image
Party Orgnaizer — 26-09-2024 05:20
https://www.youtube.com/watch?v=VM3uXu1Dq4c
YouTube
Shabeebstyle
No no no no no no no wait wait wait wait meme
Image
https://richup.io/room/4uvdn
Richup.io: Play Monopoly Alternative 🎲 - Free Online Game
A free online alternative to the board game Monopoly. Play with friends, strangers, or bots. No sign up or download is required!
Image
Image
Hawk Tuah — 26-09-2024 05:24
https://richup.io/room/vaiph
Richup.io: Play Monopoly Alternative 🎲 - Free Online Game
A free online alternative to the board game Monopoly. Play with friends, strangers, or bots. No sign up or download is required!
Image
240 fps diddler — 26-09-2024 07:03
@McDiddy
Hawk Tuah — 26-09-2024 07:30
@240 fps diddler
why u up
wtf
240 fps diddler — 26-09-2024 07:57
Coz train
Im awake for thodi der ill sleep again
Delhi
Yep
All Divyansh does is deceive bro
🗿
Uski trades bahut dhang se evaluate krni pdti
U guys just started yeah?
No dnd wala smaan then
Imma just eat and sleep
240 fps diddler — 26-09-2024 22:54
https://dnd5e.wikidot.com/spell:vampiric-touch
Party Orgnaizer — 27-09-2024 00:24
https://richup.io/room/weeh9
Richup.io: Play Monopoly Alternative 🎲 - Free Online Game
A free online alternative to the board game Monopoly. Play with friends, strangers, or bots. No sign up or download is required!
Image
Party Orgnaizer — 27-09-2024 01:10
https://richup.io/room/14cef
Richup.io: Play Monopoly Alternative 🎲 - Free Online Game
A free online alternative to the board game Monopoly. Play with friends, strangers, or bots. No sign up or download is required!
Image
A.Diddy — 07-11-2024 06:48
oiii
Farm Merge Valley
APP
 — 09-11-2024 01:16
Activity ended. Start a new one?
OverCommit — 02-12-2024 00:21
ill play witcher on ur
60fps stream , all thanks to me
you all want free nitro?
okay
after game
Euphony
APP
 — 02-12-2024 03:49
Euphony disconnected from voice channel
Due to inactivity for too long
Set Euphony to 24/7 to have it stay in the voice channel 24/7
Command: /247
Set Euphony on Radio mode to have it continuously play music 24/7
Command: /radio mode, /radio artist, or /radio genre
Enjoying Euphony?
Consider leaving a review and/or voting for our bot here
OverCommit — 02-12-2024 05:40
no mic
OverCommit — 02-12-2024 06:25
ggs
i am going to sleep
late night ill msg you
xaszcordx__ — 02-12-2024 18:12
mic not picking up audio
ik that why i said
Euphony
APP
 — 21-01-2025 02:16
Upgrade to unlock this link
In order to keep playback reliable and working for our subscribers, we had to add this limit.

To get unlimited link usage, please consider supporting Euphony by upgrading to any tier. Free trials are available for Member plans!

Unlock unlimited links for your server(s) by upgrading to a server plan.
OverCommit — 01-02-2025 06:24
okk
OverCommit — 03-02-2025 09:14
no mic
Hawk Tuah — 03-02-2025 09:14
ah khelna hai?
OverCommit — 03-02-2025 09:14
15mins?
OverCommit — 03-02-2025 09:35
can play
same
no
idk
lets see
msg e after u wake up
dc
suZyte — 21-03-2025 01:21
https://www.svgrepo.com/svg/530444/availability
SVG Repo
Availability Vector SVG Icon - SVG Repo
Free Availability Vector Icon in SVG format. ✅ Download Free Availability Vector and icons for commercial use. Availability SVG vector illustration graphic art design format.SVG Vector vectors.
Availability Vector SVG Icon - SVG Repo
suZyte — 21-03-2025 01:49
"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_CONFIG } from "../_constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, Lock, Sparkles } from "lucide-react";
import useMounted from "@/hooks/useMounted";

function LanguageSelector({ hasAccess }: { hasAccess: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();

  const { language, setLanguage } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguageObj = LANGUAGE_CONFIG[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (langId: string) => {
    if (!hasAccess && langId !== "javascript" && langId !== "python") return;

    setLanguage(langId);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-3 px-4 py-2.5 bg-[#1e1e2e]/80 
      rounded-lg transition-all 
       duration-200 border border-gray-800/50 hover:border-gray-700
       ${!hasAccess && language !== "javascript" && language !== "python" ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {/* Decoration */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5 
        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        <div className="size-6 rounded-md bg-gray-800/50 p-0.5 group-hover:scale-110 transition-transform">
          <Image
            src={currentLanguageObj.logoPath}
            alt="programming language logo"
            width={24}
            height={24}
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        <span className="text-gray-200 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentLanguageObj.label}
        </span>

        <ChevronDownIcon
          className={`size-4 text-gray-400 transition-all duration-300 group-hover:text-gray-300
            ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#1e1e2e]/95 backdrop-blur-xl
           rounded-xl border border-[#313244] shadow-2xl py-2 z-50"
          >
            <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
              <p className="text-xs font-medium text-gray-400">Select Language</p>
            </div>

            <div className="max-h-[280px] overflow-y-auto overflow-x-hidden">
              {Object.values(LANGUAGE_CONFIG).map((lang, index) => {
                const isLocked = !hasAccess && lang.id !== "javascript" && lang.id !== "python";

                return (
                  <motion.div
                    key={lang.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group px-2"
... (70 lines left)
Collapse
message.txt
7 KB
﻿
"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_CONFIG } from "../_constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, Lock, Sparkles } from "lucide-react";
import useMounted from "@/hooks/useMounted";

function LanguageSelector({ hasAccess }: { hasAccess: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();

  const { language, setLanguage } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguageObj = LANGUAGE_CONFIG[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (langId: string) => {
    if (!hasAccess && langId !== "javascript" && langId !== "python") return;

    setLanguage(langId);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-3 px-4 py-2.5 bg-[#1e1e2e]/80 
      rounded-lg transition-all 
       duration-200 border border-gray-800/50 hover:border-gray-700
       ${!hasAccess && language !== "javascript" && language !== "python" ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {/* Decoration */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5 
        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        <div className="size-6 rounded-md bg-gray-800/50 p-0.5 group-hover:scale-110 transition-transform">
          <Image
            src={currentLanguageObj.logoPath}
            alt="programming language logo"
            width={24}
            height={24}
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        <span className="text-gray-200 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentLanguageObj.label}
        </span>

        <ChevronDownIcon
          className={`size-4 text-gray-400 transition-all duration-300 group-hover:text-gray-300
            ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#1e1e2e]/95 backdrop-blur-xl
           rounded-xl border border-[#313244] shadow-2xl py-2 z-50"
          >
            <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
              <p className="text-xs font-medium text-gray-400">Select Language</p>
            </div>

            <div className="max-h-[280px] overflow-y-auto overflow-x-hidden">
              {Object.values(LANGUAGE_CONFIG).map((lang, index) => {
                const isLocked = !hasAccess && lang.id !== "javascript" && lang.id !== "python";

                return (
                  <motion.div
                    key={lang.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group px-2"
                  >
                    <button
                      className={`
                      relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${language === lang.id ? "bg-blue-500/10 text-blue-400" : "text-gray-300"}
                      ${isLocked ? "opacity-50" : "hover:bg-[#262637]"}
                    `}
                      onClick={() => handleLanguageSelect(lang.id)}
                      disabled={isLocked}
                    >
                      {/* decorator */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity"
                      />

                      <div
                        className={`
                         relative size-8 rounded-lg p-1.5 group-hover:scale-110 transition-transform
                         ${language === lang.id ? "bg-blue-500/10" : "bg-gray-800/50"}
                       `}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg 
                        opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <Image
                          width={24}
                          height={24}
                          src={lang.logoPath}
                          alt={`${lang.label} logo`}
                          className="w-full h-full object-contain relative z-10"
                        />
                      </div>

                      <span className="flex-1 text-left group-hover:text-white transition-colors">
                        {lang.label}
                      </span>

                      {/* selected language border */}
                      {language === lang.id && (
                        <motion.div
                          className="absolute inset-0 border-2 border-blue-500/30 rounded-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}

                      {isLocked ? (
                        <Lock className="w-4 h-4 text-gray-500" />
                      ) : (
                        language === lang.id && (
                          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        )
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default LanguageSelector;
