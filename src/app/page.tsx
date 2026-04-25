// @ts-nocheck
"use client"
import { order } from "@/data/pages";
import { useEffect, useRef, useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

const urls = [
  "/organic-virgin-coconut-oil",
  "/infused-virgin-coconut-oil",
  "/organic-coconut-chips",
  "/organic-coconut-sugar",
  "/organic-coconut-puree",
  "/coconut-chocolate-spread",
  "/organic-coconut-syrup",
  "/organic-coconut-flour",
  "/organic-coconut-water-vinegar",
  "/organic-desiccated-coconut",
  "/organic-coconut-milk"
];

const Home: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const backParam = searchParams?.get('back');

  const [isAnyEvent, setIsAnyEvent] = useState(3);
  const [eventCount, setEventCount] = useState(1);

  const productRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const scrollContainerRef = useRef<any>(null);

  const handleEvent = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    if (imageRef?.current?.classList.contains('slow-come') && event?.type != "click") {
      let pick = localStorage.getItem("lastPage");
      const number = pick == null ? 0 : (order.indexOf(pick) + 1) % order.length;
      throttledClickManually(urls[number]);
    }

    if (productRef.current && imageRef.current && !imageRef.current.classList.contains('slow-come')) {
      if (!productRef.current.classList.contains('slow-disappear')) {
        productRef.current.classList.add('slow-disappear');
        setTimeout(() => {
          productRef.current?.classList.add('display-none');
        }, 1000);
        setTimeout(() => {
          imageRef.current?.classList.remove('display-none');
          imageRef.current?.classList.add('slow-come');
        }, 500);
      }
    }
  };

  const clickManually = (dataUrl: string) => {
    const selector = `.marker[data-url='${dataUrl}']`;
    const element: any = document.querySelector(selector);
    if (element) {
      element.click();
    } else {
      console.log("No element found with data-url:", dataUrl);
    }
  };

  const throttledClickManually = throttle(clickManually, 4000);

  const onBackCame = () => {
    const data_url = "/" + localStorage.getItem('lastPage');
    const image = document.querySelector(`div[data-url="${data_url}"]`);
    const imageWrapper = document.querySelector('.image-collection');
    const topContainer = document.querySelector('.top-container');
    const treeImage = document.querySelector(".treeImg");
    const product = document.querySelector(".product");
    const leftContainer = document.querySelectorAll('.landing-right')[0];

    topContainer.style.display = 'flex';
    product.style.display = 'none';
    leftContainer.style.display = 'none';
    imageWrapper.style.display = 'none';
    treeImage?.classList.remove("bigImg");
    image?.classList.remove("zoom-in");
    treeImage?.classList.remove("smallToBigImg");
    treeImage?.classList.add("smallToBigImg");
    image?.classList.add("zoom-in");

    // Reset all marker images that were hidden/animated during onMarkerClick
    document.querySelectorAll('.marker img').forEach((img: any) => {
      img.style.display = '';
      img.style.zIndex = '';
      img.classList.remove('zoom-out');
      img.classList.remove('initial-zoom');
    });
    document.querySelectorAll('.marker').forEach((m: any) => {
      m.classList.remove('zoom-in');
      m.classList.remove('initial-zoom');
    });
    imageWrapper?.classList.remove('initial-zoom');

    setTimeout(() => {
      leftContainer.style.display = 'flex';
      imageWrapper.style.display = 'flex';
    }, 1400);
  };

  const onMarkerClick = (event: any, url: any, markerEl?: any) => {
    event.preventDefault();
    const marker = markerEl || event.currentTarget;
    document.querySelectorAll('.marker img').forEach((img: any) => {
      img.style.display = 'none';
      img.classList.remove('initial-zoom');
    });
    const parentContainer = marker.closest('.relative');
    const leftContainer = document.querySelectorAll('.landing-right')[0];
    leftContainer.style.display = 'none';

    const imageTree = parentContainer.querySelector('.treeImg');
    const imageWrapper = parentContainer.querySelector('.image-collection');
    imageWrapper.classList.remove('initial-zoom');
    imageTree.classList.remove('smallToBigImg');
    imageTree.classList.remove('initial-zoom');

    const img = marker.querySelector('img');
    img.style.display = 'block';
    img.style.zIndex = 1000;
    img.classList.add('zoom-out');
    imageWrapper.classList.add('initial-zoom');
    imageTree.classList.add('initial-zoom');

    setTimeout(() => {
      router.push(url);
    }, 700);
  };

  useEffect(() => {
    if (backParam && backParam === 'true') {
      setIsAnyEvent(1);
      handleEvent(null);
      onBackCame();
    } else {
      if (isAnyEvent === 3) {
        setIsAnyEvent(2);
      }
    }

    const scrollContainer = scrollContainerRef?.current;

    const handleScroll = throttle((event: any) => {
      handleEvent(event);
    }, 2000);

    const handleMarkerDelegate = (event: any) => {
      const marker = event.target.closest('.marker');
      if (marker) {
        const url = marker.getAttribute('data-url');
        if (url) {
          event.stopPropagation();
          onMarkerClick(event, url, marker);
        }
      }
    };

    document.addEventListener('click', handleMarkerDelegate, true);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('click', handleEvent);

    // ── Mobile: auto-reveal markers & swipe support ──────────────────────────
    const isMobile = window.innerWidth <= 1024;

    if (isMobile && (!backParam || backParam !== 'true')) {
      // On mobile the product overlay is hidden via CSS; skip straight to
      // the markers view by triggering the same transition the scroll uses.
      setTimeout(() => {
        handleEvent(null);
      }, 400);
    }

    let touchStartY = 0;
    const handleTouchStart = (e: any) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = throttle((e: any) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) > 50) {
        handleEvent(null);
      }
    }, 2000);

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    // ─────────────────────────────────────────────────────────────────────────

    // ── Dynamic tree height ──────────────────────────────────────────────────
    const applyTreeHeight = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (vw <= 1024) {
        document.documentElement.style.setProperty('--tree-height', calcTreeHeight(vw, vh));
      } else {
        document.documentElement.style.removeProperty('--tree-height');
      }
    };
    applyTreeHeight();
    window.addEventListener('resize', applyTreeHeight);
    // ─────────────────────────────────────────────────────────────────────────

    const currentUrl = new URL(window.location.href);
    const topContainer = document.querySelector('.top-container');
    topContainer.style.display = 'flex';
    currentUrl.searchParams.set('back', 'true');
    router.replace(currentUrl.toString(), undefined, { shallow: true }); // Use router.replace to update the URL

    const handlePopState = () => {
      router.replace('/'); // Redirect to home route on back button press
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleMarkerDelegate, true);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('click', handleEvent);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', applyTreeHeight);
    };
  }, [handleEvent, onBackCame]);

  return (
    <>
      <div style={{ overflow: "hidden" }} className="top-container flex z-0 hidden" ref={scrollContainerRef}>
        <div className="landing-left flex items-center">
          <div className="flex relative">
            <img loading="lazy" className="treeImg" width="95%" src="/images/NewChanges/new-landing-image.png" alt="Descriptive Alt Text" />
            <div className="image-collection display-none" ref={imageRef}>
              <div data-url="/organic-coconut-water-vinegar" className="marker" style={{ top: '15%', left: '42%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Water Vinegar.png" width="86px" /></div>
              <div data-url="/organic-coconut-syrup" className="marker" style={{ top: '15%', left: '64%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Syrup.png" width="86px" /></div>
              <div data-url="/organic-coconut-chips" className="marker" style={{ top: '30%', left: '10%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Chips.png" width="86px" /></div>
              <div data-url="/organic-coconut-puree" className="marker" style={{ top: '30%', left: '32%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Puree.png" width="86px" /></div>
              <div data-url="/organic-coconut-flour" className="marker" style={{ top: '30%', left: '53%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Flour.png" width="86px" /></div>
              <div data-url="/organic-coconut-sugar" className="marker" style={{ top: '50%', left: '15%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Sugar.png" width="86px" /></div>
              <div data-url="/organic-desiccated-coconut" className="marker" style={{ top: '50%', left: '40%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Desiccated Coconut.png" width="86px" /></div>
              <div data-url="/organic-coconut-milk" className="marker" style={{ top: '50%', left: '70%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Coconut Milk.png" width="86px" /></div>
              <div data-url="/organic-virgin-coconut-oil" className="marker" style={{ top: '65%', left: '55%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Organic Virgin Coconut Oil.png" width="86px" /></div>
              <div data-url="/infused-virgin-coconut-oil" className="marker" style={{ top: '75%', left: '30%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Infused Virgin Coconut Oil.png" width="86px" /></div>
              <div data-url="/coconut-chocolate-spread" className="marker" style={{ top: '75%', left: '70%' }}><img loading="lazy" src="/v2-icons/Cropped Transparent Location Icons/Coconut Chocolate Spread.png" width="86px" /></div>
            </div>
            <div className="product" ref={productRef}>
              <img loading="lazy" className="absolute" style={{ bottom: '-33%', left: '-5%' }} width="100%" src="/images/home1/About us Pages-05.png" alt="Descriptive Alt Text" />
              <img loading="lazy" className="absolute" style={{ bottom: '-35%', left: '55%', transform: 'scale(0.65)' }} width="100%" src="/images/home1/About us Pages-07.png" alt="Descriptive Alt Text" />
            </div>
            {/* <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <button
                className="text-white py-2 px-6 rounded-full shadow-lg animate-bounce relative"
                style={{
                  animation: "bounce 1s infinite",
                  background: "linear-gradient(90deg, rgba(34,139,34,1) 0%, rgba(34,139,34,1) 0%, rgba(144,238,144,1) 100%)", // Green coconut-related gradient
                }}
              >
                <marquee scrollamount="3" behavior="scroll">Click here for instructions!</marquee>
              </button>
            </div> */}
          </div>
        </div>
        <div className="landing-right flex justify-center items-center">
          <div className="right-col-inner">
            {/* Compass + tagline share a row on mobile */}
            <div className="right-top-row">
              <div className="flip-container">
                <div className="flipper">
                  <img loading="lazy" src="/images/home1/only compass-01 (1).png" alt="Compass" className="front" />
                  <img loading="lazy" src="/images/home1/only compass-02 (2).png" alt="Compass" className="back" />
                </div>
              </div>
              <h2 className="home-tagline">
                Truly Naturally<br />Tropical Goodness
              </h2>
            </div>
            <img loading="lazy" className="all-products-img" src="/v2-icons/All products in one.png" alt="All Tropcey Products" />
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * Computes the ideal tree-image height as a vh string from the current
 * viewport, so it adapts across all screen sizes and aspect ratios.
 *
 * Tablet side-by-side layout (769–1024 px wide):
 *   – More portrait  → more tree height (up to 68 vh)
 *   – More landscape → less tree height (down to 44 vh)
 *   Formula: clamp(44, 72 − ar × 24, 68)
 *
 * Mobile stacked layout (≤ 768 px wide):
 *   – Reserve (nav + gap + right-section) in px.
 *   – Right-section min = compass + tagline + expected products-image height.
 *   – Products image is width-capped at 520 px; aspect ratio ≈ 3.5 : 1.
 *   Formula: clamp(36, (vh − reserved) / vh × 100, 62)
 */
function calcTreeHeight(vw: number, vh: number): string {
  // Wide landscape tablets (aspect > 6:5) keep the side-by-side layout.
  // Narrow / near-square / portrait viewports stack, same as phones.
  const ar = vw / vh;
  if (vw > 768 && ar > 1.2) {
    // Tablet landscape — columns sit side-by-side
    const pct = Math.round(Math.max(44, Math.min(68, 72 - ar * 24)));
    return `${pct}vh`;
  }

  // Stacked layout — columns stack vertically
  const navPx      = 88;   // top padding that clears the nav bar
  const gapPx      = 10;   // gap between tree section and right section

  // Products image is capped at 520 px wide (see CSS), aspect ≈ 3.5:1
  const prodImgW   = Math.min(vw - 24, 520);
  const prodImgH   = Math.round(prodImgW / 3.5);   // expected rendered height

  // Right section minimum: compass + tagline + gap + products-image + bottom margin
  const compassH   = vw > 480 ? 90 : 76;           // matches CSS breakpoints
  const taglineH   = 50;
  const innerGap   = 12;
  const bottomPad  = 40;                            // bottom:32px + breathing room
  const minRightPx = compassH + taglineH + innerGap + prodImgH + bottomPad;

  const treePx = vh - navPx - gapPx - minRightPx;
  const pct    = (treePx / vh) * 100;
  // Give narrow phones (< 500 px wide) a 4 vh boost
  const boost  = vw < 500 ? 4 : 0;
  return `${Math.round(Math.max(36, Math.min(66, pct + boost)))}vh`;
}

function throttle(func: any, limit: number) {
  let lastRan: any;
  let lastFunc: any;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if ((Date.now() - lastRan) >= limit) {
        func.apply(context, args);
        lastRan = Date.now();
      }
    }
  };
}

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
