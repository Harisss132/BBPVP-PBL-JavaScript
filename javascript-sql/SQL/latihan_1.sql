create database db_blog_post;
use db_blog_post;

insert into users (id, nama) values
(1, 'Jhom Doe'),
(2, 'Robert'),
(3, 'Frank'),
(4, 'Jane');

select id, nama as name from users;

insert into blog_posts (id, title, body, author_id) values
(1, 'Algorithm', 'this is article for algorithm', 1),
(2, 'Lorem Ipsum', 'lorem ipsum dolor sit amet', 1),
(3, 'NodeJS', "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.", 2),
(4, 'ReactJS', 'ReactJS is JavaScript library for building user interface', 4),
(5, 'Git', 'Git is a free and open source distributed version control system designed to handle everything from small to verylarge projects with speed and efficiency', 3),
(6, 'Basketball', "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a 
rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a00
basket 18 inches (46 cm) in diameter
mounted 10 feet (3.048 m) high to a
backboard at each end of the court, while
preventing the opposing team from
shooting through their own hoop", 2);

select * from blog_posts;

insert into categories (id, nama) values
(1, 'Basic'),
(2, 'Library'),
(3, 'Unknown'),
(4, 'Sport');

select id, nama as name from categories;

insert into post_categories (post_id, category_id) values
(1, 1),
(2, 3),
(3, 1),
(3, 2),
(4, 2),
(4, 1),
(5, 1),
(6, 4);

select * from post_categories;

select 
blog_posts.id as post_id,
blog_posts.title,
blog_posts.body,
blog_posts.author_id,
users.id as users_id,
users.nama
from blog_posts join users on  blog_posts.author_id = users.id
where users.nama = 'Jhom Doe';

select
c.nama as category_name,
b.title as post_title,
u.nama as author_name
from categories as c join post_categories as p
on c.id = p.category_id
join blog_posts as b
on p.post_id = b.id
join users as u on b.author_id = u.id
where c.nama = 'Basic';

select
	c.nama as category_name,
    bp.title as post_title,
    bp.body
from users as u
join blog_posts as bp on u.id = bp.author_id
join post_categories as pc on bp.id = pc.post_id
join categories as c on pc.category_id = c.id
where u.nama in ('Robert', 'Frank');


