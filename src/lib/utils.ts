import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// example link: https://drive.google.com/file/d/1tclDLAw2J8Gmj5-m1pITi60P6ePgOkRD/view?usp=drive_link
// example thumbnail: https://drive.google.com/thumbnail?id=1tclDLAw2J8Gmj5-m1pITi60P6ePgOkRD&sz=1000
export function toThumbnail(url: string) {
  const splits = url.split("/");
  const fileId = splits[splits.length - 2];
  const thumbnailUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  return thumbnailUrl;
}
