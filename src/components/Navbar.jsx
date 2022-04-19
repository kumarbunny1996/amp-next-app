import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "./ui/Link";
const Navbar = () => {
  return (
    <>
      <header className="header-nav flex justify-between items-center fixed top left right p10">
        <div
          role="button"
          aria-label="open sidebar"
          on="tap:header-sidebar.toggle"
          tabIndex="0"
          className="ampstart-navbar-trigger curP icon"
        >
          <HiMenuAlt4></HiMenuAlt4>
        </div>
        <Link href="news/web-stories">
          <div className="black">News</div>
        </Link>
        <Link href="">
          <div className="black">About</div>
        </Link>
      </header>
      <amp-sidebar
        id="header-sidebar"
        className="ampstart-sidebar"
        layout="nodisplay"
      >
        <div className="ampstart-sidebar-header">
          <div
            role="button"
            aria-label="close sidebar"
            on="tap:header-sidebar.toggle"
            tabIndex="0"
            className="ampstart-navbar-trigger curP items-start icon"
          >
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>
        <nav className="nav-blk">
          <ul>
            <li className="ampstart-navitems under-line-strike">
              <Link href="/news/news">
                <a className="ampstart-navlink">
                  <span>N</span>
                  <span>e</span>
                  <span>w</span>
                  <span>s</span>
                </a>
              </Link>
            </li>
            <li className="ampstart-navitems under-line-strike">
              <a href="" className="ampstart-navlink">
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
              </a>
            </li>
          </ul>
        </nav>
      </amp-sidebar>
      <style jsx>
        {`
          .header-nav {
            color: #000;
            font-size: 22px;
            font-weight: 900px;
            box-shadow: none;
            will-change: transform;
            height: 4.375rem;
            z-index: 4;
            background: #fff;
          }
          amp-sidebar {
            height: 100vh;
            width: 80vw;
            position: fixed;
            top: 0;
            outline: none;
            background: #ffff;
            overflow-x: hidden;
            overflow-y: auto;
            z-index: 22222222222222222;
            will-change: transform;
          }
          .ampstart-sidebar {
            width: 80vw;
            background: #fff;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .ampstart-sidebar-header {
            position: absolute;
            top: 0;
            left: 1.5rem;
            line-height: 5.75rem;
            min-height: 5.75rem;
          }
          .flex {
            display: flex;
          }
          .justify-center {
            justify-content: center;
          }
          .justify-start {
            justify-content: start;
          }
          .justify-between {
            justify-content: space-between;
          }
          .items-center {
            align-items: center;
          }
          .p10 {
            padding: 10px;
          }
          .black {
            color: #000;
          }
          .fixed {
            position: fixed;
          }
          .top {
            top: 0;
          }
          .left {
            left: 0;
          }
          .right {
            right: 0;
          }
          .curP {
            cursor: pointer;
          }
          .nav-blk {
            width: 100%;
            margin: 0 auto;
          }
          .icon {
            font-weight: 900;
            font-size: 32px;
          }
          .ampstart-navitems {
            max-width: 7.5em;
            margin: auto;
            list-style: none;
            font-weight: 900;
            font-size: 65px;
            line-height: 3;
            color: #000;
            position: relative;
          }
          .ampstart-navlink {
            display: flex;
            position: relative;
            text-transform: uppercase;
            color: #000;
          }
          .ampstart-navlink > span {
            margin: auto;
          }
          .ampstart-navlink > span:first-child {
            margin-left: 0;
          }

          .ampstart-navlink > span:last-child {
            margin-right: 0;
          }
          .under-line-strike:before {
            position: absolute;
            bottom: calc(0.5em - 4px);
            left: 0;
            right: 0;
            height: 0.1em;
            min-height: 2px;
            content: "";
            background: #000;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }
          .under-line-strike:hover:before {
            transform: none;
          }
        `}
      </style>
    </>
  );
};
export default Navbar;
