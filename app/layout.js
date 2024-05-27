import "./globals.css";
import { Inter } from "next/font/google";
import "@/public/css/ljj.css";
import "@/public/css/normalize.css";
import "@/public/css/webflow.css";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contakmusic",
  description: "음원을 보내주세요",
  icons:{
    icon:'images/logo.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <div className="page-wrapper">
            <div
              data-w-id="da732deb-5db6-156b-08c9-e9fd059bc49f"
              data-animation="default"
              data-collapse="medium"
              data-duration="400"
              data-easing="ease"
              data-easing2="ease"
              role="banner"
              className="header-wrapper w-nav"
            >
              <div className="container-default w-container">
                <div className="header-content-wrapper">
                  <a
                    href="/"
                    aria-current="page"
                    className="logo-link-wrapper w-nav-brand w--current"
                  >
                    <img
                      style={{ width: "40%" }}
                      src="images/logo.png"
                      loading="eager"
                      alt="Dashflow X Webflow Template - Logo"
                    />
                  </a>
                  <nav
                    role="navigation"
                    className="header-nav-menu-wrapper w-nav-menu"
                  >
                    <ul
                      role="list"
                      className="header-nav-menu-list w-list-unstyled"
                    >
                      <li className="header-nav-list-item"></li>
                      <li className="header-nav-list-item"></li>
                    </ul>
                    <div className="header-sidebar-wrapper">
                      <div
                        id="w-node-_33df89bc-f82c-cc1e-d5c4-4959632564a9-632564a9"
                        className="sidebar-container"
                      >
                        <div className="grid-1-column sidebar-links-grid mg-bottom-48px">
                          <a
                            href="index.html"
                            aria-current="page"
                            className="sidebar-link w-inline-block w--current"
                          >
                            <img
                              src="images/home-sidebar-link-icon-dashflow-webflow-template_1home-sidebar-link-icon-dashflow-webflow-template.png"
                              loading="eager"
                              alt="Home - Dashflow X Webflow Template"
                              className="max-w-20px"
                            />
                            <div className="text-100 medium">Home</div>
                          </a>
                          <a href="#" className="sidebar-link w-inline-block">
                            <img
                              src="images/changelog-sidebar-link-icon-dashflow-webflow-template_1changelog-sidebar-link-icon-dashflow-webflow-template.png"
                              loading="eager"
                              alt="Changelog - Dashflow X Webflow Template"
                              className="max-w-20px"
                            />
                            <div className="text-100 medium">Edit</div>
                          </a>
                          <a href="#" className="sidebar-link w-inline-block">
                            <img
                              src="images/licenses-sidebar-link-icon-dashflow-webflow-template_1licenses-sidebar-link-icon-dashflow-webflow-template.png"
                              loading="eager"
                              alt="Licenses - Dashflow X Webflow Template"
                              className="max-w-20px"
                            />
                            <div className="text-100 medium">My Page</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hidden-on-desktop show-on-tablet">
                      <div className="buttons-row gap-column-12px">
                        <a
                          data-w-id="dc3b625c-4a68-4ebe-9b74-d3193fa9f32f"
                          href="#"
                          className="btn-primary w-inline-block"
                        >
                          <div className="flex-horizontal gap-column-4px">
                            <div>Get template</div>
                          </div>
                        </a>
                        <a
                          data-w-id="5228fae3-1046-92bf-afc3-a85185c5a451"
                          href="#"
                          className="btn-secondary w-inline-block"
                        >
                          <div className="flex-horizontal gap-column-4px">
                            <div>Default</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                  <div className="header-right-side-container">
                    <div className="hidden-on-mbl"></div>
                  </div>
                </div>
              </div>
            </div>

            {children}
            <div className="bg-neutral-100">
              <div className="container-default w-container">
                <div className="main-dashboard-grid">
                  <div id="">
                    <div
                      className="footer-bottom-section"
                      style={{ display: "flex" }}
                    >
                      <div>Copyright © Contakmusic | 2024</div>
                      <div
                        className="flex justify-center items-center"
                        style={{ opacity: 1 }}
                      >
                        {/* <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        className="social-circle-link"
                      >
                        
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="social-circle-link"
                      >
                        
                      </a>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        className="social-circle-link"
                      >
                        
                      </a>
                      <a
                        href="https://dribbble.com/"
                        target="_blank"
                        className="social-circle-link"
                      >
                        
                      </a>
                      <a
                        href="https://www.behance.net/"
                        target="_blank"
                        className="social-circle-link"
                      >
                        
                      </a> */}
                        
                        <div >
                          <a
                            href="https://www.instagram.com/contaktmusic?igsh=MTdjMmt6aTdwY3RrOA=="
                            target="_blank"
                            className="social-circle-link"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loading-bar-wrapper">
              <div className="loading-bar"></div>
            </div>
          </div>
        </NextUIProvider>
      </body>

      <Script src="/js/webflow.js" strategy="lazyOnload"></Script>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=660bf73b26a4d504faaf0159"></Script>
    </html>
  );
}
