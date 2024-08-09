
-- Find out the number of documentaries with deleted scenes.
select count(distinct film.title) as no_of_documentaries from film
inner join film_category
on film_category.film_id=film.film_id
inner join category
on category.category_id=film_category.category_id
and category.name='Documentary'
and film.special_features LIKE '%Deleted Scenes%';

-- Find out the number of sci-fi movies rented by the store managed by Jon Stephens.
select count(distinct film.film_id) as no_of_movies from rental 
join inventory  
on rental.inventory_id = inventory.inventory_id
join film  
on inventory.film_id = film.film_id
join film_category  
on film.film_id = film_category.film_id
join category  
on film_category.category_id = category.category_id
join store  
on inventory.store_id = store.store_id
join staff
on store.manager_staff_id = staff.staff_id
where category.name = 'Sci-Fi'
and staff.first_name = 'Jon'
and staff.last_name = 'Stephens';

-- Find out the total sales from Animation movies.
select SUM(payment.amount) as total_sales from payment
inner join rental
on rental.rental_id=payment.rental_id
inner join inventory
on inventory.inventory_id=rental.inventory_id
inner join film 
on film.film_id=inventory.film_id
inner join film_category
on film_category.film_id=film.film_id
inner join category
on category.category_id=film_category.category_id
and category.name='Animation';

-- Find out the top 3 rented category of movies by “PATRICIA JOHNSON”
select category.name,count(rental.rental_id) as rental_count from rental
inner join customer
on rental.customer_id=customer.customer_id
inner join inventory
on inventory.inventory_id=rental.inventory_id
inner join film_category
on inventory.film_id=film_category.film_id
inner join category
on category.category_id=film_category.category_id
and customer.first_name='PATRICIA' 
and customer.last_name='JOHNSON'
group by category.name
order by 
rental_count desc
limit 3;

-- Find out the number of R rated movies rented by “SUSAN WILSON”.
select count(*) as movie_count from rental 
join customer 
on rental.customer_id = customer.customer_id
join inventory  
on rental.inventory_id = inventory.inventory_id
join film 
on inventory.film_id = film.film_id
where customer.first_name = 'SUSAN'
and customer.last_name = 'WILSON'
and film.rating = 'R';

