UPDATE rating
SET
    rating_count = rating_count + 1,
    --calculates new rating using new rating recieved from FE
    rating = (rating * (rating_count-1) + $2) / rating_count 
    
WHERE
    quote_id = $1

returning *
;