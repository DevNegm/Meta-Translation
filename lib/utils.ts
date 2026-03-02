import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTo(id: string, offset = 0) {
  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

export const Links = [
  {
    name_en: "Home",
    name_ar: "الصفحة الرئيسية",
    id: "home",
  },
  {
    name_en: "About",
    name_ar: "من نحن",
    id: "about",
  },
  {
    name_en: "What We Offer",
    name_ar: "ما نقدمه",
    id: "services",
  },
   {
    name_en: "Our Services",
    name_ar: "خدماتنا",
    id: "ourservices",
  },
  {
    name_en: "Clients",
    name_ar: "عملاءنا",
    id: "clients",
  },
 
];

export const showIcon = (index: number) => {
  if (index === 0) return '/price-tag.png';
  if (index === 1) return '/quality.png';
  if (index === 2) return '/timing.png';
}

export function getYoutubeEmbedUrl(url: string): string {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    // لو short link
    if (parsedUrl.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    // لو watch?v=
    if (parsedUrl.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsedUrl.searchParams.get("v")}`;
    }

    return "";
  } catch {
    return "";
  }
}

import { z } from "zod";


export const quotationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6),
  volume: z.string().min(1),
  field: z.string().min(1),
  source_lang: z.string().min(1),
  target_lang: z.string().min(1),
  message: z.string().min(5),
  sample_file: z.any().optional(),
});

export type QuotationFormValues = z.infer<typeof quotationSchema>;

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const updateScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setScrollDir("down");
      } else if (currentY < lastY) {
        setScrollDir("up");
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return scrollDir;
};

export const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
export const imageVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
