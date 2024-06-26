import * as style from "@style/home/main.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Deleted after API approval
export default function Overlay({ setIsClose }) {
  return (
    <div className={style.overlay_container}>
      <div className={style.notice_wrapper}>
        <IoIosCloseCircleOutline
          onClick={() => setIsClose(pre => !pre)}
          className={style.close_icon}
        />
        <span className={style.overlay_title}>Thank you for reading.</span>
        <span className={style.overlay_text}>
          The theme of the website is to comprehensively show users the prices
          and reviews of products from large U.S. e-commerce platforms (amazon,
          ebay, walmart, etc.)
        </span>
        <span className={style.overlay_text}>
          This website is currently unfinished. The reason is that we know that
          a superficial website is needed to use the API, so we plan to first
          configure the layout of the website and then implement the functions
          by applying the API in detail.
        </span>
        <span className={style.overlay_text}>
          This website will support multiple languages​​(English, Italian,
          French, German).
        </span>
        <span className={style.overlay_text}>The sitemap is as follows.</span>
        <span className={style.overlay_text_link}>
          https://crackshopping-git-main-hyunsooryus-projects.vercel.app/[locale]
        </span>
        <span className={style.overlay_text_link}>
          https://crackshopping-git-main-hyunsooryus-projects.vercel.app/[locale]/info
        </span>
        <span className={style.overlay_text_link}>
          https://crackshopping-git-main-hyunsooryus-projects.vercel.app/[locale]/search
        </span>
        <span className={style.overlay_text_link}>
          If you are curious about my github, please visit the{" "}
          <a
            className={style.overlay_link}
            href="https://github.com/Arangluv/crackshopping"
            target="_blank"
          >
            link
          </a>
        </span>
      </div>
    </div>
  );
}
