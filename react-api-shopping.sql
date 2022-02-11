-- Copiando estrutura do banco de dados para react-banco
DROP DATABASE IF EXISTS `react-banco`;
CREATE DATABASE IF NOT EXISTS `react-banco` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `react-banco`;

-- Copiando estrutura para tabela react-banco.message
DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) COLLATE armscii8_bin DEFAULT NULL,
  `email` varchar(150) COLLATE armscii8_bin DEFAULT NULL,
  `message` varchar(150) COLLATE armscii8_bin DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Exportação de dados foi desmarcado.
