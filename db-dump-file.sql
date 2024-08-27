-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bio` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'J.K. Rowling','jk.rowling@example.com','British author, best known for writing the Harry Potter series.'),(2,'George Orwell','george.orwell@example.com','English novelist and essayist, famous for his works Animal Farm and 1984.'),(3,'J.R.R. Tolkien','jrr.tolkien@example.com','English writer, poet, and academic, author of The Lord of the Rings.'),(4,'Jane Austen','jane.austen@example.com','English novelist known primarily for her six major novels.'),(5,'Mark Twain','mark.twain@example.com','American writer, humorist, and lecturer, best known for The Adventures of Tom Sawyer.'),(6,'Ernest Hemingway','ernest.hemingway@example.com','American novelist, short-story writer, and journalist, known for works like The Old Man and the Sea.'),(7,'F. Scott Fitzgerald','f.scott.fitzgerald@example.com','American novelist and short-story writer, widely regarded as one of the greatest American writers of the 20th century.'),(8,'Agatha Christie','agatha.christie@example.com','English writer known for her 66 detective novels and 14 short story collections.'),(9,'Charles Dickens','charles.dickens@example.com','English writer and social critic, regarded as one of the greatest novelists of the Victorian era.'),(10,'Leo Tolstoy','leo.tolstoy@example.com','Russian writer who is regarded as one of the greatest authors of all time.'),(11,'Harper Lee','harper.lee@example.com','American novelist, best known for her 1960 novel To Kill a Mockingbird.'),(12,'Arthur Conan Doyle','arthur.conan.doyle@example.com','British writer and physician, creator of Sherlock Holmes.'),(13,'Gabriel Garcia Marquez','gabriel.garcia.marquez@example.com','Colombian novelist and short-story writer, awarded the Nobel Prize in Literature in 1982.'),(14,'Mary Shelley','mary.shelley@example.com','English novelist who wrote the Gothic novel Frankenstein.'),(15,'H.G. Wells','hg.wells@example.com','English writer known for his works in the science fiction genre.'),(16,'Herman Melville','herman.melville@example.com','American novelist, short-story writer, and poet, best known for his novel Moby-Dick.'),(17,'Virginia Woolf','virginia.woolf@example.com','English writer, considered one of the most important modernist 20th-century authors.'),(18,'William Shakespeare','william.shakespeare@example.com','English playwright, poet, and actor, widely regarded as the greatest writer in the English language.'),(19,'James Joyce','james.joyce@example.com','Irish novelist, short story writer, and poet, considered one of the most influential writers of the early 20th century.'),(20,'George R.R. Martin','george.rr.martin@example.com','American novelist and short story writer, best known for A Song of Ice and Fire.'),(22,'Emily Johnson','emily.johnson@example.com','Emily Johnson is a renowned author in the field of science fiction and fantasy. She is known for her imaginative world-building and compelling characters.');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `author_id` int NOT NULL,
  `image` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `author_id_idx` (`author_id`),
  CONSTRAINT `author_id` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (43,'Harry Potter and the Philosopher\'s Stone','The first book in the Harry Potter series, introducing Harry Potter and his journey as a wizard.',1,'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg'),(44,'Harry Potter and the Chamber of Secrets','The second book in the Harry Potter series, where Harry faces new challenges at Hogwarts.',1,'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg'),(45,'Harry Potter and the Prisoner of Azkaban','The third book in the Harry Potter series, where Harry learns more about his past.',1,'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg'),(46,'1984','A dystopian novel set in a totalitarian society ruled by Big Brother.',2,'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg'),(48,'The Hobbit','A fantasy novel that precedes The Lord of the Rings, following the journey of Bilbo Baggins.',3,'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg'),(51,'The Lord of the Rings: The Return of the King','The final part of the epic fantasy trilogy by J.R.R. Tolkien.',3,'https://www.amazon.com/images/M/MV5BNDgwY2YyNjctZTMxZC00ZTRlLThhN2QtMTAwYjUyODcyZDYxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg'),(52,'Pride and Prejudice','A romantic novel that also offers a critique of the British landed gentry at the end of the 18th century.',4,'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg'),(53,'Sense and Sensibility','A novel that portrays the life and loves of the Dashwood sisters.',4,'https://upload.wikimedia.org/wikipedia/en/6/69/Sense_and_sensibility.jpg'),(54,'The Adventures of Tom Sawyer','A novel about a young boy growing up along the Mississippi River.',5,'https://m.media-amazon.com/images/I/71l6aEDzaFS._SL1500_.jpg'),(55,'The Adventures of Huckleberry Finn','A sequel to Tom Sawyer, this novel is often called the Great American Novel.',5,'https://m.media-amazon.com/images/I/91sBZnKzEfL._AC_UF1000,1000_QL80_.jpg'),(56,'The Old Man and the Sea','A short novel about an aging fisherman and his struggle with a giant marlin.',6,'https://m.media-amazon.com/images/I/71RXc0OoEwL._SL1500_.jpg'),(57,'A Farewell to Arms','A novel about love and war, set during World War I.',6,'https://m.media-amazon.com/images/I/719VFUyk9GL._AC_UF1000,1000_QL80_.jpg'),(58,'The Great Gatsby','A novel about the American dream and the disillusionment that comes with it.',7,'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg'),(59,'Tender is the Night','A novel about the rise and fall of Dick Diver, a charming and talented American psychiatrist.',7,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559763775i/46164.jpg'),(60,'Murder on the Orient Express','A famous mystery novel featuring detective Hercule Poirot.',8,'https://m.media-amazon.com/images/I/81gkOWZnIqL._AC_UF1000,1000_QL80_.jpg'),(61,'And Then There Were None','A mystery novel where ten strangers are invited to a remote island and are killed one by one.',8,'https://agathachristie.imgix.net/hcus-paperback/Jacket_AndThenThereWereNoneUS.jpg?auto=compress,format&fit=clip&q=65&w=400'),(62,'A Tale of Two Cities','A historical novel set in London and Paris before and during the French Revolution.',9,'https://m.media-amazon.com/images/I/71CQFGiPA+L._AC_UF1000,1000_QL80_.jpg'),(63,'Great Expectations','A novel that depicts the personal growth and development of an orphan named Pip.',9,'https://cloud.firebrandtech.com/api/v2/image/111/9780785841708/CoverArtHigh/XL'),(64,'War and Peace','A novel that chronicles the French invasion of Russia and its impact on Tsarist society.',10,'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg'),(65,'Anna Karenina','A novel about a tragic love affair set against the backdrop of Russian society.',10,'https://m.media-amazon.com/images/I/71dfDiH-BKL._AC_UF1000,1000_QL80_.jpg'),(66,'To Kill a Mockingbird','A novel about racial injustice in the Deep South, seen through the eyes of a young girl.',11,'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg'),(67,'The Hound of the Baskervilles','A Sherlock Holmes novel about a legendary curse and a murderous hound.',12,'https://upload.wikimedia.org/wikipedia/commons/3/3b/Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg'),(68,'A Study in Scarlet','The first novel featuring Sherlock Holmes and Dr. Watson.',12,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/ArthurConanDoyle_AStudyInScarlet_annual.jpg/800px-ArthurConanDoyle_AStudyInScarlet_annual.jpg'),(69,'One Hundred Years of Solitude','A multi-generational story about the Buendía family, set in the fictional town of Macondo.',13,'https://diwanegypt.com/wp-content/uploads/2020/08/9780241968581-2.jpg'),(70,'Love in the Time of Cholera','A novel about love and relationships, spanning over fifty years.',13,'https://m.media-amazon.com/images/I/61OBwknuKsL._AC_UF1000,1000_QL80_.jpg'),(71,'Frankenstein','A Gothic novel about a young scientist who creates a grotesque creature in an unorthodox experiment.',14,'https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UF1000,1000_QL80_.jpg'),(72,'The War of the Worlds','A science fiction novel about an alien invasion of Earth.',15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrDFgm6YeuRtwgFn9dHy4iR8bYi-_fVloCQ&s'),(73,'The Time Machine','A science fiction novel about time travel and a dystopian future.',15,'https://m.media-amazon.com/images/I/61KxCNiWAxL._AC_UF1000,1000_QL80_.jpg'),(74,'Moby-Dick','A novel about the obsessive quest of Captain Ahab for revenge on the white whale Moby Dick.',16,'https://m.media-amazon.com/images/I/81R91ODA9DL._AC_UF1000,1000_QL80_.jpg'),(75,'Mrs Dalloway','A novel that details a day in the life of Clarissa Dalloway, a fictional high-society woman in post-World War I England.',17,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646148221i/14942.jpg'),(76,'To the Lighthouse','A novel that explores themes of time, change, and loss through the story of the Ramsay family.',17,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639106809i/59716.jpg'),(77,'Hamlet','A tragedy about Prince Hamlet\'s revenge against his uncle, who has murdered Hamlet\'s father.',18,'https://kidsotic.com/images/cover/9780746096116-main.jpg'),(78,'Romeo and Juliet','A tragedy about two young star-crossed lovers whose deaths ultimately reconcile their feuding families.',18,'https://cdn.kobo.com/book-images/ca07820a-192c-4ec8-a3a6-684a3a7ee2e3/1200/1200/False/romeo-and-juliet-320.jpg'),(79,'Macbeth','A tragedy about the damaging effects of political ambition on those who seek power.',18,'https://pictures.abebooks.com/isbn/9781475026856-uk.jpg'),(80,'Ulysses','A modernist novel that chronicles the appointments and encounters of Leopold Bloom in Dublin.',19,'https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg'),(81,'A Portrait of the Artist as a Young Man','A novel that portrays the early life of Stephen Dedalus, a fictional alter ego of James Joyce.',19,'https://m.media-amazon.com/images/I/71zYs2K8VpL.jpg'),(82,'A Game of Thrones','The first book in the A Song of Ice and Fire series, a fantasy epic set in the world of Westeros.',20,'https://i.harperapps.com/hcanz/covers/9780007459483/y648.jpg'),(83,'A Clash of Kings','The second book in the A Song of Ice and Fire series.',20,'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567840212l/10572.jpg'),(84,'A Storm of Swords','The third book in the A Song of Ice and Fire series.',20,'https://m.media-amazon.com/images/I/71brND7cdHL._AC_UF1000,1000_QL80_.jpg');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bookstore'
--

--
-- Dumping routines for database 'bookstore'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-27 12:33:15
