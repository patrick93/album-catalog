create table ALBUM
(
	Id int auto_increment
		primary key,
	Title varchar(255) not null,
	Artist varchar(255) not null,
	Year int not null,
	Record_label varchar(255) null
)
engine=InnoDB
;

create index title_fulltext
	on ALBUM (Title)
;

create table ALBUM_COLLECTION
(
	Collection_Id int not null,
	Album_Id int not null,
	primary key (Collection_Id, Album_Id),
	constraint ALBUM_COLLECTION_ALBUM_Id_fk
		foreign key (Album_Id) references ALBUM (Id)
)
engine=InnoDB
;

create index ALBUM_COLLECTION_ALBUM_Id_fk
	on ALBUM_COLLECTION (Album_Id)
;

create table COLLECTION
(
	Id int auto_increment
		primary key,
	Name varchar(255) not null,
	constraint COLLECTION_Name_uindex
		unique (Name)
)
engine=InnoDB
;

alter table ALBUM_COLLECTION
	add constraint ALBUM_COLLECTION_COLLECTION_Id_fk
		foreign key (Collection_Id) references COLLECTION (Id)
;

