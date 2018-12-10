-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 08, 2018 at 05:12 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_images`
--

CREATE TABLE `tbl_images` (
  `images_ID` tinyint(3) UNSIGNED NOT NULL,
  `mobile_path` varchar(40) NOT NULL,
  `tablet_path` varchar(40) NOT NULL,
  `desktop_path` varchar(40) NOT NULL,
  `wide_path` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_images`
--

INSERT INTO `tbl_images` (`images_ID`, `mobile_path`, `tablet_path`, `desktop_path`, `wide_path`) VALUES
(1, 'lsfc-work-mobile.png', 'lsfc-work-tablet.png', 'lsfc-work-desktop.png', 'lsfc-work-wide.png'),
(2, 'lyac-work-mobile.png', 'lyac-work-tablet.png', 'lyac-work-desktop.png', 'lyac-work-wide.png'),
(3, 'purevol-work-mobile.png', 'purevol-work-tablet.png', 'purevol-work-desktop.png', 'purevol-work-wide.png'),
(4, 'interaction-work-mobile.png', 'interaction-work-tablet.png', 'interaction-work-desktop.png', 'interaction-work-wide.png'),
(5, 'fyre-work-mobile.png', 'fyre-work-tablet.png', 'fyre-work-desktop.png', 'fyre-work-wide.png'),
(6, 'scs-work-mobile.png', 'scs-work-tablet.png', 'scs-work-desktop.png', 'scs-work-wide.png'),
(7, 'demo-work-mobile.png', 'demo-work-tablet.png', 'demo-work-desktop.png', 'demo-work-wide.png'),
(8, 'arielle-work-mobile.png', 'arielle-work-tablet.png', 'arielle-work-desktop.png', 'arielle-work-wide.png'),
(9, 'ypd-comm-mobile.png', 'ypd-comm-tablet.png', 'ypd-comm-desktop.png', 'ypd-comm-wide.png'),
(10, 'coop-comm-mobile.png', 'coop-comm-tablet.png', 'coop-comm-desktop.png', 'coop-comm-wide.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_section`
--

CREATE TABLE `tbl_section` (
  `section_ID` tinyint(3) UNSIGNED NOT NULL,
  `section_name` varchar(40) NOT NULL,
  `section_features` varchar(100) NOT NULL,
  `section_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_section`
--

INSERT INTO `tbl_section` (`section_ID`, `section_name`, `section_features`, `section_desc`) VALUES
(1, 'London Squash and Fitness Club', 'Bootstrap | Javascript Video Player', 'I participated in a class competition to develop a website rebrand for the London Squash and Fitness Club. I managed and coded the project, ensuring we met the club’s needs for a site that both advertised to prospective members and allowed current members to access their information. I developed a responsive JavaScript-driven video player to showcase the club location.'),
(2, 'London Youth Advisory Council', 'Wordpress Child Theme | JavaScript Page Animation | CSS Grid', 'I pitched my boss to let me take on additional work outside of my portfolio so I could code our Wordpress child theme. Creating this pitch required hours of research to determine the best CMS for the needs of my organization. I successfully coded the home page with CSS Grid and included an animation so different page elements load in when the user scrolls.'),
(3, 'Pure Volume', 'CSS Grid | Interactive Timeline | JavaScript Video Player', 'During the first week of fourth year, my class was tasked with working in groups to create a website rebrand for Purevolume.com. I managed the group to ensure the designer, videographer, and two front end developers completed their work on time. I also created the website copy and crafted the presentation we delivered to the client, Hive Media.'),
(4, 'InterAction Collective', 'Flat Design Logo ', 'I designed a logo for the grassroots youth group I supported in its early development called the InterAction Collective. I wanted to create a bold, visually accessible logo that highlights interaction and works in a variety of different colours. '),
(5, 'Blue Fyre', 'CSS Grid | JavaScript Slider', 'I designed and coded a website for an agency called Blue Fyre. I created a lightbox slider to showcase our portfolio work and used CSS Grid to create a full-width portfolio section.'),
(6, 'These Sites Save Lives', 'CSS Grid | Fetch API | Responsive GreenSock Animation', 'I designed and developed this interactive infographic website to highlight the importance of supervised consumption sites within London.  I used the Fetch API to call custom SVGs from the database when the user clicks on information about the services supervised consumption sites offer. I also used the GreenSock library to create the heartbeat and staggered people animation.'),
(7, 'Demo Reel', 'Cinema 4D | Adobe After Effects', 'I created a demo reel of all of my best 3D animation work. This video includes a bedroom build, cosmetic products, soccer promotion, a car graphic, and a logo animation.'),
(8, 'Arielle Kayabaga Campaign', 'Logo and Postcard Design', 'I worked with current Ward 13 city councillor Arielle Kayabaga on her campaign to create her logo and campaign sign design. I created two different versions of the design that Arielle used on postcards, online promo material, and signage. I used bright, friendly colours and distinctive sans-serif fonts to communicate Arielle’s approachable style of politics.'),
(9, 'YPD Interviewing', 'Team Management | Interviewing | Evaluation', 'In 2016, the Child and Youth Network partnered with the London Youth Advisory Council to pressure test their theory of change to increase high school graduation rates.\r\n\r\nI managed a team of two interviewers. We each conducted and coordinated in-depth interviews with young people, school staff and non-profit staff. As a team, we synthesized the qualitative data from these interviews into broader recommendations for the CYN to incorporate in their theory of change. We also presented our research at two Child and Youth Network committee meetings.'),
(10, 'Co-Op Evaluation', 'Interviewing | Evaluation | Strategic Partnerships', 'During the 2017-2018 school year, London Youth Advisory Council partnered with the London District Catholic School Board to evaluate their pilot co-op course for John Paul II and Catholic Central high school students. \r\n\r\nI supported the project in its early stages by building relationships with administration and worked at the end of the last semester to conduct final interviews with students. I co-designed these final interview questions with the other project facilitator and then transcribed and analyzed their themes. I also edited the final evaluation report that was written by the project researcher and data analyst.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_section_images`
--

CREATE TABLE `tbl_section_images` (
  `ID` tinyint(4) NOT NULL,
  `section_ID` tinyint(4) NOT NULL,
  `images_ID` tinyint(4) NOT NULL,
  `video_ID` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_section_images`
--

INSERT INTO `tbl_section_images` (`ID`, `section_ID`, `images_ID`, `video_ID`) VALUES
(1, 1, 1, 0),
(2, 2, 2, 0),
(3, 3, 3, 0),
(4, 4, 4, 0),
(5, 5, 5, 0),
(6, 6, 6, 0),
(7, 7, 7, 1),
(8, 8, 8, 0),
(9, 9, 9, 0),
(10, 10, 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_videos`
--

CREATE TABLE `tbl_videos` (
  `video_ID` tinyint(3) UNSIGNED NOT NULL,
  `video_mobile_path` varchar(40) NOT NULL,
  `video_tablet_path` varchar(40) NOT NULL,
  `video_desktop_path` varchar(40) NOT NULL,
  `video_wide_path` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_videos`
--

INSERT INTO `tbl_videos` (`video_ID`, `video_mobile_path`, `video_tablet_path`, `video_desktop_path`, `video_wide_path`) VALUES
(1, 'mobile.mp4', 'tablet.m4v', 'desktop.m4v', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_images`
--
ALTER TABLE `tbl_images`
  ADD PRIMARY KEY (`images_ID`);

--
-- Indexes for table `tbl_section`
--
ALTER TABLE `tbl_section`
  ADD PRIMARY KEY (`section_ID`);

--
-- Indexes for table `tbl_section_images`
--
ALTER TABLE `tbl_section_images`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_videos`
--
ALTER TABLE `tbl_videos`
  ADD PRIMARY KEY (`video_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_images`
--
ALTER TABLE `tbl_images`
  MODIFY `images_ID` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_section`
--
ALTER TABLE `tbl_section`
  MODIFY `section_ID` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_section_images`
--
ALTER TABLE `tbl_section_images`
  MODIFY `ID` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_videos`
--
ALTER TABLE `tbl_videos`
  MODIFY `video_ID` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
