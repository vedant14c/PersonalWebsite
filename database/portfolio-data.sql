-- MySQL dump 10.13  Distrib 8.4.8, for Win64 (x86_64)
--
-- Host: localhost    Database: personal_website
-- ------------------------------------------------------
-- Server version	8.4.8

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `certifications`
--

LOCK TABLES `certifications` WRITE;
/*!40000 ALTER TABLE `certifications` DISABLE KEYS */;
INSERT INTO `certifications` VALUES (1,'C Programming','',NULL,'',1);
/*!40000 ALTER TABLE `certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'MCA','Pimpri Chinchwad College of Engineering','2023-01-01','2025-01-01',74.39,'Master of Computer Applications, Savitribai Phule Pune University.',1),(2,'BCA','Dr. DY Patil Institute of Technology, Pimpri','2020-01-01','2023-01-01',84.93,'Bachelor of Computer Applications, Savitribai Phule Pune University.',2);
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Test User','test@example.com','Portfolio Test','This is a test message from my personal website.',0,'2026-08-13 16:07:37'),(2,'Test1','test1@gmail.com','website test','testing personal website contact form',0,'2026-08-13 16:16:27'),(3,'test2','test2@gmail.com','website test','This is message for personal website',0,'2026-08-14 03:21:26'),(4,'test2','test2@gmail.com','website test','this is message validation',0,'2026-08-14 03:31:59');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (3,'SpaceHub AI Powered Rental Management System','A full-stack property rental management system for listing properties, managing bookings, online payments, notifications, and role-based access.','[\"Spring Boot\", \"React\", \"Android\", \"MySQL\", \"Firebase\", \"Razorpay\"]','https://github.com/vedant14c/SpaceHub-AI-Powered-Rental-Management-System','','',1,1,'2026-08-13 16:35:10','2026-08-13 16:35:10'),(4,'Web Based E-Commerce Platform','A web-based e-commerce platform with Customer and Admin modules, product browsing, cart management, purchasing, order tracking, inventory management, and MySQL database integration.','[\"J2EE\", \"JDBC\", \"MySQL\"]','https://github.com/vedant14c/Web-based-E-commerce-platform','','',0,2,'2026-08-13 16:35:10','2026-08-13 16:35:10'),(5,'Digital Polling','A web-based online voting platform with role-based access for voters and candidates, JDBC-based authentication, and real-time vote counting.','[\"J2EE\", \"JDBC\", \"MySQL\"]','https://github.com/vedant14c/Digital-Polling','','',0,3,'2026-08-13 16:35:10','2026-08-13 16:35:10');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Programming','Java',1),(2,'Programming','Python',2),(3,'Programming','C',3),(4,'Programming','C++',4),(5,'Frontend','HTML',5),(6,'Frontend','CSS',6),(7,'Frontend','JavaScript',7),(8,'Frontend','React',8),(9,'Backend','Spring Boot',9),(10,'Backend','Express.js',10),(11,'Backend','REST APIs',11),(12,'Database','MySQL',12),(13,'Database','MongoDB',13),(14,'Mobile','Android',14),(15,'Mobile','Firebase',15),(16,'Tools','Git',16),(17,'Tools','GitHub',17),(18,'Tools','Postman',18);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-17 13:41:49
