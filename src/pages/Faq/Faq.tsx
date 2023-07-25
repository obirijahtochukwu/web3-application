import * as React from 'react';
import styles from "./faq.module.scss";
// import { Interface } from 'readline';

interface Types {
  title: string, description:any, showFaq:any, setShowFaq: any
}

export const Faq: React.FC<Types> = ({title, description, showFaq, setShowFaq})=> {

  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<any>(0);

  // THIS USEFFECT IS USED TO GET DIV HEIGHT
  React.useEffect(() => {
    setHeight(ref.current?.scrollHeight);
    window.addEventListener("resize", () => {
      setHeight(ref.current?.scrollHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setHeight(0);
      });
    };
  }, []);


  return (
    <main className={`${styles.faq} ${showFaq === title ? styles.show : ''}`}>
          <div className="d-flex justify-content-between align-items-center">

      <div className={`${styles.faqTitle} ${showFaq === title ? styles.show : ''}`}>{title}</div>
      {showFaq === title ? 
        <img onClick={() => {
          showFaq !== title
            ? setShowFaq(title)
            : setShowFaq("");
        }} src="/media/faqs/Line 3.svg" alt="" style={{cursor: 'pointer'}} /> :        
        <img onClick={() => {
          showFaq !== title
          ? setShowFaq(title)
          : setShowFaq("");
        }} src="/media/faqs/download (5) 1.svg" alt="" style={{cursor: 'pointer'}} />         
      }
        </div>

      <div ref={ref} style={{height: showFaq === title ? `${height}px` : "0px",}} className={styles.description}>
        <img style={{height: `${height - 5}px`}} src="/media/faqs/Line 4.svg" alt="" className='' />
        <div className="">{description}</div>
      </div>
    </main>
  );};
