/** @format */
import React, { useEffect, useState } from "react";
import { Button, NavigationBar, IconButton, HeaderIcon } from "../../compoment";
import clsx from "clsx";

const Intro: React.FC = () => {
  const [animetion, setAnimetion] = useState(false);
  const handleClick = () => {};
  const ICONLIST = [
    {
      name: "GitHub",
      SVGElement: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </>
      ),
      link: "",
    },
    {
      name: "Gmail",
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
        </svg>
      ),
      link: "",
    },
    {
      name: "Linkedin",
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
        </svg>
      ),
      link: "",
    },
    {
      name: "CakeResume",
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Telegram",
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
        </svg>
      ),
      link: "",
    },
    {
      name: "104Bank",
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      link: "",
    },
  ];

  useEffect(() => {
    setAnimetion(true);
    return () => {
      setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);

  return (
    <div className="flex bg-slate-700 flex-col items-center justify-center w-full h-screen">
      <div>
        <NavigationBar />
      </div>

      <section className="mt-14 mb-10 flex justify-evenly">
        <div className={clsx(`flex justify-start flex-col`)}>
          <h3
            className={clsx(
              `text-white text-3xl font-medium ${
                animetion
                  ? `animate-fade-down animate-once animate-ease-in`
                  : ``
              }`
            )}
          >
            Hello 你好
          </h3>
          <h1
            className={clsx(
              `text-white text-4xl font-bold mx-0 my-1 ${
                animetion
                  ? `animate-fade-right animate-once animate-ease-in`
                  : ``
              }`
            )}
          >
            我是 吳浩維
          </h1>
          <h3
            className={clsx(
              `text-white text-3xl font-medium ${
                animetion ? `animate-fade-up animate-once animate-ease-in` : ``
              }`
            )}
          >
            我是一名前端工程師
          </h3>

          <div
            className={clsx(
              `${
                animetion
                  ? `animate-fade-left animate-once animate-ease-in`
                  : ``
              }`
            )}
          >
            <p className="text-gray-300 mt-2">關於我：</p>
            <p className="text-gray-300 mt-4">
              充滿熱情的前端工程師，擁有 1 年以上前端開發經驗，尋求新的挑戰。
              {/* Passionate Front-End Engineer with 1+ years of experience seeking new challenges. */}
              {/* TODO:多語系 */}
            </p>
            <p className="text-gray-300 mt-4">
              熟悉 JavaScript、React 和 Linux 系統。
              {/* Expertise in JavaScript, React, and Linux systems.*/}
              {/* TODO:多語系 */}
              有解決問題的能力，對程式有高品質要求，並善於與他人溝通,合作。
            </p>
            {/* Strong communication, collaboration, and problem-solving skills. */}
            {/* TODO:多語系+文字不對
             */}
            <p className="text-gray-300 mt-4">渴望學習和成長，始終追求卓越。</p>
            {/* Eager to learn and grow, always striving for excellence.
             */}
            {/* TODO:多語系 */}

            <p className="text-gray-300 mt-2">聯絡方式:</p>
          </div>
          <div>
            {ICONLIST.map((icon, index) => (
              <IconButton
                onClickEvent={handleClick}
                key={`${icon.name}-${index}`}
                classname={clsx(
                  `${
                    animetion
                      ? `animate-fade animate-once animate-delay-[${index}s] animate-ease-in`
                      : ``
                  }`
                )}
              >
                {icon.SVGElement}
              </IconButton>
            ))}
          </div>
        </div>
        <div className={clsx(`felx justify-end ml-10`)}>
          <HeaderIcon />
        </div>
      </section>

      <div
        className={clsx(
          `flex justify-start items-center relative right-[28.5rem]`
        )}
      >
        <Button
          className={clsx(
            ` ${
              animetion
                ? `animate-fade animate-once animate-delay-[1ms] animate-ease-in`
                : ``
            }`
          )}
          type=""
          onClickEvent={handleClick}
        >
          關於我
        </Button>
      </div>
    </div>
  );
};

export default Intro;