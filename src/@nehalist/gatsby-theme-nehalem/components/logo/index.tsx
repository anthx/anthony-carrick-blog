import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";

interface LogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  max-height: 30px;
  width: 30px;
  margin-right: 45px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 15px;
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  height: 30px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "nehalist-gatsby"}) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

   
  return (
    <HomeLink to={`/`}>
      <LogoImage fixed={logo.file.childImageSharp.fixed} alt={title}/>
      <script type="text/javascript">
        var sc_project=12600642; 
        var sc_invisible=1; 
        var sc_security="8a3afe65"; 
    </script>
    <script type="text/javascript"
    src="https://www.statcounter.com/counter/counter.js"
    async></script>
    <noscript><div className="statcounter"><a title="Web Analytics"
    href="https://statcounter.com/" target="_blank"><img
    className="statcounter"
    src="https://c.statcounter.com/12600642/0/8a3afe65/1/"
    alt="Web Analytics"
    referrerPolicy="no-referrer-when-downgrade" /></a></div></noscript>
    </HomeLink>
  );
};

export default Logo;