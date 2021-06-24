import React, { useEffect } from "react";
import Head from "next/head";
import { ColorPicker, useColor } from "react-color-palette";
import Container from "@material-ui/core/Container";
import { css, cx } from "@emotion/css";

const Index = () => {
  const [color, setColor] = useColor("hex", "#121212");
  useEffect(() => {
    return () => {
      // console.log(color.hex);
      document.body.style.backgroundColor = color.hex;
    };
  }, [color]);
  return (
    <Container>
      <Head>
        {/* <meta name="theme-color" content={"#ff00ff"} /> */}
        <meta name="theme-color" content={color.hex} />
      </Head>
      <pre style={{ backgroundColor: "#fff" }}>
        {JSON.stringify(color, null, 2)}
      </pre>
      <ColorPicker
        width={456}
        height={228}
        color={color}
        onChange={setColor}
        // hideHSV
        // dark
      />
    </Container>
  );
};

export default Index;
