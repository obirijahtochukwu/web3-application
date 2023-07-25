import * as React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import styles from "./faq.module.scss";
import { Layout } from 'components/sharedLayout';
import { faqs } from "./mockData";
import {Faq} from './Faq'


export const Faqs = () => {
  const [showFaq, setShowFaq] = React.useState('')
const props = {showFaq, setShowFaq, faqs}
  return (
    <Layout>

    <main>
    <div className={styles.title}>Frequently Asked Questions</div>
    <div className={styles.text}>The key to creating an effective FAQ page is to anticipate the questions your customers or users may have and provide clear and concise answers.</div>

    <article className={styles.faqs}>
      {faqs.map(({title, description}, index)=>{
        const data = {title, description}
       return (
<Faq {...props} {...data} />)
      })}
    </article>


    </main>
    </Layout>
  );};
