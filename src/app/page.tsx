// @ts-nocheck
"use client"
import { order } from "@/data/pages";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

const urls = [
  "/oil",
  "/chips",
  "/spread",
  "/dessicated",
  "/milk",
  "/treacle",
  "/sugar",
  "/flour",
  "/vinegar"
]

const Home: React.FC = () => {
  const searchParams = useSearchParams();
  const backParam = searchParams?.get('back');

  const [isAnyEvent, setIsAnyEvent] = useState(3);
  const [eventCount, setEventCount] = useState(1);

  const productRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const scrollContainerRef = useRef<any>(null);

  const handleEvent = (event: any) => {
    console.log('handle event')
    if (event) {
      event.preventDefault();
    }
    if (imageRef?.current?.classList.contains('slow-come') && event?.type != "click") {
      let pick = localStorage.getItem("lastPage")
      const number = pick == null ? 0 : (order.indexOf(pick) + 1) % order.length
      clickManually(urls[number])
    }

    if (productRef.current && !imageRef.current.classList.contains('slow-come')) {
      if (!productRef.current.classList.contains('slow-disappear')) {
        productRef.current.classList.add('slow-disappear');
        setTimeout(() => {
          productRef.current.classList.add('display-none');
        }, 1000)
        setTimeout(() => {
          imageRef.current.classList.remove('display-none');
          imageRef.current.classList.add('slow-come');
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

  const onBackCame = () => {
    const data_url = "/" + localStorage.getItem('lastPage');
    const image = document.querySelector(`div[data-url="${data_url}"]`);
    const imageWrapper = document.querySelector('.image-collection');
    const topContainer = document.querySelector('.top-container');
    const treeImage = document.querySelector(".treeImg");
    const product = document.querySelector(".product");
    const leftContainer = document.querySelectorAll('.landing-right')[0];

    topContainer.style.display = 'flex'
    product.style.display = 'none'
    leftContainer.style.display = 'none'
    imageWrapper.style.display = 'none'
    treeImage?.classList.remove("bigImg")
    image?.classList.remove("zoom-in")
    treeImage?.classList.remove("smallToBigImg")
    treeImage?.classList.add("smallToBigImg")
    image?.classList.add("zoom-in")

    setTimeout(() => {
      leftContainer.style.display = 'flex'
      imageWrapper.style.display = 'flex'
    }, 1400);
  }

  useEffect(() => {
    if (backParam && backParam === 'true') {
      setIsAnyEvent(1);
      handleEvent(null)
      onBackCame()
    } else {
      if (isAnyEvent == 3) {
        setIsAnyEvent(2);
      }
    }

    const scrollContainer = scrollContainerRef?.current;

    const handleScroll = throttle((event: any) => {
      handleEvent(event)
    }, 2000);

    if (scrollContainer) {
      scrollContainer?.addEventListener('wheel', handleScroll);
    }

    const onMarkerClick = (event: any, url: any) => {
      event.preventDefault();
      document.querySelectorAll('.marker img').forEach((img: any) => {
        img.style.display = 'none';
        img.classList.remove('initial-zoom');
      });

      const parentContainer = event.currentTarget.closest('.relative');
      const leftContainer = document.querySelectorAll('.landing-right')[0];
      leftContainer.style.display = 'none'

      const imageTree = parentContainer.querySelector('.treeImg');
      const imageWrapper = parentContainer.querySelector('.image-collection');
      imageWrapper.classList.remove('initial-zoom');
      imageTree.classList.remove('smallToBigImg');
      imageTree.classList.remove('initial-zoom');

      const img = event.currentTarget.querySelector('img');
      img.style.display = 'block';
      img.style.zIndex = 1000;
      img.classList.add('zoom-out');
      imageWrapper.classList.add('initial-zoom');
      imageTree.classList.add('initial-zoom');

      setTimeout(() => {
        window.location.href = url;
      }, 900);
    }

    document.querySelectorAll('.marker').forEach(marker => {
      const url = marker.getAttribute('data-url');
      marker.addEventListener('click', (event) => onMarkerClick(event, url));
    });

    window.addEventListener('scroll', handleEvent);
    window.addEventListener('click', handleEvent);

    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', handleScroll);
    }

    const currentUrl = new URL(window.location.href);
    const topContainer = document.querySelector('.top-container');
    topContainer.style.display = 'flex'
    currentUrl.searchParams.set('back', 'true');
    window.history.replaceState({ ...window.history.state, path: currentUrl.toString() }, '', currentUrl.toString());

    return () => {
      document.querySelectorAll('.marker').forEach((marker: any) => {
        marker.removeEventListener('click', onMarkerClick);
      });

      window.removeEventListener('scroll', handleEvent);
      window.removeEventListener('click', handleEvent);
    };
  }, [handleEvent, onBackCame]);


  return (
    <>
      <div style={{ overflow: "hidden" }} className="top-container flex z-0 hidden" ref={scrollContainerRef}>
        <div className="landing-left flex items-center">
          <div className="flex relative">
            <img className="treeImg" width="95%" src="/images/NewChanges/new-landing-image.png" alt="Descriptive Alt Text" />
            <div className="image-collection display-none" ref={imageRef}>
              <div data-url="/vinegar" className="marker" style={{ width: "155px", top: '15%', left: '42%' }}><img src="/images/land/About us Pages-03.png" width="180px" height="180px" /></div>
              <div data-url="/treacle" className="marker" style={{ top: '15%', left: '64%' }}><img src="/images/land/About us Pages-04.png" width="150px" height="150px" /></div>
              <div data-url="/chips" className="marker" style={{ top: '30%', left: '10%' }}><img src="/images/land/About us Pages-05.png" width="150px" height="150px" /></div>
              <div data-url="/spread" className="marker" style={{ top: '30%', left: '32%' }}><img src="/images/land/About us Pages-09.png" width="150px" height="150px" /></div>
              <div data-url="/flour" className="marker" style={{ top: '30%', left: '53%' }}><img src="/images/land/About us Pages-11.png" width="150px" height="150px" /></div>
              <div data-url="/sugar" className="marker" style={{ top: '50%', left: '15%' }}><img src="/images/land/About us Pages-06.png" width="150px" height="150px" /></div>
              <div data-url="/dessicated" className="marker" style={{ top: '50%', left: '40%' }}><img src="/images/land/About us Pages-08.png" width="150px" height="150px" /></div>
              <div data-url="/milk" className="marker" style={{ top: '50%', left: '70%' }}><img src="/images/land/About us Pages-10.png" width="150px" height="150px" /></div>
              <div data-url="/oil" className="marker" style={{ top: '65%', left: '55%' }}><img src="/images/land/About us Pages-07.png" width="90px" height="90px" /></div>
            </div>
            <div className="product" ref={productRef}>
              <img className="absolute" style={{ bottom: '-33%', left: '-5%' }} width="100%" src="/images/home1/About us Pages-05.png" alt="Descriptive Alt Text" />
              <img className="absolute" style={{ bottom: '-35%', left: '55%', transform: 'scale(0.65)' }} width="100%" src="/images/home1/About us Pages-07.png" alt="Descriptive Alt Text" />
            </div>
            
          </div>
        </div>
        <div className="landing-right flex justify-center items-center">
          <div className=" mb-[200px]">
            <img className="" style={{ margin: 'auto' }} width="50%" src="/images/home1/About us Pages-10.png" alt="Descriptive Alt Text" />
            <img className="" style={{ top: '50%' }} width="100%" src="/images/home1/About us Pages-09.png" alt="Descriptive Alt Text" />
          </div>
        </div>
      </div>
    </>
  );
}

function throttle(func: any, limit: number) {
  let lastRan: any;
  let lastFunc: any;
  let busy = true;
  if (busy) {
    busy = false;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
          busy = true;
        }
      }
    };
  }
}

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
