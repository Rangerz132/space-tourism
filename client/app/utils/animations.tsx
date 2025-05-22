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

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.1) * 100;
    const y = (e.clientY / window.innerHeight - 0.1) * 100;

    gsap.to(backgrounds, {
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

export const animateInVerticalElement = (
  query: string,
  duration: number,
  delay: number
): Promise<void> => {
  return new Promise((resolve) => {
    const elements = gsap.utils.toArray<HTMLElement>(query);
    const totalDuration = duration;
    const totalDelayWindow = delay;
    const step = totalDelayWindow / elements.length;

    const tl = gsap.timeline({ onComplete: resolve });

    elements.forEach((element, index) => {
      const delay = index * step;
      const individualDuration = totalDuration - delay;

      tl.fromTo(
        element,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: individualDuration,
          ease: "power2.out",
        },
        delay
      );
    });
  });
};

export const animateOutVerticalElement = (
  query: string,
  duration: number,
  delay: number
): Promise<void> => {
  return new Promise((resolve) => {
    const elements = gsap.utils.toArray<HTMLElement>(query);
    const totalDuration = duration;
    const totalDelayWindow = delay;
    const step = totalDelayWindow / elements.length;

    const tl = gsap.timeline({ onComplete: resolve });

    elements.forEach((element, index) => {
      const delay = index * step;
      const individualDuration = totalDuration - delay;

      tl.fromTo(
        element,
        { y: 0, opacity: 1 },
        {
          y: -20,
          opacity: 0,
          duration: individualDuration,
          ease: "power2.out",
        },
        delay
      );
    });
  });
};

export const animateInHorizontalElement = (
  query: string,
  duration: number,
  delay: number
): Promise<void> => {
  return new Promise((resolve) => {
    const elements = gsap.utils.toArray<HTMLElement>(query);
    const totalDuration = duration;
    const totalDelayWindow = delay;
    const step = totalDelayWindow / elements.length;

    const tl = gsap.timeline({ onComplete: resolve });

    elements.forEach((element, index) => {
      const delay = index * step;
      const individualDuration = totalDuration - delay;

      tl.fromTo(
        element,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: individualDuration,
          ease: "power2.out",
        },
        delay
      );
    });
  });
};

export const animateInVerticalSwipeElement = (
  query: string,
  duration: number,
  delay: number
): Promise<void> => {
  return new Promise((resolve) => {
    const elements = gsap.utils.toArray<HTMLElement>(query);
    const totalDuration = duration;
    const totalDelayWindow = delay;
    const step = totalDelayWindow / elements.length;

    const tl = gsap.timeline({ onComplete: resolve });

    elements.forEach((element, index) => {
      const delay = index * step;
      const individualDuration = totalDuration - delay;

      tl.fromTo(
        element,
        { height: 0 },
        {
          height: "100%",
          duration: individualDuration,
          ease: "power2.out",
        },
        delay
      );
    });
  });
};

export const animateOutVerticalSwipeElement = (
  query: string,
  duration: number,
  delay: number
): Promise<void> => {
  return new Promise((resolve) => {
    const elements = gsap.utils.toArray<HTMLElement>(query);
    const totalDuration = duration;
    const totalDelayWindow = delay;
    const step = totalDelayWindow / elements.length;

    const tl = gsap.timeline({ onComplete: resolve });

    elements.forEach((element, index) => {
      const delay = index * step;
      const individualDuration = totalDuration - delay;

      tl.fromTo(
        element,
        { height: "100%" },
        {
          height: 0,
          duration: individualDuration,
          ease: "power2.out",
        },
        delay
      );
    });
  });
};
