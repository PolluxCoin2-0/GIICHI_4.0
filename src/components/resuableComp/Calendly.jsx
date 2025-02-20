import { useEffect } from 'react';

const CalendlyButton = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // Initialize the Calendly widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/priyanshu_pollux/30min',
      });
    }
    return false;
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button onClick={handleClick} className='text-white focus:outline-none' aria-label="Schedule a free demo" type="button" title="Click to Schedule a demo">
        <p className="text-white text-sm lg:text-lg font-medium text-nowrap bg-darkGreen px-4 py-1 rounded-lg mt-4">
         Schedule a Free Demo
        </p>
      </button>
    </>
  );
};

export default CalendlyButton;
