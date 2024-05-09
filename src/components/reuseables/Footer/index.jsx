import style from "./index.module.css"
const Footer = ()=>{
    return(
        <div className={style.footer}>
            <div className={style.contact}>
                <p>Contact</p>
                <p>Menu</p>
                <p>Recent Posts</p>
            </div>
            <div className={style.footerBody}>
            <div className={style.contactBody}>
                <p>Street: 2017 Harron Drive
                <span>City: Balmore</span>
                    <span>State: Full Maryland</span>
                    <span>Zip Code: 21201</span>
                    <span>Phone Number: 09071272729</span>
                </p>
            </div>
            <div>
                <p>Home</p>
                <p>Our Blog</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Books</p>
            </div>
            <div >
                <p>Breaking Down barriers</p>
                <p>A celebration Of Success</p>
                <p>A World Of Opportunities</p>
            </div>
            </div>
        </div>
    )
}
export default Footer