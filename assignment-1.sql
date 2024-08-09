use sakila;
-- Find out the PG-13 rated comedy movies. DO NOT use the film_list table.
select count(*) from (select film.title,category.name,film.rating
from film ,film_category,category
where film.film_id=film_category.film_id
and film_category.category_id=category.category_id
and film.rating='PG-13'
and category.name='Comedy') as subquery;

--  Find out the top 3 rented horror movies.
select film.title,count(rental.rental_id) as rentalcount
from film,film_category,category,rental,inventory
where film.film_id=film_category.film_id
and film_category.category_id=category.category_id
and rental.inventory_id=inventory.inventory_id
and inventory.film_id=film.film_id
and category.name='Horror' 
group by film.title
limit 3;

-- Find out the list of customers from India who have rented sports movies.
select distinct customer.first_name from customer
inner join address
on customer.address_id=address.address_id
inner join city
on city.city_id=address.city_id
inner join country
on city.country_id=country.country_id
inner join rental
on rental.customer_id=customer.customer_id
inner join inventory
on inventory.inventory_id=rental.inventory_id
inner join film
on film.film_id=inventory.film_id
inner join film_category
on film.film_id=film_category.film_id
inner join category
on category.category_id=film_category.category_id
and country.country='India'
and category.name='Sports';


-- Find out the list of customers from Canada who have rented “NICK WAHLBERG” movies.
select distinct customer.first_name from customer
inner join address
on customer.address_id=address.address_id
inner join city
on city.city_id=address.city_id
inner join country
on country.country_id=city.country_id
inner join rental
on rental.customer_id=customer.customer_id
inner join inventory
on inventory.inventory_id=rental.inventory_id
inner join film_actor
on film_actor.film_id=inventory.film_id
inner join actor
on actor.actor_id=film_actor.actor_id
and country.country='Canada'
and actor.first_name='NICK'
and actor.last_name='WAHLBERG';

--  Find out the number of movies in which “SEAN WILLIAMS” acted.
select count(distinct film.film_id) as number_of_movies
from actor
inner join film_actor  
on actor.actor_id = film_actor.actor_id
inner join film  
on film_actor.film_id = film.film_id
where actor.first_name = 'SEAN'
and actor.last_name = 'WILLIAMS';



