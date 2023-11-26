import React from "react";
import styles from "../Styles/Contact.module.css"

export default function Contact(){
    return(
        <div className={styles.Contact}>
                
               <div className={styles.top}>
               <ul className={styles.careersAnd}>
                <li>
                <a href="https://github.com/CheemaMahesh" className={styles.careers}>
                            Careers
                    </a>

                </li>
                <li>
                <a href="https://github.com/CheemaMahesh" className={styles.careers}>
                        Become supplier
                    </a>
                </li>
                <li>
                <a href="https://github.com/CheemaMahesh" className={styles.careers}>
                        Hall of fame
                    </a>

                </li>
                <li>
                <a href="https://github.com/CheemaMahesh" className={styles.careers}>
                        Sitemap
                    </a>
                </li>

                    
                    
                   
                   
                </ul>

                <div className={styles.legalAnd}>
                        <a  href="https://github.com/CheemaMahesh" className={styles.legal}>Legal and Policies</a>
                        <a  href="https://github.com/CheemaMahesh" className={styles.legal}>BusyBuy tech blog</a>
                        <a href="https://github.com/CheemaMahesh" className={styles.legal}>Notices and Returns</a>
                </div>
                <div className={styles.reachOut}>
                        <a href="fb.com" className={styles.reach}> </a>
                        <a href="https://www.youtube.com/channel/UCczh7v2Ua8dze9PxrX5Y7EQ" className={styles.reachy}> </a>
                        <a href="https://github.com/CheemaMahesh" className={styles.reachg}> </a>
                        <a href="https://www.linkedin.com/in/mahesh-cheema-a7b771271/" className={styles.reachl}> </a>

                </div>
                <div className={styles.contactUs}>
                        <div className={styles.contactus}>Contact Us</div>
                        <div className={styles.contactusi}>BusyBuy Technologies Private Limited,<br className={styles.brT}/>
                                                                    CIN: U74900KA2015PTC082263<br className={styles.brT}/>
                                                                    No. 78/9, KVP road, Annamayya(Dis), T.Sundupalli(M), <br className={styles.brT}/>
                                                                    Rayavaram-516129, Andhra Pradesh, India<br className={styles.brT}/>
                                                                    E-mail address: maheshbabucheema789@gmail.com.com © 2015-2023
                                                                    {/* <br className={styles.brT}/> */}
                                                                     </div>
                </div>
                <div className={styles.mobileApps}>
                    <div className={styles.mAHeading}>Shop Non-Stop on BusyBuy</div>
                    <div className={styles.mAQuote}>Trusted by more than 1 Crore Indians
Cash on Delivery | Free Delivery</div>
                    <div className={styles.mASymbols}>
                        <div className={styles.getItOnPlaystore}></div>
                        <div className={styles.getItOnApplestore}></div>
                    </div>
                </div>
               </div>
               {/* =================================bottom================================================ */}
               <div className={styles.bottom}>
                                <div className={styles.moreOnBusyBuyH}>
                                       &emsp; <u>More about BusyBuy</u>
                                </div>
                                <br/>
                                <div className={styles.moreOnBusyBuySH}>
                                       &emsp; BusyBuy: Affordable Online Shopping at Your Fingertips
                                </div>
                                <div className={styles.moreOnBusyBuySHP}>
                                There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with BusyBuy, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.
                                </div>
                                <br/>
                                <div className={styles.moreOnBusyBuySH}>
                                       &emsp; A Huge Selection of Products Across All Categories
                                </div>
                                <div className={styles.moreOnBusyBuySHP}>
                                We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, BusyBuy is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.                                </div>
               </div>
        </div>
    )
}