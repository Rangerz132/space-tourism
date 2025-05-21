import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const timelime = gsap.timeline();

    timelime
      .set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
      })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 100,
        stagger: 0.2,
      });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const timelime = gsap.timeline();

    timelime
      .set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100,
      })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          router.push(href);
        },
      });
  }
};

export const animatePageBackground = () => {
  const backgrounds = document.getElementsByClassName("bg");
  if (!backgrounds.length) return;

  const background = backgrounds[0];

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.1) * 100;
    const y = (e.clientY / window.innerHeight - 0.1) * 100;

    gsap.to(background, {
      backgroundPosition: `${5 + x * 0.1}% ${5 + y * 0.1}%`,
      duration: 2,
      ease: "power2.out",
    });
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
};
