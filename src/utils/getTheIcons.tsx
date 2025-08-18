import { techIcons } from "../features/projects/data/techIcon";

export const getTheIcons = (name: string) => {
  const tech = techIcons.find(
    (t) => t.name.toLowerCase() === name.toLowerCase()
  );
  if (!tech) {
    return <span>{name}</span>; //or ;
  }
  const IconComponent = tech?.icon;
  return <IconComponent className={tech.className} />;
};
