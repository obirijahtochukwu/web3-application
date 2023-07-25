import React, { useState } from 'react'
import styles from './index.module.scss'

//   interface Types {
//     y: any
// }

export const UserDetailsComponent = ({})=> {

  const [bid, setBid] = useState(false)

  const impressions = [
    {icon: '/media/auction/eye.svg', text: '25,535'},
    {icon: '/media/auction/heart.svg', text: '150'},
  ]

  const bids = [
    {text: 'Last Bid', num: '0 EGLD'},
    {text: 'Next Bid', num: '0.1 EGLD'},
    {text: 'Bid Step', num: '0.01 EGLD'},
  ]

  const dates = [
    {time: '10', title: 'Days'},
    {time: '12', title: 'Hrs'},
    {time: '45', title: 'Min'},
    {time: '20 ', title: 'Sec'},
  ]

  return (
    <div className={styles.UserDetailsComponent}>
      <img src="/media/auction/Rectangle 56.svg" alt='' className={styles.userImg} />
      <div className={styles.aside}>
        <div className={styles.title}>Origin: earth #40</div>
        <aside>
        <div className={styles.impressions}>
          {impressions.map(({text,icon})=>{
            return (
              <div className={styles.impression}>
                <img src={icon} alt="" />
                <div className="">{text}</div>
              </div>
            )
          })}
        </div>

        <div className={styles.text}>Burebista called upon Zalmoxis to send his champions, the Exalted, back to earth. The strongest of them were sent first. Theirs are the Origin Souls. Characters made from these Origin Souls will have benefits based on these elements.</div>
        </aside>

        <article className={styles.details}>
          <div className={styles.account}>
            <div className={styles.balance}>
              <div className={styles.balanceText}>Balance: </div>
               <div className={styles.balanceNum}> 57.9889 EGLD</div>
            </div>
            <div className={styles.bids}>
              {bids.map(({text, num})=>{
                return (
                  <div className={styles.bid}>
                    <div className={styles.balanceText}>{text}</div>
                    <div className={styles.balanceNum}>{num}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.barImg} />
          
        {!bid ?   <section className="">
            <div className={styles.balanceText}>Auction Ends In</div>

            <div className={styles.dates}>
              {dates.map(({title, time})=>{
                return (
                  <div className={styles.date}>
                    <div className={styles.dateTitle}>{time}</div>
                    <div className={styles.dateText}>{title}</div>
                  </div>
                )
              })}
            </div>

            <div onClick={()=> setBid(true)} className={styles.bidBtn}>Place a Bid</div>
          </section> :
          <div className={styles.bided}>Auction Ended</div>}
        </article>
      </div>
    </div>
  )
}

export const RelatedProductsComponent = ({})=> {

  const products = [
    {name:'Bored Ape Yacht Club',price:'0.01 EGLD', time: '3h:30m:24s', img:'/media/auction/Rectangle 18 (3).svg'},
    {name:'Bored Ape Yacht Club',price:'0.01 EGLD', time: '3h:30m:24s', img:'/media/auction/Rectangle 18 (2).svg'},
    {name:'Bored Ape Yacht Club',price:'0.01 EGLD', time: '3h:30m:24s', img:'/media/auction/Rectangle 18 (1).svg'},
    {name:'Bored Ape Yacht Club',price:'0.01 EGLD', time: '3h:30m:24s', img:'/media/auction/Rectangle 18.svg'},
  ]

  return (
    <div className={styles.RelatedProductsComponent}>
     <div className={styles.header}>
      <div className={''}>Related Products</div>


      <img src="/media/auction/Group 70482.svg" alt="" style={{marginLeft: 'auto', cursor: 'pointer'}} />
      <img src="/media/auction/Group 70482.svg" alt="" style={{transform: 'rotate(180deg)', cursor: 'pointer'}} />
     </div>

     <main className={styles.products}>
      {products.map(({name,img,price, time
      })=>{
        return (
          <div style={{backgroundImage: `url('${img}')`}} className={styles.product}>
            <div className={styles.productTime}>{time}</div>
            <div className={styles.productName}>{name}</div>
            <div className={styles.productPrice}>{price}</div>
          </div>
        )
      })}
     </main>
    </div>
  )
}
