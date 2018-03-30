USE sequelize_passport;


insert into communities (title,ownerId) values ("communities Test 1",1);
insert into communities (title,ownerId) values ("communities 2 Test 2",2);


insert into users
(username,email,password,state,city,CommunityId)
values
("testuser1","test1@gmail.com","12345","CA","Irvine",1);
insert into users
(username,email,password,state,city,CommunityId)
values
("testuser2","test2@gmail.com","12345","CA","Irvine",2);
insert into users
(username,email,password,state,city,CommunityId)
values
("testuser3","test3@gmail.com","12345","CA","Irvine",1);

/* 3 -*/
insert into forums
(title,CommunityId)
values 
("test forum1",1);
insert into forums
(title,CommunityId)
values 
("test forum 2",2);
insert into forums
(title,CommunityId)
values 
("test forum 3",2);

/* 4 */

insert into threads (title,forumid,UserId) values ("test threads 1",1,1);
insert into threads (title,forumid,UserId) values ("test threads 2",1,1);
insert into threads (title,forumid,UserId) values ("test threads 3",1,2);
insert into threads (title,forumid,UserId) values ("test threads 4",2,2);
insert into threads (title,forumid,UserId) values ("test threads 5",2,1);

/* 5 */

insert into posts (title,body,threadid,UserId) values ("post title 1","post body 1",1,1);
insert into posts (title,body,threadid,UserId) values ("post title 2","post body 2",1,1);
insert into posts (title,body,threadid,UserId) values ("post title 3","post body 3",2,2);
insert into posts (title,body,threadid,UserId) values ("post title 4","post body 4",3,2);
insert into posts (title,body,threadid,UserId) values ("post title 5","post body 5",2,2);