// Source de la vidéo du hero, sur la page d'accueil.
//
// OPTION A — vidéo locale (par défaut) :
//   1. Dépose ton fichier vidéo dans le dossier /public du projet
//   2. Renomme-le "hero-video.mp4" (ou change le nom ci-dessous)
//   Le fichier sera servi directement par Vite/Vercel, aucune config de plus.
//
// OPTION B — vidéo hébergée ailleurs (Cloudinary, Bunny, ton propre CDN...) :
//   1. Colle l'URL directe du fichier .mp4 dans un fichier .env à la racine :
//        VITE_HERO_VIDEO_URL=https://exemple.com/ma-video.mp4
//   2. Redémarre `npm run dev` après avoir créé/modifié le .env
//   Si cette variable est définie, elle prend automatiquement le dessus sur le fichier local.
//
// Important : ça doit être un lien DIRECT vers un fichier .mp4 (pas une page YouTube/TikTok,
// la balise <video> ne peut pas lire ça).

export const HERO_VIDEO_SRC = import.meta.env.VITE_HERO_VIDEO_URL || '/hero-video.mp4'
