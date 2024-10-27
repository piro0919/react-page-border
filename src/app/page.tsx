"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";

const useViewportSizeMonitor = (options = {}) => {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    previousHeight: window.innerHeight,
    delta: 0,
  });

  const dummyRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const debounceTimeRef = useRef(options.debounceTime || 16);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // デバウンス処理を行う関数
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const currentHeight = window.innerHeight;

        setViewportSize((prev) => ({
          width: window.innerWidth,
          height: currentHeight,
          previousHeight: prev.height,
          delta: currentHeight - prev.height,
        }));
      }, debounceTimeRef.current);
    };

    // ResizeObserverの設定
    if (dummyRef.current) {
      resizeObserverRef.current = new ResizeObserver(handleResize);
      resizeObserverRef.current.observe(dummyRef.current);
    }

    // クリーンアップ
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return viewportSize;
};

export default function Page(): JSX.Element {
  const viewportSize = useViewportSizeMonitor();

  return (
    <>
      <div className={styles.wrapper}>
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        Current height: {viewportSize.height}px Height change:{" "}
        {viewportSize.delta}px aaa aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
      </div>
      <div className={styles.wrapper2}>
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
      </div>
    </>
  );
}
