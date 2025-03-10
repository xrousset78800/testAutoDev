-- clients_database.sql
CREATE TABLE IF NOT EXISTS  (
  uid=1000(node) gid=1000(node) groups=1000(node) int(11) PRIMARY KEY AUTO_INCREMENT,
   varchar(255),
   varchar(255),
   varchar(20),
   varchar(100)
);

CREATE TABLE IF NOT EXISTS  (
  uid=1000(node) gid=1000(node) groups=1000(node) int(11) PRIMARY KEY AUTO_INCREMENT,
   varchar(255),
   text,
   decimal(10,2),
   enum('vente_privee', 'vente_en_cours'),
   varchar(255),
   varchar(255)
);

CREATE TABLE IF NOT EXISTS  (
  uid=1000(node) gid=1000(node) groups=1000(node) int(11) PRIMARY KEY AUTO_INCREMENT,
   varchar(50),
   varchar(100)
);
