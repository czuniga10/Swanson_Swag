UPDATE rating
SET
    rating_count = rating_count + 1,
    --calculates new rating
    rating = (rating * (rating_count-1) + $2) / rating_count 
    
WHERE
    quote_id = $1

returning *
;