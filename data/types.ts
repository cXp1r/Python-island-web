export interface Contributor {
  id: string;
  name: string;
  nameEn: string;
  dockLabel: string;
  email: string;
  bio: string;
  traits: { icon: string; label: string; desc: string }[];
  skills: { label: string }[];
}
