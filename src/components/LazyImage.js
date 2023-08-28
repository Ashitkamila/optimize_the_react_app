import React, { useState, useRef, useEffect } from "react";

const LazyImage = (props) => {
  console.log("allprops", props);
  const ref = useRef();
  const [inView, setinView] = useState(false);

  let callback = (entries, observe) => {
    entries.forEach((entry) => {
      console.log("entry", entry);
      if (entry.isIntersecting) {
        setinView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      //   if (ref?.current) {
      //     observer.unobserve(ref.current);
      //   }
      observer.disconnect();
    };
  }, []);
  return inView ? (
    <div>
      <img {...props} />
    </div>
  ) : (
    <div>
      <img
        ref={ref}
        alt="imageOfGal"
        height="500px"
        width="500px"
        style={{ backgroundColor: "#ddd" }}
      />
    </div>
  );
};

export default LazyImage;
