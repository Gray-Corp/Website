import React from 'react';
import Figma from "../imgs/SVG/figmaN.svg";
import Wordpress from "../imgs/SVG/wordpress.svg";
import techImage from "../imgs/SVG/tech.svg";
import Dart from "../imgs/SVG/dart.svg";
import Flutter from "../imgs/SVG/flutter.svg";
import Java from "../imgs/SVG/java.svg";
import Spring from "../imgs/SVG/spring.svg";
import Firebase from "../imgs/SVG/firebase.svg";
import Mysql from "../imgs/SVG/mysql.svg";
import Psql from "../imgs/SVG/postgresql.svg";
import googleCloud from "../imgs/SVG/googleclouds.svg";
import swift from "../imgs/SVG/swift.svg";
import { DiBootstrap, DiDart, DiFirebase, DiGoogleCloudPlatform, DiJavascript, DiPostgresql, DiSwift } from 'react-icons/di';
import { FaJava, FaReact, FaTrophy } from 'react-icons/fa';
import { MdGraphicEq, MdEdit, MdBrush, MdColorLens,MdComputer, MdSettings, MdStorage, MdLoyalty, MdCampaign, MdBrandingWatermark } from 'react-icons/md';
import { FaPencilAlt, FaPaintBrush, FaPalette,FaDesktop, FaCog, FaServer } from 'react-icons/fa';
import { FiPenTool,FiServer, FiCode, FiDatabase,FiAward, FiTarget } from 'react-icons/fi';
import { FaPaintbrush } from 'react-icons/fa6';
import { BsFillPaletteFill } from 'react-icons/bs';


const TrustedCompanies = () => {
  return (
    <div className="bg-white md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex md:w-9/12 flex-col md:space-y-[10vh] mob:space-y-8">
        <h2 className="text-center md:text-5xl font-semibold py-3 text-[#333333] logoTitle">Innovative Tech Trends</h2>
        <img src={techImage} alt='' className='w-[100%]'/>
      </div>
    </div>
  );
};

export default TrustedCompanies;
