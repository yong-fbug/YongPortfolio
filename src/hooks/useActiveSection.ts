// import { useEffect, useState } from "react";

// export const useActiveSection = (sectionIds: string[]) => {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (visible.length > 0) {
//           setActive(visible[0].target.id);
//         }
//       },
//       {
//         rootMargin: "-50% 0px -50% 0px",
//         threshold: 0.3,
//       }
//     );

//     sectionIds.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [sectionIds]);

//   return { active, setActiveManually: setActive };
// };
